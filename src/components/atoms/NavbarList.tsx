import Image from 'next/image'
import logo from '@/assets/Images/logo.svg'
import Link from 'next/link'
import { auth } from '@/auth'
import SignIn from './SignIn'
import SignOut from './SignOut'
import menu from '@/assets/Images/menu.svg'

type Props = {
    session:any
}

const NavbarList = async (props: Props) => {
  const session = props.session;
  return (
    <nav className="relative flex w-full h-[80px] items-center justify-between p-[2rem] text-xl font-semibold">
      <Link href="/"><Image src={logo} height={24} width={96} alt='logo' /></Link>
      {
        session && session.user ?
          (<>
            <div className='flex items-center justify-center gap-[2rem]'>
              <Link className='hidden md:block' href="/create">Create Blog</Link>
              <Link href="/profile">Profile</Link>
              <div className='hidden md:block' >
              <SignOut />
              </div>
              
            </div>
            <button  className='hidden md:hidden block z-[99]' >
                  <Image src={menu} height={48} width={48} alt='profile' className='rounded-[50%]' />
            </button>
            <div className={`absolute h-screen w-full hidden `} >
              <div className='flex flex-col items-center justify-center gap-[2rem]'>
                <Link href="/create">Create Blog</Link>
                <Link href="/profile">Profile</Link>
                <SignOut />
              </div>
            </div>
          </>
        ) : (
      <div>
        <SignIn />
      </div>
      )
      }
    </nav>
  )
}

export default NavbarList
