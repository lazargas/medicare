import React, { memo } from 'react'
import Image from 'next/image'
import logo from '@/assets/Images/logo.svg'
import Link from 'next/link'
import { auth } from '@/auth'
import SignIn from './SignIn'
import SignOut from './SignOut'
import menu from '@/assets/Images/menu.svg'
import NavbarList from './NavbarList'
import { getBlogs, getCategories, getTags } from '@/lib/api'
import SearchNav from './SearchBar'

interface Tag {
  name: string;
  category: string;
}

type Props = {
  tags?:Tag[];
  blogs?:any[];
  session?:any;
}

const Navbar = async (props: Props) => {
  let {tags,blogs,session} = props;
  if(!tags || tags.length===0){
    tags = await getTags();
  }
  if(!blogs || blogs.length===0){
    blogs = await getBlogs();
  }
  if(!session || !session.user){
    session = await auth();
  }
  const categories = await getCategories();
 
  return (
    <>
     <NavbarList session={session} />
     <SearchNav tags={tags!} blogs={blogs!} categories={categories}/>
    </>
  )
}

export default memo(Navbar)
