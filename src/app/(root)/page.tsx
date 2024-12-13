import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";
import { getBlogs } from "@/lib/api";

interface Tag {
  name: string;
  category: string;
}

export default async function Home() {
  const session = await auth();
  const blogs = await getBlogs();
  const filteredBlogs = blogs.filter((article:any)=>article.Public===true);
  //md:w-[75%]
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-auto">
        <div className="w-full ">
          <HomePage
            blogs={filteredBlogs}
            user={session && session.user ? session.user : null}
            title="Trending Now"
          />
        </div>
        {/* <div className="w-full md:w-[25%]">
        </div> */}
      </div>
    </>
  );
}
