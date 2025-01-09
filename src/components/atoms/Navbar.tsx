import React, { memo } from 'react'
import { auth } from '@/auth'
import NavbarList from './NavbarList'
import { getBlogs, getCategories, getSearchContent, getTags } from '@/lib/api'
import SearchNav from './SearchBar'
import AdSlots from '../molecules/AdSlots'

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
  let {blogs,session} = props;
  if(!blogs || blogs.length===0){
    blogs = await getSearchContent();
  }
  if(!session || !session.user){
    session = await auth();
  }
  const categories = await getCategories();
 
  return (
    <>
     <NavbarList session={session} />
     <SearchNav blogs={blogs!} categories={categories}/>
    </>
  )
}

export default memo(Navbar)
