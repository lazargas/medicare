import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";
import { getBlogs, getUserByEmail } from "@/lib/api";

interface Tag {
  name: string;
  category: string;
}

export default async function Home() {
  const session = await auth();
  const userDAta = await getUserByEmail(session?.user?.email!);
  const blogs = await getBlogs();
  //md:w-[75%]
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-auto">
        <div className="w-full ">
     
          <HomePage
            blogs={blogs}
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
