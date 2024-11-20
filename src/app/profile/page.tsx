import { auth } from '@/auth';
import Navbar from '@/components/atoms/Navbar';
import Profile from '@/components/atoms/Profile';
import SignOut from '@/components/atoms/SignOut';
import { getBlogsForProfile, getUserByEmail } from '@/lib/api';
import Link from 'next/link';
import React from 'react'

type Props = {}

const page = async (props: Props) => {
    const session = await auth();
    let blogs = [];

    if (session && session?.user) {
        blogs = await getBlogsForProfile(session?.user.email!); 
        console.log(blogs);
    }
    return (
        <>
            <Navbar />
            {
                session && session?.user ?
                    <>
                        <div className='w-full md:hidden h-auto flex flex-col items-end justify-end px-[2rem] gap-[1rem] font-semibold' >
                            <SignOut />
                            <Link className='text-xl' href="/create">Create Blog</Link>
                        </div>
                        <Profile user={session?.user} blogs={blogs} title="Your Posts" />
                    </>
                    :
                    <div className='flex h-[80dvh] justify-center items-center m-[2.5rem] text-center' >
                        <h1 className='text-xl md:text-4xl font-semibold' >Please sign in to view your profile</h1>
                    </div>
            }

        </>
    )
}

export default page