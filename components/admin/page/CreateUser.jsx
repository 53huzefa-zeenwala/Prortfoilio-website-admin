import { useStateContext } from '@/context/Statecontext'
import { auth, db } from '@/firebase'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import Header from '../base/Header'
import InputSection from '../base/InputSection'
import PrimaryButton from '../base/PrimaryButton'
import PrimaryInput from '../base/PrimaryInput'
import SelectInput from '../base/SelectInput'

function CreateUser() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const initialValue = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: ""
    }
    const [values, setValues] = useState(initialValue)
    const {setAlert} = useStateContext()
    async function handleOnClick(e) {
        e.preventDefault()
        setIsLoading(true)
        if (values.password !== values.confirmPassword) {
            setAlert({isShow: true, duration: 3000, message: "Password not match", type: "error"})
            return
        }
        try {
            const {user} = await createUserWithEmailAndPassword(auth, values.email, values.password)
            const data = {userId: user.uid, username: values.username, email: values.email, role: values.role }
            await setDoc(doc(db, `users`, user.uid), data);
            await signOut(auth)
            setAlert({isShow: true, duration: 3000, message: "User created successfully", type: "success"})
            setIsSuccess(true)
            setValues(initialValue)
        } catch (error) {
            console.log(error)
            setAlert({isShow: true, duration: 3000, message: error.message, type: "error"})
        }
        setIsLoading(false)
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
                <form onSubmit={handleOnClick}>
                    <InputSection id="username" title="Username">
                        <PrimaryInput {...{ values, setValues, placeholder: "User Name", name: "username", maxLen: 30, minLen: 5 }} />
                    </InputSection>
                    <InputSection id="email" title="Email">
                        <PrimaryInput {...{ values, setValues, placeholder: "Email", name: "email", maxLen: 50, minLen: 6, type: "email" }} />
                    </InputSection>
                    <InputSection id="role" title="User role" desc="Role determine users access to admin">
                        <SelectInput {...{ name: "role", placeholder: "Select a role", list: roles, setValues, values }} />
                    </InputSection>
                    <InputSection id="password" title="Password" desc="Make sure it is stong.">
                        <PrimaryInput {...{ values, setValues, placeholder: "Password", name: "password", maxLen: 30, minLen: 8, type:"password" }} />
                    </InputSection>
                    <InputSection id="confirmPassword" title="Confirm Password" desc="Make sure it match the password field.">
                        <PrimaryInput {...{ values, setValues, placeholder: "Confirm Password", name: "confirmPassword", maxLen: 30, minLen: 8, type:"password" }} />
                    </InputSection>
                    <section className='pt-5 pb-8 w-full flex justify-end items-center'>
                        <span className='sm:pr-3 pr-1 text-xs sm:text-sm text-red-500 '>After creating user, you will be logged out.</span>
                        <PrimaryButton {...{ text: "Create User", isLoading, isSuccess, setIsSuccess }} />
                    </section>
                </form>
            </div>
        </main>
    )
}

export default CreateUser