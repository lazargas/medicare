import { auth } from '@/auth';
import Navbar from '@/components/atoms/Navbar';
import Profile from '@/components/atoms/Profile';
import Footer from '@/components/molecules/Footer';
import { getBlogsForProfile, getUserByEmail } from '@/lib/api';
import React from 'react';

export default async function AuthorPage(context: any) {
    const { author } = await context.params;
    const session = await auth();
    const user = await getUserByEmail(author);
    let blogs = [];
    blogs = await getBlogsForProfile(user._id);
    return (
        <>
            <Navbar />
            {session?.user ? (
                <Profile userData={user} currentUser={session?.user} user={user} blogs={blogs} title={`${user.full_name}'s Posts`} />
            ) : (
                <div className='flex h-[80dvh] justify-center items-center m-[2.5rem]'>
                    <h1 className='text-4xl font-semibold'>Please sign in to view profile</h1>
                </div>
            )}
             <Footer blogs={blogs.slice(0, 3)} />
        </>
    );
}
