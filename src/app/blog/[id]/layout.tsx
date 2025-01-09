import Navbar from "@/components/atoms/Navbar"

export default async function Layout({children}:Readonly<{children:React.ReactNode}>) { 
return (
    <>
    <Navbar/>
     {/* <AdSlots height={600} width={160} parentWidth={160}  ></AdSlots>     */}
    <main>{children}</main>
    </>
)
}