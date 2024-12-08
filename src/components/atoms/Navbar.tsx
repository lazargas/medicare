import React from 'react'
import Image from 'next/image'
import logo from '@/assets/Images/logo.svg'
import Link from 'next/link'
import { auth } from '@/auth'
import SignIn from './SignIn'
import SignOut from './SignOut'
import menu from '@/assets/Images/menu.svg'
import NavbarList from './NavbarList'
import { getBlogs, getTags } from '@/lib/api'
import SearchNav from './SearchBar'

type Props = {}

const Navbar = async (props: Props) => {
  const session = await auth();
  const tags = await getTags();
  const blogs = await getBlogs();
  return (
    <>
     <NavbarList session={session} />
     <SearchNav tags={tags} blogs={blogs} />
    </>
    
  )
}

export default Navbar
