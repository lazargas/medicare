import Image from 'next/image'
import logo from '@/assets/Images/DoctorNewsDaily.svg'
import Link from 'next/link'
import SignIn from './SignIn'
import SignOut from './SignOut'
import menu from '@/assets/Images/menu.svg'
import { DNA } from 'react-loader-spinner'

type Props = {
  session: any
}

const NavbarList = async (props: Props) => {
  const session = props.session;
  let loader = false;
  const handleClick = () => {
    loader = true;
  }
  return (
    <nav className="relative flex w-full h-[80px] items-center justify-between p-[1.5rem] text-xl font-semibold">
      {/* {
        loader && <div className='fixed top-0 left-0 bg-[#fff] h-screen w-full flex items-center justify-center z-[99]' >
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      } */}
      <Link href="/"><Image src={logo} height={100} width={200} alt='logo' /></Link>
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
            <button className='hidden md:hidden block z-[99]' >
              <Image src={menu} height={48} width={48} alt='profile' className='rounded-[50%]' />
            </button>
            <div className={`absolute h-screen w-full hidden `} >
              <div className='flex flex-col items-center justify-center gap-[2rem]'>
                <Link href="/registration">Register</Link>
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
