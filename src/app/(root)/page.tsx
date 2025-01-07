import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";
import { getPublicBlogs } from "@/lib/api";
import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/atoms/Navbar";

export default async function Home() {
  const session = await auth();
  const {blogs} = await getPublicBlogs(
    {
      page: 1,
      limit: 100,
    }
  );

  return (
    <>
      <Navbar
      /> 
      <div className="flex flex-col w-full h-auto">
        <HomePage
          blogs={blogs}
          user={session && session.user ? session.user : null}
          title="Trending Now"
        />
        <Footer blogs={blogs.slice(0, 3)} />
      </div>
    </>
  );
}
