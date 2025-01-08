import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";
import { getPublicBlogs } from "@/lib/api";
import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/atoms/Navbar";
import { generateTwoNumbersWithDifference } from "@/utils/utils";

export default async function Home() {
  const session = await auth();
  const {blogs} = await getPublicBlogs(
    {
      page: 1,
      limit: 500,
    }
  );
  const [firstEditorialStartRange,firstEditorialEndRange] = generateTwoNumbersWithDifference({min:1,max:500},4);
  const [secondEditorialStartRange,secondEditorialEndRange] = generateTwoNumbersWithDifference({min:1,max:500},4);
  const [firstOverlayStartRange,firstOverlayEndRange] = generateTwoNumbersWithDifference({min:1,max:500},10);
  const [firstHorizontalStartRange,firstHorizontalEndRange] = generateTwoNumbersWithDifference({min:1,max:500},16);

  return (
    <>
      <Navbar
      /> 
      <div className="flex flex-col w-full h-auto">
        <HomePage
          blogs={blogs}
          user={session && session.user ? session.user : null}
          title="Trending Now"
          firstEditorialStartRange={firstEditorialStartRange}
          firstEditorialEndRange={firstEditorialEndRange}
          secondEditorialStartRange={secondEditorialStartRange}
          secondEditorialEndRange={secondEditorialEndRange}
          firstOverlayStartRange={firstOverlayStartRange}
          firstOverlayEndRange={firstOverlayEndRange}
          firstHorizontalStartRange={firstHorizontalStartRange}
          firstHorizontalEndRange={firstHorizontalEndRange}
        />
        <Footer blogs={blogs.slice(0, 3)} />
      </div>
    </>
  );
}
