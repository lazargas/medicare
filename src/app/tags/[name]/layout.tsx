import Navbar from "@/components/atoms/Navbar"
import SearchNav from "@/components/atoms/SearchBar";
import { BlogProvider } from "@/context/BlogContext"
import { getBlogs, getTags } from "@/lib/api";


export default async function Layout({children}:Readonly<{children:React.ReactNode}>) {

    const tags = await getTags();
    const blogs = await getBlogs();
return (
    <>
    <BlogProvider>
    <Navbar/>    
    <SearchNav tags={tags} blogs={blogs} />
    <main>{children}</main>
    </BlogProvider>
    </>
)
}