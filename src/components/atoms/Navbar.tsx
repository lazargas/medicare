import React, { use } from 'react'
import Image from 'next/image'
import logo from '@/assets/Images/AKANSHA.svg'
import Link from 'next/link'
import { auth } from '@/auth'
import { testDatabaseConnection } from '@/lib/test'


type Props = {}

const Navbar = async (props: Props) => {

  const session = await auth();
  const isConnected:boolean = await testDatabaseConnection();

  return (
    <nav className="flex w-full items-center justify-between p-[2rem] text-xl font-semibold" >
        
        <Image src={logo} height={24} width={96} alt='logo' />
        
            {
                session && session?.user ?
                <div className='flex items-center justify-center gap-[2rem]' >
                    <Link href="/">Home</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    <Link href="/profile">Profile</Link>
                    <Link href="/api/auth/signout">Sign Out</Link>
                </div>
                : 
                <div>
                    <Link href="/api/auth/signin">Sign In</Link> 
                </div> 
            }
    </nav>
  )
}

export default Navbar