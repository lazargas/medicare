import React from 'react'
import Image from 'next/image'
import logo from '@/assets/Images/AKANSHA.svg'
import Link from 'next/link'
import { auth } from '@/auth'
import dbConnect from '@/lib/dbConnect'
import SignIn from './SignIn'
import SignOut from './SignOut'
import axios from 'axios'
import { BlogContext } from '@/context/BlogContext'
import { Session } from 'next-auth'




type Props = {}

const Navbar = async (props: Props) => {

  const session = await auth();




  return (
    <nav className="flex w-full h-[80px] items-center justify-between p-[2rem] text-xl font-semibold" >
      <Link href="/"><Image src={logo} height={24} width={96} alt='logo' /></Link>
      {
        session && session?.user ?
          <div className='flex items-center justify-center gap-[2rem]' >
            <Link href="/create">Create Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/profile">Profile</Link>
            <SignOut />
          </div>
          :
          <div>
            <SignIn />
          </div>
      }
    </nav>
  )
}

export default Navbar