import React, { useState } from 'react'
import Header from '../base/Header'
import InputSection from '../base/InputSection'
import PrimaryButton from '../base/PrimaryButton'
import PrimaryInput from '../base/PrimaryInput'
import SelectInput from '../base/SelectInput'

function CreateUser() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: ""
    })
    function handleOnClick(e) {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setIsSuccess(true)
        }, 2000);
    }
    const roles = [
        {
            name: "Master Access",
            value: "masterAccess",
        },
        {
            name: "Semi Access",
            value: "semiAccess"
        },
        {
            name: "Viewer",
            value: "viewer"
        }
    ]
    return (
        <main className='px-4 py-6 flex'>
            <div className="w-full">
                <Header heading="Create User" detail="Add admin user to access admin pages" image="/create-user.webp" imageBgColor="rgb(37, 44, 50)" />
                <form>
                    <InputSection id="username" title="Username">
                        <PrimaryInput {...{ values, setValues, placeholder: "User Name", name: "username" }} />
                    </InputSection>
                    <InputSection id="email" title="Email">
                        <PrimaryInput {...{ values, setValues, placeholder: "Email", name: "email" }} />
                    </InputSection>
                    <InputSection id="role" title="User role" desc="Role determine users access to admin">
                        <SelectInput {...{ name: "role", placeholder: "Select a role", list: roles, setValues, values }} />
                    </InputSection>
                    <InputSection id="password" title="Password" desc="Make sure it is stong.">
                        <PrimaryInput {...{ values, setValues, placeholder: "Password", name: "password" }} />
                    </InputSection>
                    <InputSection id="confirmPassword" title="Confirm Password" desc="Make sure it match the password field.">
                        <PrimaryInput {...{ values, setValues, placeholder: "Confirm Password", name: "confirmPassword" }} />
                    </InputSection>
                    <section className='pt-5 pb-8 w-full flex justify-end'>
                        <PrimaryButton {...{ text: "Create User", isLoading, isSuccess, setIsSuccess }} />
                    </section>
                </form>
            </div>
        </main>
    )
}

export default CreateUser