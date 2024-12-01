import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";
import { getBlogs, getTags, getUserByEmail } from "@/lib/api";
import SearchNav from "@/components/atoms/SearchBar";

interface Tag {
  name: string;
  category: string;
}

export default async function Home() {
  const session = await auth();
  const userDAta = await getUserByEmail(session?.user?.email!);
  const tags = await getTags();
  const blogs = await getBlogs();
  console.log(userDAta); 
  //md:w-[75%]
  return (
    <>
     <SearchNav tags={tags} blogs={blogs} />
      <div className="flex flex-col md:flex-row w-full h-auto">
        <div className="w-full ">
     
          <HomePage
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
