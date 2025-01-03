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
         <p className="bg-[#F0F8FF] text-[18px] text-black hover:text-white px-4 py-2 rounded-[20px] hover:bg-blue-700 transition duration-200" >Sign Out</p>
      </button>
    </form>
  )
} 

export default SignOut;


