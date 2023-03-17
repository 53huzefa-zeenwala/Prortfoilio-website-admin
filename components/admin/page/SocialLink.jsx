import { useStateContext } from '@/context/Statecontext'
import addDocument from '@/firebase/addDocument'
import getDocumentCount from '@/firebase/getDocumentCount'
import getDocuments from '@/firebase/getDocuments'
import updateDocument from '@/firebase/updateDocument'
import React, { useEffect, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import DragAndDropParent from '../base/DragAndDropParent'
import Header from '../base/Header'
import ImageInput from '../base/ImageInput'
import Modal from '../base/Modal'
import PrimaryButton from '../base/PrimaryButton'
import PrimaryInput from '../base/PrimaryInput'

export default function SocialLink() {
    const DOCNAME = "socialLink"
    const { currentUser, setAlert, setLoading, setDeleteDocument, deleteDocument } = useStateContext()
    const [isOpen, setIsOpen] = useState({
        type: "",
        show: false
    })
    const initialProp = {
        name: "",
        link: "",
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
                name: values.name,
                link: values.link,
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
        <main className='px-4 pt-6'>
            <Header image="/sociallink.jpg" heading="Social Link" detail="Social Media Link So People can see your work." />
            <Modal {...{ isOpen, setIsOpen, size: "md", heading: "Add Media Link" }}>
                <form className="flex flex-col justify-center w-full" onSubmit={handleOnSubmit}>
                    <label htmlFor="mediaName" className='text-lg font-medium text-gray-400'>Media name</label>
                    <PrimaryInput {...{ setValues, values, name: "name", placeholder: "Name", isRequired: false, maxLen: 50 }} />
                    <label htmlFor="mediaName" className='text-lg font-medium text-gray-400'>Link</label>
                    <PrimaryInput {...{ setValues, values, name: "link", placeholder: "Link", isRequired: false, type: "url", maxLen: 70, minLen: 8 }} />
                    <ImageInput {...{ setValues, values }} />
                    <div className="py-2 flex justify-end gap-4 font-medium">
                        <button type='button' className='text-gray-300 hover:text-gray-200' onClick={() => setIsOpen({ type: "", show: false })}>Close</button>
                        <PrimaryButton {...{ isLoading, setIsSuccess, isSuccess, text: isOpen.type === "new" ? "Add Media" : "Update Media", isDisable: !values.image }} />
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
                }}>New Link</button>
            </div>
            {items.length !== 0 ? (
                <DragAndDropParent {...{ docName: DOCNAME, setItems, items }}>
                    {items.map((doc, i) => (
                        <Draggable key={doc.id} draggableId={doc.id} index={i} className="">
                            {(provided, snapshot) => (
                                <li
                                    {...provided.draggableProps}
                                    ref={provided.innerRef} className='hoverTag flex cursor-grabbing bg-gray-700 rounded max-w-3xl w-full relative' >
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
                                    <div className='w-[90%] flex cursor-pointer'
                                    onClick={() => {
                                        const newDoc = { ...doc }
                                        delete newDoc.id
                                        setValues(newDoc)
                                        setIsOpen({
                                            type: "update",
                                            show: true,
                                            id: doc.id
                                        })
                                    }}
                                    >
                                        <span className="relative h-16 min-w-16 aspect-square m-1 bg-gray-400 rounded-lg">
                                            <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                                        </span>
                                        <div className='flex flex-col justify-center pl-2 animateTag'>
                                            <span className='font-medium'>{doc.name} Link</span>
                                            <span className="text-sm w-[55vw] text-gray-400 overflow-hidden">{doc.link}</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setDeleteDocument({show: true, docId: doc.id, docName: DOCNAME, docImages: [doc.image]})} className='sm:pr-6 pr-3  bg-gray-700 z-10'>
                                        <svg className='pl-4 h-7 hover:fill-gray-400 fill-gray-300 transition-colors cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.30958 3.54424C7.06741 2.56989 8.23263 2 9.46699 2H20.9997C21.8359 2 22.6103 2.37473 23.1614 2.99465C23.709 3.61073 23.9997 4.42358 23.9997 5.25V18.75C23.9997 19.5764 23.709 20.3893 23.1614 21.0054C22.6103 21.6253 21.8359 22 20.9997 22H9.46699C8.23263 22 7.06741 21.4301 6.30958 20.4558L0.687897 13.2279C0.126171 12.5057 0.126169 11.4943 0.687897 10.7721L6.30958 3.54424ZM10.2498 7.04289C10.6403 6.65237 11.2734 6.65237 11.664 7.04289L14.4924 9.87132L17.3208 7.04289C17.7113 6.65237 18.3445 6.65237 18.735 7.04289L19.4421 7.75C19.8327 8.14052 19.8327 8.77369 19.4421 9.16421L16.6137 11.9926L19.4421 14.8211C19.8327 15.2116 19.8327 15.8448 19.4421 16.2353L18.735 16.9424C18.3445 17.3329 17.7113 17.3329 17.3208 16.9424L14.4924 14.114L11.664 16.9424C11.2734 17.3329 10.6403 17.3329 10.2498 16.9424L9.54265 16.2353C9.15212 15.8448 9.15212 15.2116 9.54265 14.8211L12.3711 11.9926L9.54265 9.16421C9.15212 8.77369 9.15212 8.14052 9.54265 7.75L10.2498 7.04289Z" fill="current" />
                                        </svg>
                                    </button>
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

        </main>
    )
}