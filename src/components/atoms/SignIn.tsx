import { signIn } from "@/auth"
import Image from "next/image"
import googleLogo from "@/assets/Images/google.svg"
import { auth } from "@/auth"

 
const SignIn = async () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google");
      }} 
    >
      <button className="flex items-center justify-center gap-[2rem] border-2 py-[0.5rem] px-[1rem] rounded-[5px]" type="submit">
        <p className="text-xl font-semibold" >Sign In</p>
        <Image src={googleLogo} height={24} width={24} alt="Sign In with google" />
      </button>
    </form>
  )
} 

export default SignIn;