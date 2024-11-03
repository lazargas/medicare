import { auth } from '@/auth';
import Navbar from '@/components/atoms/Navbar';
import Profile from '@/components/atoms/Profile';
import { getBlogsForProfile } from '@/lib/api';
import React from 'react'

type Props = {}

const page = async (props: Props) => {
  const session = await auth();
  const blogs = await getBlogsForProfile(session?.user?.email!);
  return (
    <>
    <Navbar />
    <Profile user={session?.user} blogs={blogs} title="Your Posts" />
    </>
  )
}

export default page