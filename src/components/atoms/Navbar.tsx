import React from 'react'
import Image from 'next/image'
import logo from '@/assets/Images/logo.svg'
import Link from 'next/link'
import { auth } from '@/auth'
import SignIn from './SignIn'
import SignOut from './SignOut'
import menu from '@/assets/Images/menu.svg'
import NavbarList from './NavbarList'

type Props = {}

const Navbar = async (props: Props) => {
  const session = await auth();
  return (
    <NavbarList session={session} />
  )
}

export default Navbar
