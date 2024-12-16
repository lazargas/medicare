import { auth } from '@/auth';
import Navbar from '@/components/atoms/Navbar';
import RegistrationForm from '@/components/Forms/Registration';
import Footer from '@/components/molecules/Footer';
import { getBlogsForProfile, getUserByEmail } from '@/lib/api';
import React from 'react'

type Props = {}

const page = async (props: Props) => {
    const session = await auth();
    let blogs = [];

    if (session && session?.user) {
        blogs = await getBlogsForProfile(session?.user.email!); 
       
    }
    return (
        <>
            <Navbar />
            {
                session && session?.user ?
                    <>
                        <RegistrationForm user={session?.user} />
                    </>
                    :
                    <div className='flex h-[80dvh] justify-center items-center m-[2.5rem] text-center' >
                        <h1 className='text-xl md:text-4xl font-semibold' >Please sign in to Complete registration</h1>
                    </div>
            }
            <Footer blogs={[...blogs].slice(0, 3)} />
        </>
    )
}

export default page