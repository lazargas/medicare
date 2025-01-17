import Image from 'next/image'
import logo from '@/assets/Images/output-onlinepngtools.png'
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
      <a href="/"><Image src={logo} height={65} width={130} alt='logo' /></a>
      {
        session && session.user ?
          (<>
            <div className='flex items-center justify-center gap-[2rem]'>
              <Link className='hidden md:block bg-[#F0F8FF] text-[18px] text-black hover:text-white px-4 py-2 rounded-[20px] hover:bg-blue-700 transition duration-200 ' href="/create">Submit Article</Link>
              <Link href="/profile" className='bg-[#F0F8FF] text-[18px] text-black hover:text-white px-4 py-2 rounded-[20px] hover:bg-blue-700 transition duration-200' >Profile</Link>
              <div className='hidden md:block ' >
                <SignOut />
              </div>
            </div>
            <button className='hidden md:hidden block z-[99] ' >
              <Image src={menu} height={48} width={48} alt='profile' className='rounded-[50%]' />
            </button>
            <div className={`absolute h-screen w-full hidden `} >
              <div className='flex flex-col items-center justify-center gap-[2rem]'>
                <Link href="/registration" className='bg-[#87CEEB] ' >Register</Link>
                <Link href="/create" className='bg-[#87CEEB]' >Submit Article</Link>
                <Link href="/profile" className='bg-[#87CEEB]' >Profile</Link>
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
