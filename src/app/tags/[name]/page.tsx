import { auth } from "@/auth";
import { getTagIdByName } from "@/lib/api";
import Grid from "@/components/atoms/Grid";
import { searchByTagId } from "@/utils/utils";

export default async function Tags(context: any) {
  const { name } = await context.params;
  const tagId = await getTagIdByName(name);
  const taggedPosts = await searchByTagId(tagId);
  return (
    <>
      <div className="flex flex-col p-[1.5rem] md:flex-row w-full h-auto">
        <Grid title={`Post by tag ${name.trim().split('%20').join(" ")}`} blogs={taggedPosts} />
      </div>
    </>
  );
}
