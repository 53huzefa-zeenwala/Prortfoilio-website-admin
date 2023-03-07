import React, { useState } from 'react'
import Header from '../base/Header'
import InputSection from '../base/InputSection'
import ListedImageInput from '../base/ListedImageInput'
import ListedInput from '../base/ListedInput'
import PrimaryButton from '../base/PrimaryButton'
import PrimaryInput from '../base/PrimaryInput'
import SectionLink from '../base/SectionLink'
import SelectInput from '../base/SelectInput'
import Textarea from '../base/Textarea'
import TextEditor from '../base/TextEditor'

function AddProject() {
    const [values, setValues] = useState({
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
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [description, setDescription] = useState("")
    const categoryList = [
        { value: "nextjs", name: "Next Js" },
        { value: "reactjs", name: "React Js" },
        { value: "javascript", name: "Javascript" },
    ]
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
                <InputSection id="projectName" title="Name">
                    <PrimaryInput {...{ name: "name", placeholder: "Project Name", setValues, values, isUnique: true, maxLen: 50 }} />
                </InputSection>
                <InputSection id="tags" title="Tags" desc="List the tech used in the project">
                    <ListedInput {...{ desc: "At least add three tags.", setValues, values, name: "tags", placeholder: "Tech used in project", maxLen: 20 }} />
                </InputSection>
                <InputSection id="category" title="Category" desc="Choose the category you want to put your project in.">
                    <SelectInput {...{ setValues, values, list: categoryList, name: "category", placeholder: "Select Category" }} />
                </InputSection>
                <InputSection id="images" title="Images" desc="Added screenshots of your project" >
                    <ListedImageInput {...{ desc: "At least add three images.", setValues, values, name: "images", placeholder: "Project screenshot" }} />
                </InputSection>
                <InputSection id="descriptions" title="Descriptions" desc="Short description appear on home and projects page and description appear on main project page">
                    <Textarea {...{ name: "shortDescription", setValues, values, isUnique: true, placeholder: "Short Description", maxLen: 200, minLen: 150 }} />
                    <TextEditor {...{ setDescription, description }} />
                </InputSection>
                <InputSection id="languageUsed" title="Language Used" desc="Add frontend and backend language and database used in the project">
                    <PrimaryInput {...{ name: "frontendLanguage", setValues, values, placeholder: "Frontend Language", maxLen: 25, minLen: 5 }} />
                    <PrimaryInput {...{ name: "backendLanguage", setValues, values, placeholder: "Backend Language", maxLen: 25, minLen: 5, isRequired: false }} />
                    <PrimaryInput {...{ name: "database", setValues, values, placeholder: "Database or API used", maxLen: 50, minLen: 5, isRequired: false }} />
                </InputSection>
                <InputSection id="sourceAndUrl" title="Source Code and Project Link" desc="Provide Project Source Code / Github Link and Project Url if Deployed on server">
                    <PrimaryInput {...{ name: "sourceCode", setValues, values, placeholder: "Source Code", isUnique: true, maxLen: 60 }} />
                    <PrimaryInput {...{ name: "deployUrl", setValues, values, placeholder: "Project URL", isRequired: false, maxLen: 60 }} />
                </InputSection>
                <InputSection id="projectDates" title="Project Dates" desc="Add date project started at and if deployed than deployed at">
                    <PrimaryInput {...{ type: "date", setValues, values, name: "createdAt", placeholder: "Created At" }} />
                    <PrimaryInput {...{ type: "date", setValues, values, name: "deployedAt", placeholder: "Deployed At", isRequired: false }} />
                </InputSection>
                <InputSection id="teamUpWith" title="People You team Up" desc="Name of people who contribute in this project.">
                    <ListedInput {...{ setValues, values, name: "teamUpWith", placeholder: "Team Up With", maxLen: 25, isRequired: false }} />
                </InputSection>
                <section className='pt-5 pb-8 w-full flex justify-end'>
                    <PrimaryButton {...{ text: "Add Product", isLoading, isSuccess, setIsSuccess }} />
                </section>
            </div>
        </main>
    )
}

export default AddProject