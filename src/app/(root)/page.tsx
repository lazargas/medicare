import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";
import { getBlogs, getTagNameById } from "@/lib/api";
import Footer from "@/components/molecules/Footer";

interface Tag {
  name: string;
  category: string;
}

export default async function Home() {
  const session = await auth();
  const blogs = await getBlogs();
  const filteredBlogs = blogs.filter((article: any) => article.Public === true);
  const tags: Map<any, string> = new Map();
  for (const blog of blogs) {
    if (blog.tags.length<=0) {
      continue;
    }
    const tag = await getTagNameById(blog.tags[0]);
    tags.set(blog._id, tag);
  }

  return (
    <>
      <div className="flex flex-col w-full h-auto">
        <HomePage
          blogs={filteredBlogs}
          user={session && session.user ? session.user : null}
          title="Trending Now"
          tags={tags}
        />
        <Footer blogs={blogs.slice(0, 3)} />
      </div>
    </>
  );
}
