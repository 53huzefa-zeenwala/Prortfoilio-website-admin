import React from 'react'
import Header from '../base/Header'
import SearchBar from '../base/SearchBar'

function Contacts() {
    const contacts = [
        {
            name: "Huzefa",
            email: "Huzefa.zeenwala.gmail.com",
            phone: "7879293277",
            service: "Web Design",
            message: "Text Generation API. The text generation API is backed by a large-scale unsupervised language model that can generate paragraphs of text. This transformer-based language model, based on the GPT-2 model by OpenAI, intakes a sentence or partial sentence and predicts subsequent text from that input.",
            dateTime: "12:14 03-07-2023",
            isPublished: false
        },
        {
            name: "Chaman",
            email: "chaman.gmail.com",
            phone: "7879293277",
            service: "Web Design",
            message: "Text Generation API. The text generation API is backed by a large-scale unsupervised language model that can generate paragraphs of text. This transformer-based language model, based on the GPT-2 model by OpenAI.",
            dateTime: "12:14 03-07-2023",
            isPublished: true
        },
    ]
    return (
        <main className='px-4 py-6 flex'>
            <div className="w-full">
                <Header heading="Contacts" detail="People Contacts to you" image="/contactImage.png" />
                <SearchBar />
                <div className='pt-10'>
                    {contacts.map((contact, i) => (
                        <section key={i} className="w-full pt-8 pb-4 border-t border-b border-gray-700">
                            <div className="sm:max-w-4xl max-w-sm md:px-10 sm:px-6 px-2 w-full flex md:gap-12 sm:gap-8 gap-4 m-auto flex-col sm:flex-row">
                                <div className='flex flex-col md:min-w-[15rem] sm:min-w-[10rem]'>
                                    <span className='font-semibold sm:text-lg'>{contact.name}</span>
                                    <span className='sm:text-sm text-xs text-gray-300 break-words'>{contact.email}</span>
                                    <span className='sm:text-sm text-xs text-gray-300'>{contact.phone}</span>
                                </div>
                                <div>
                                    <span className='font-semibold sm:text-lg'>{contact.service}</span>
                                    <p className='sm:text-sm text-xs text-gray-300'>{contact.message}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 pt-2 sm:pr-4 text-xs sm:text-sm justify-end'>
                                <span>{contact.dateTime}</span>
                                <span style={{ backgroundColor: contact.isPublished ? "green" : "red" }} className='w-4 aspect-square rounded-full'></span>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Contacts