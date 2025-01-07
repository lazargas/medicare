import { auth } from '@/auth';
import NavbarList from '@/components/atoms/NavbarList';
import Profile from '@/components/atoms/Profile';
import SignOut from '@/components/atoms/SignOut';
import Footer from '@/components/molecules/Footer';
import { getBlogsForProfile, getUserByEmail } from '@/lib/api';
import Link from 'next/link';
import React from 'react'
type Props = {}
const page = async (props: Props) => {
    const session = await auth();
    const userData = await getUserByEmail(session?.user?.email!);
    let blogs = [];
    if (session && session?.user) {
        blogs = await getBlogsForProfile(userData._id,{
            limit:100
        }); 
    }
   
    return (
        <>
           <NavbarList session={session} />
            {
                session && session?.user ?
                    <>
                        <div className='w-full md:hidden h-auto flex flex-col items-end justify-end px-[2rem] gap-[1rem] font-semibold' >
                            <SignOut />
                            <Link className='text-xl' href="/create">Submit Article</Link>
                        </div>
                        <Profile userData={userData} currentUser={session?.user} user={session?.user} blogs={blogs} title="Your Posts" />
                    </>
                    :
                    <div className='flex h-[80dvh] justify-center items-center m-[2.5rem] text-center' >
                        <h1 className='text-xl md:text-4xl font-semibold' >Please sign in to view your profile</h1>
                    </div>
            }
            <Footer blogs={[...blogs].slice(0, 3)} />
        </>
    )
}

export default page