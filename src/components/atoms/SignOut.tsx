import { signOut } from "@/auth"
import Image from "next/image"
import googleLogo from "@/assets/Images/google.svg"
import { BlogContext } from "@/context/BlogContext"

 
const SignOut = async () => {

  
  return (
    <form
      action={
        async () =>{
          
          "use server"
          await signOut();
        }
      }
    >
      <button type="submit">
         <p className="text-xl" >Sign Out</p>
      </button>
    </form>
  )
} 

export default SignOut;


