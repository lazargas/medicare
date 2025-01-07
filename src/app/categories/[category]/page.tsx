import { getBlogsByCategory, getTagIdByName } from "@/lib/api";
import Grid from "@/components/atoms/Grid";

export default async function Categories(context: any) {
  const { category } = await context.params;
  const categoryParams = category.trim().split("%20").join(" ");
  const { blogs } = await getBlogsByCategory(categoryParams);
  console.log(blogs);
  return (
    <>
      {
        blogs && blogs.length === 0 ?
          <div className="flex w-full h-screen items-center justify-center">
                <h1 className='text-xl md:text-4xl font-semibold' >{`There are no articles from ${categoryParams}`}</h1>
          </div>
          :
          <div className="flex flex-col p-[1.5rem] md:flex-row w-full h-auto">
            <Grid title={`From ${categoryParams}`} blogs={blogs} />
          </div>
      }

    </>
  );
}
