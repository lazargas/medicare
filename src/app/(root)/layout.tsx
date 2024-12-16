import Navbar from "@/components/atoms/Navbar"
import Footer from "@/components/molecules/Footer"
import { BlogProvider } from "@/context/BlogContext"

export default async function Layout({children}:Readonly<{children:React.ReactNode}>) { 
return (
    <>
    <BlogProvider>
    <Navbar/>    
    <main>{children}</main>
    </BlogProvider>
    </>
)
}