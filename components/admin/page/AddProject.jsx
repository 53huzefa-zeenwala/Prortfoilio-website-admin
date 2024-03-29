import { useStateContext } from '@/context/Statecontext'
import addDocument from '@/firebase/addDocument'
import getDocumentCount from '@/firebase/getDocumentCount'
import React, { useState } from 'react'
import Header from '../base/Header'
import InputSection from '../base/InputSection'
import ListedImageInput from '../base/ListedImageInput'
import ListedInput from '../base/ListedInput'
import PrimaryButton from '../base/PrimaryButton'
import PrimaryInput from '../base/PrimaryInput'
import ProjectForm from '../base/ProjectForm'
import SectionLink from '../base/SectionLink'
import SelectInput from '../base/SelectInput'
import Textarea from '../base/Textarea'
import TextEditor from '../base/TextEditor'

function AddProject() {
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
    const handleOnSubmit = async e => {
        e.preventDefault()
        if (!currentUser) {
            return
        }
        setIsLoading(true)
        try {
            const data = { ...values, description, index: await getDocumentCount(DOCNAME) + 1 }
            await addDocument(DOCNAME, data)
            setAlert({ isShow: true, duration: 3000, message: "Successfully created", type: "success" })
            setIsSuccess(true)
            setValues(initialProp)
            setDescription("")
        } catch (error) {
            setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
        }
        setIsLoading(false)
    }
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
                <Header heading="New Project" detail="Add your new project and detail about it." image="/newproject.png" />
                <ProjectForm {...{handleOnSubmit, isLoading, isSuccess, setIsSuccess, values, setValues, setDescription, description}} />
            </div>
        </main>
    )
}

export default AddProject