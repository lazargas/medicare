"use client"
import Image from 'next/image';
import React from 'react'
import Grid from './Grid';
import "@/styles/profile.css"
import RegistrationForm from '../Forms/Registration';
import Placeholder from "../../assets/Images/profile-placeholder.jpg";

type Props = {
    user: any,
    blogs: any,
    title: string,
    currentUser:any,
    userData:any
}

const Profile = (props: Props) => {
    const { currentUser,user, blogs, title,userData } = props;
    return (
        <div className="py-[1.5rem] flex items-center justify-center flex-col">
            <div className="profile-container mx-auto px-4">
                {/* Profile Section */}
                <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                        <Image className='object-fit rounded-[50%] ' width={256} height={64} src={user.image && user.image.length!==0 ? user.image : Placeholder} alt="Profile Picture" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                </div>
            </div>
            <div className='h-auto w-[100%] flex flex-col gap-[1.5rem] items-center justify-center p-[1.5rem]' >
               {currentUser.email===user.email && <RegistrationForm userData={userData} user={currentUser} />} 
                {
                    blogs.length===0 ? <h1 className="profile-title">No Blogs Under Your Profile</h1>  : <Grid blogs={blogs} title={title} />
                }
            </div>
        </div>
    )
}

export default Profile