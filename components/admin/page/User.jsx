import Image from 'next/image'
import React, { useState } from 'react'
import Header from '../base/Header'
import InputSection from '../base/InputSection'
import ListedInput from '../base/ListedInput'
import PrimaryButton from '../base/PrimaryButton'
import PrimaryInput from '../base/PrimaryInput'
import SectionLink from '../base/SectionLink'
import Textarea from '../base/Textarea'

function User() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    whatsappNumber: "",
    city: "",
    country: "",
    tagline: "",
    intro: "",
    skills: []
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  return (
    <main className='px-4 pt-6 flex'>
      <ul className='hidden md:block space-y-2 w-48 pt-20 font-medium pr-8'>
        <SectionLink id="username" name="Username" />
        <SectionLink id="image" name="Profile" />
        <SectionLink id="contactDetail" name="Contact Detail" />
        <SectionLink id="address" name="Address" />
        <SectionLink id="bio" name="Bio" />
      </ul>
      <div className='w-full'>
        <Header heading="User Setting" detail="Update your profile and personal details." image="/boy-512.webp" />
        <form >
          <InputSection id="username" title="Username">
            <PrimaryInput {...{ values, setValues, placeholder: "First Name", name: "firstName" }} />
            <PrimaryInput {...{ values, setValues, placeholder: "Last Name", name: "lastName" }} />
          </InputSection>
          <InputSection id="image" title="Your Photo" desc="This will be displayed on your profile.">
            <div className='flex justify-between  py-4'>
              <span className='w-24 aspect-square relative rounded-full overflow-hidden bg-teal-100 shadow-lg shadow-slate-900/50'>
                <Image src={"/boy-512.webp"} fill="object-fit" />
              </span>
              <div className='space-x-3'>
                <button className='px-2 py-1 bg-gray-100 rounded text-gray-800 hover:bg-gray-200 shadow-lg shadow-slate-900/50'>
                  Delete
                </button>
                <button className='px-2 py-1 bg-gray-100 rounded text-gray-800 hover:bg-gray-200 shadow-lg shadow-slate-900/50'>
                  Update
                </button>
              </div>
            </div>
          </InputSection>
          <InputSection id="contactDetail" title="Your Contact Detail" desc="this contact is use by Client">
            <PrimaryInput {...{ values, setValues, placeholder: "Phone Number", name: "phoneNumber", type: "tel", maxLen: 11 }} />
            <PrimaryInput {...{ values, setValues, placeholder: "Email Address", name: "email", type: "email" }} />
            <PrimaryInput {...{ values, setValues, placeholder: "Whatsapp Number", name: "whatsappNumber", isRequired: false, type: "tel", maxLen: 11 }} />
          </InputSection>
          <InputSection id="address" title="Address" desc="*current address">
            <PrimaryInput {...{ values, setValues, placeholder: "City", name: "city" }} />
            <PrimaryInput {...{ values, setValues, placeholder: "Country", name: "country" }} />
          </InputSection>
          <InputSection id="bio" title="Your Bio" desc="Write a short introduction.">
            <PrimaryInput {...{ values, setValues, placeholder: "Tagline", name: "tagline", isRequired: false }} />
            <Textarea {...{ values, setValues, placeholder: "Your short introduction...", name: "intro" }} />
            <ListedInput {...{ values, setValues, placeholder: "Skill", name: "skills", desc: "At least add three skills" }} />
          </InputSection>
          <section className='pt-5 pb-8 w-full flex justify-end'>
            <PrimaryButton {...{ text: "Save Changes", isLoading, isSuccess, setIsSuccess }} />
          </section>
        </form>
      </div>
    </main>
  )
}

export default User