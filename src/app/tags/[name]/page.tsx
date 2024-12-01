import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";
import { getTagIdByName, getTags, getUserByEmail } from "@/lib/api";
import SearchNav from "@/components/atoms/SearchBar";
import Grid from "@/components/atoms/Grid";
import { searchByTagId } from "@/utils/utils";

interface Tag {
  name: string;
  category: string;
}



export default async function Tags(context:any) {
  const session = await auth();
  const {name} = await context.params;
  const tagId = await getTagIdByName(name);
  console.log(tagId);
  const taggedPosts = await searchByTagId(tagId);
  return (
    <>
      <div className="flex flex-col p-[1.5rem] md:flex-row w-full h-auto">
       <Grid title={`Post by tag ${name.split('%20').join(" ")}`} blogs={taggedPosts} />
      </div>
    </>
  );
}
