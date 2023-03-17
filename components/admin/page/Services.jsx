import React, { useEffect, useState } from 'react'
import Header from '../base/Header'
import Textarea from '../base/Textarea'
import Image from 'next/image'
import PrimaryInput from '../base/PrimaryInput'
import Modal from '../base/Modal'
import PrimaryButton from '../base/PrimaryButton'
import ImageInput from '../base/ImageInput'
import { useStateContext } from '@/context/Statecontext'
import getDocumentCount from '@/firebase/getDocumentCount'
import addDocument from '@/firebase/addDocument'
import updateDocument from '@/firebase/updateDocument'
import getDocuments from '@/firebase/getDocuments'
import DragAndDropParent from '../base/DragAndDropParent'
import { Draggable } from 'react-beautiful-dnd'

function Services() {
    const DOCNAME = "service"
    const { currentUser, setAlert, setLoading, setDeleteDocument, deleteDocument } = useStateContext()
    const [isOpen, setIsOpen] = useState(false)
    const initialProp = {
        serviceName: "",
        doc: "",
        image: ""
    }
    const [values, setValues] = useState(initialProp)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [items, setItems] = useState([])
    const handleOnSubmit = async e => {
        e.preventDefault()
        if (!currentUser) {
            setIsOpen({ type: "", show: false })
            return
        }
        setIsLoading(true)
        try {
            const data = {
                index: values.index || (await getDocumentCount(DOCNAME) + 1),
                serviceName: values.serviceName,
                doc: values.doc,
                image: values.image
            }
            const res = isOpen.type === 'new' ? await addDocument(DOCNAME, data) : await updateDocument(DOCNAME, data, isOpen.id)

            setAlert({ isShow: true, duration: 3000, message: res, type: "success" })
            setIsOpen({
                type: "",
                show: false
            })
            setIsSuccess(true)
            setValues(initialProp)
        } catch (error) {
            setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
        }
        setIsLoading(false)
    }
    useEffect(() => {
        async function fetchDocuments() {
            setLoading(true)
            const documents = await getDocuments(DOCNAME);
            setItems(documents)
            setLoading(false)
        }
        !deleteDocument.show || !isLoading ? fetchDocuments() : "";
    }, [isLoading, deleteDocument.show])
    return (
        <main className='px-4 py-6 flex'>
            <div className="w-full">
                <Header image="/servicespage.png" heading="Services" detail="Services you provide." />
                <Modal {...{ isOpen, setIsOpen, size: "md", heading: `${isOpen.type === "new" ? "Add New" : "Update"} Service` }}>
                    <form className="flex flex-col justify-center w-full" onSubmit={handleOnSubmit}>
                        <label htmlFor="serviceName" className='text-lg font-medium text-gray-400'>Service name</label>
                        <PrimaryInput {...{ setValues, values, name: "serviceName", placeholder: "Name", isRequired: false }} />
                        <label htmlFor="doc" className='text-lg font-medium text-gray-400'>Description</label>
                        <Textarea {...{ setValues, values, name: "doc", placeholder: "Description", isRequired: false }} />
                        <ImageInput {...{ setValues, values }} />
                        <div className="py-2 flex justify-end gap-4 font-medium">
                            <button type='button' className='text-gray-300 hover:text-gray-200' onClick={() => setIsOpen({ show: false })}>Close</button>
                            <PrimaryButton {...{ isLoading, setIsSuccess, isSuccess, text: isOpen.type === "new" ? "Add Service" : "Update Service" }} />
                        </div>
                    </form>
                </Modal>
                <div className='w-full flex justify-end'>
                    <button className='px-4 py-2 rounded font-medium text-gray-300 bg-gray-600 hover:bg-gray-500 transition-colors shadow-lg shadow-slate-900/50 capitalize' onClick={() => {
                        setIsOpen({
                            type: "new",
                            show: true
                        })
                        setValues(initialProp)
                    }}>New Service</button>
                </div>
                {items.length !== 0 ? (
                    <DragAndDropParent {...{ docName: DOCNAME, setItems, items, divClasses: "w-full pt-4 flex flex-wrap gap-8 justify-center md:justify-start md:px-8" }}>
                        {items.map((doc, i) => (
                            <Draggable key={doc.id} draggableId={doc.id} index={i} className="">
                                {(provided, snapshot) => (
                                    <li {...provided.draggableProps}
                                        ref={provided.innerRef} className='hoverTag sm:h-[10rem] h-32 max-w-[30rem] sm:mr-10 w-full relative'>
                                        <span {...provided.dragHandleProps} className='absolute bg-teal-100 hover:bg-teal-200 cursor-grab right-2 dragButton p-1 h-full rounded-lg rounded-l-none transition-[right] flex justify-center items-center drop-shadow-xl' data-drag={snapshot.isDragging}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 16 16" version="1.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                                <circle cy="2.5" cx="5.5" r=".75" />
                                                <circle cy="8" cx="5.5" r=".75" />
                                                <circle cy="13.5" cx="5.5" r=".75" />
                                                <circle cy="2.5" cx="10.4957" r=".75" />
                                                <circle cy="8" cx="10.4957" r=".75" />
                                                <circle cy="13.5" cx="10.4957" r=".75" />
                                            </svg>
                                        </span>
                                        <div className='w-full h-full flex bg-gray-700'>
                                            <span className="relative h-full bg-gray-400 aspect-square"
                                                onClick={() => {
                                                    const newDoc = { ...doc }
                                                    delete newDoc.id
                                                    setValues(newDoc)
                                                    setIsOpen({ type: "update", show: true, id: doc.id })
                                                }}>
                                                <Image src={doc.image} alt={doc.serviceName} fill="object-fit" />
                                            </span>
                                            <div className='flex flex-col px-4 pt-2 justify-between bg-gray-700 z-10'>
                                                <span className='font-medium sm:text-lg'>{doc.serviceName}</span>
                                                <p className='sm:text-sm text-xs text-gray-300 font-workSans'>{doc.doc}</p>
                                                <div className='w-full flex justify-end pb-2'>
                                                    <button className='font-medium text-red-500 px-4'  onClick={() => setDeleteDocument({show: true, docId: doc.id, docName: DOCNAME, docImages: [doc.image]})} >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </Draggable>
                        ))}
                    </DragAndDropParent>
                ) : (
                    <h4 className="text-xl font-semibold">
                        No results found
                    </h4>
                )}
            </div>
        </main>
    )
}

export default Services