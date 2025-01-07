import { auth } from '@/auth'
import NavbarList from '@/components/atoms/NavbarList'
import CreateArticleForm from '@/components/Forms/CreateArticle'
import { getUserByEmail } from '@/lib/api'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
  const session = await auth();
  let userData:any;
  if(session && session?.user && session.user.email)
  userData = await getUserByEmail(session?.user.email);

  return (
    <>
      <NavbarList 
      session={session}
      />
      {
        session && session?.user ?
          <div className='flex justify-center items-center m-[2.5rem] ' >
            <CreateArticleForm user={session?.user} userData={userData} />
          </div>
          :
          <div className='flex h-[80dvh] justify-center items-center m-[2.5rem] text-center' >
            <h1 className='text-xl md:text-4xl font-semibold' >Please sign in to view your profile</h1>
          </div>
      }
    </>
  )
}

export default page