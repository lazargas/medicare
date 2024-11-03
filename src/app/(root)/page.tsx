import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-auto">
        <div className="w-full md:w-[75%]">
          <HomePage
            user={session && session.user ? session.user : null}
            title="Trending Now"
          />
        </div>
        <div className="w-full md:w-[25%]">
          <HomePage
            user={session && session.user ? session.user : null}
            title="Editorial"
          />
        </div>
      </div>
    </>
  );
}
