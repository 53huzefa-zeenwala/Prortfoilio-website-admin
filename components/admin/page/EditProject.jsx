import { useStateContext } from '@/context/Statecontext'
import getDocument from '@/firebase/getDocument'
import updateDocument from '@/firebase/updateDocument'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../base/Header'
import ProjectForm from '../base/ProjectForm'
import SectionLink from '../base/SectionLink'

function EditProject() {
    const DOCNAME = "projects"
    const { setLoading, setAlert, currentUser } = useStateContext()
    const initialProp = {
        name: "",
        tags: [],
        images: [],
        category: "",
        shortDescription: "",
        frontendLanguage: "",
        backendLanguage: "",
        database: "",
        sourceCode: "",
        deployUrl: "",
        createdAt: "",
        deployedAt: "",
        teamUpWith: []
    }
    const [values, setValues] = useState(initialProp)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [description, setDescription] = useState("")
    const { query, replace } = useRouter()
    const { id } = query;
    const handleOnSubmit = async e => {
        e.preventDefault()
        if (!currentUser) {
            return
        }
        setIsLoading(true)
        try {
            const data = { ...values, description}
            await updateDocument(DOCNAME, data, id)
            setAlert({ isShow: true, duration: 3000, message: "Successfully Updated", type: "success" })
            setIsSuccess(true)
        } catch (error) {
            setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
        }
        setIsLoading(false)
    }
    useEffect(() => {
        async function fetchDocuments() {
            setLoading(true)
            const document = await getDocument(DOCNAME, id);
            if (document === "no data") {
                setAlert({ isShow: true, duration: 3000, message: "No data found check url", type: "error" })
                replace("/admin/projects")
            } else {
                setLoading(false)
                const {id, description, ...data} = document
                setDescription(description)
                setValues(data)
            }
        }
        fetchDocuments()
    }, [])
    return (
        <main className='px-4 pt-6 flex'>
            <ul className='hidden md:block w-48 pt-20 font-medium pr-8'>
                <SectionLink id="projectName" name="Name" />
                <SectionLink id="tags" name="Tags" />
                <SectionLink id="category" name="Category" />
                <SectionLink id="images" name="Images" />
                <SectionLink id="descriptions" name="Descriptions" />
                <SectionLink id="languageUsed" name="Language Used" />
                <SectionLink id="sourceAndUrl" name="Source And Url" />
                <SectionLink id="projectDates" name="Dates" />
                <SectionLink id="teamUpWith" name="Team Up With" />
            </ul>
            <div className="w-full">
                <Header heading="Edit Project" detail="Edit your project and detail about it." image="/editproject.jfif" />
                <ProjectForm {...{ handleOnSubmit, isLoading, isSuccess, setIsSuccess, values, setValues, setDescription, description, text: "Update Project" }} />
            </div>
        </main>
    )
}

export default EditProject