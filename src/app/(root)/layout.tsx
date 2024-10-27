import Navbar from "@/components/atoms/Navbar"


export default function Layout({children}:Readonly<{children:React.ReactNode}>) {
return (
    <>
    <Navbar/>
    <main>{children}</main>
    </>
)
}