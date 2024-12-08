import { auth } from '@/auth';
import AdminPanel from '@/components/atoms/AdminPanel';
import Navbar from '@/components/atoms/Navbar';
import { getBlogs } from '@/lib/api';
import React from 'react';

export const fetchCache = 'force-no-store';

export default async function AdminPage(context: any) {
  const session = await auth();
  const superUserEmail = process.env.NEXT_PUBLIC_SUPERUSER_EMAIL;
  const blogs = await getBlogs();
  const filteredBlogs = blogs.filter((article: any) => article.Public === false);
  return (
    <>
      <Navbar />
      {
        session && session?.user?.email === superUserEmail ?
          <AdminPanel user={session?.user} blogs={filteredBlogs} />
          :
          <>
            <div className='w-full h-screen flex flex-col items-center justify-center px-[2rem] gap-[1rem] font-semibold' >
              <p className='text-xl text-[#008000] ' >Let's leave this to the professionals</p>
            </div>
          </>
      }

    </>
  );
}
