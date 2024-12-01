"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Grid from './Grid';
import { DNA } from 'react-loader-spinner';
import "@/styles/profile.css"
import RegistrationForm from '../Forms/Registration';

type Props = {
    user: any,
    blogs: any,
    title: string
}

const Profile = (props: Props) => {
    const { user, blogs, title } = props;
    return (
        <div className="min-h-screen flex items-center justify-center  flex-col py-8">
            <div className="container mx-auto px-4">
                {/* Profile Section */}
                <div className="text-center mb-12">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                        {/* Profile picture placeholder - replace src with actual image */}
                        {/* <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center"> */}
                        <Image className='object-fit rounded-[50%] ' width={256} height={64} src={user.image} alt="Profile Picture" />
                        {/* </div> */}
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                </div>
            </div>
            <div className='h-auto w-[80vw] flex flex-col gap-[1.5rem] items-center justify-center' >
                <RegistrationForm user={user} />
                {
                    blogs.length===0 ? <h1 className="title">No Blogs Under Your Profile</h1>  : <Grid blogs={blogs} title={title} />
                }
            </div>
        </div>
    )
}

export default Profile