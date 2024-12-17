import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";
import { getBlogs } from "@/lib/api";
import Footer from "@/components/molecules/Footer";

export default async function Home() {
  const session = await auth();
  const blogs = await getBlogs();
  // const tags = await getTags();
  const filteredBlogs = blogs.filter((article: any) => article.Public === true);
  // const blogMapper: Map<any, any> = getTagNameById(tags,blogs)!;

  return (
    <>
      <div className="flex flex-col w-full h-auto">
        <HomePage
          blogs={filteredBlogs}
          user={session && session.user ? session.user : null}
          title="Trending Now"
          // tags={blogMapper}
        />
        <Footer blogs={blogs.slice(0, 3)} />
      </div>
    </>
  );
}
