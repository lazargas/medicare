import { auth } from '@/auth';
import Navbar from '@/components/atoms/Navbar';
import NavbarList from '@/components/atoms/NavbarList';
import Tnc from '@/components/molecules/Tnc';
import React from 'react';

type Props = {}

const page = async (props:Props) => {
  const session = await auth();
  return (
    <>
      <NavbarList  
      session={session}
      />
      <Tnc/>
    </>
  );
}

export default page;
