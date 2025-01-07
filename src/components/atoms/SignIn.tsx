import { signIn } from "@/auth"
import Image from "next/image"
import googleLogo from "@/assets/Images/google.svg"
import { auth } from "@/auth"
import { BlogContext } from "@/context/BlogContext"

 
const SignIn = async () => {
  
 

  return (
    <form
      action={
        async () => {
          "use server"
          await signIn("google");
        }
      } 
    >
      <button className="flex items-center justify-center gap-[1rem] bg-[#d8e7ff] text-[18px] text-black hover:text-white px-4 py-2 rounded-[20px] hover:bg-blue-700 transition duration-200" type="submit">
        <p className="hidden md:block text-xl font-semibold" >Sign In</p>
        <Image src={googleLogo} height={24} width={24} alt="Sign In with google" />
      </button>
    </form>
  )
} 

export default SignIn;