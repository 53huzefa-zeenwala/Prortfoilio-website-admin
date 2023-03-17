import { useStateContext } from '@/context/Statecontext';
import { storage } from '@/firebase';
import { getDownloadURL, getMetadata, listAll, ref } from 'firebase/storage';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Header from '../base/Header';

function Assets() {
    const { setAlert, setLoading } = useStateContext()
    const [items, setItems] = useState([])
    const storageRef = ref(storage);
    useEffect(() => {
        const getAssets = () => {
            setItems([])
            setLoading(true)
            listAll(storageRef).then((result) => {
                result.items.forEach((itemRef) => {
                    // Get the item's metadata to get the format
                    getMetadata(itemRef).then((metadata) => {
                        let type = metadata.contentType
                        let name = metadata.name
                        console.log(metadata)
                        getDownloadURL(itemRef).then((image) => {
                            setItems(prevState => ([...prevState, { image, type, name }]));
                        }).catch((error) => {
                            console.log('Error getting metadata:', error);
                            setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
                        });
                    }).catch((error) => {
                        console.log('Error getting metadata:', error);
                        setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
                    });

                });
            }).catch((error) => {
                console.log('Error listing items:', error);
                setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
            });
            setLoading(false)
        }
        getAssets()
    }, [])
    console.log(items)
    return (
        <main className='px-4 pt-6 flex h-full'>
            <div className='w-full h-full'>
                <Header heading="All The Assets" detail="Assets used in this website" image="/assets.jpg" />
                <div className="flex flex-wrap w-full h-full gap-3 py-4">
                    {items ? items.map((item, i) => (
                        item.type !== "image/svg+xml" && (
                            <div className='min-w-[20rem] w-[30%] max-w-md relative min-h-[12rem] h-full bg-gray-300/50 bg-opacity-20 rounded-lg overflow-hidden  shadow-lg shadow-slate-900/50' key={i}>
                                <Image src={item.image} alt={item.name} fill sizes="(max-width: 448px) 320px" className='object-contain' />
                            </div>
                        )
                    )) : (
                        <span>No Item Found</span>
                    )}
                </div>
                {items ? (
                    <div>
                        <h3 className='text-2xl w-full font-semibold pt-4'>SVGs Image</h3>
                        <div className="flex flex-wrap w-full h-full gap-3 py-4">
                            {items.map((item, i) => (
                                item.type === "image/svg+xml" && (
                                    <div className='w-16 relative aspect-auto bg-gray-300 rounded-lg overflow-hidden shadow-lg shadow-slate-900/50' key={i}>
                                        <img src={item.image} alt={item.name} className='object-contain' />
                                    </div>
                                )))}
                        </div>
                    </div>
                ) : (
                    <span>No Item Found</span>
                )}
            </div>
        </main>
    )
}

export default Assets