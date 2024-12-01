import { auth } from '@/auth'
import Form from '@/components/atoms/Form'
import Navbar from '@/components/atoms/Navbar'
import CreateArticleForm from '@/components/Forms/CreateArticle'
import { BlogContext } from '@/context/BlogContext'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
  const session = await auth();
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center m-[2.5rem] ' >
        <CreateArticleForm user={session?.user} />
      </div>
    </>
  )
}

export default page