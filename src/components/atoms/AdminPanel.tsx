import React from 'react'
import Grid from './Grid'

type Props = {
  user?: any,
  blogs?: any
}

const AdminPanel = ({ user, blogs }: Props) => {
  return (
    <>
      <div className='p-[1.5rem]'>
        <Grid title={"Please Approve or reject the following Posts"} blogs={blogs} isAdmin={user.email===process.env.NEXT_PUBLIC_SUPERUSER_EMAIL} />
      </div>
    </>
  )
}

export default AdminPanel