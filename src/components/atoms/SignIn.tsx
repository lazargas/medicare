import { signIn } from "@/auth"
import Image from "next/image"
import googleLogo from "@/assets/Images/google.svg"
import { auth } from "@/auth"
import { useContext } from "react"
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
      <button className="flex items-center justify-center gap-[1rem] py-[0.5rem] md:px-[1rem] rounded-[5px]" type="submit">
        <p className="hidden md:block text-xl font-semibold" >Sign In</p>
        <Image src={googleLogo} height={24} width={24} alt="Sign In with google" />
      </button>
    </form>
  )
} 

export default SignIn;