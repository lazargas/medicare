import { signIn } from "@/auth"
import Image from "next/image"
import googleLogo from "@/assets/Images/google.svg"
 
const SignIn = async () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">
        <Image src={googleLogo} height={24} width={24} alt="Sign In with google" />
      </button>
    </form>
  )
} 

export default SignIn;