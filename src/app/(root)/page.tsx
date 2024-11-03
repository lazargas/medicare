import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
    <div className="flex w-full h-auto"  >
      <div className="w-[75%]" > <HomePage user={session && session.user ? session.user : null} title="Trending Now" /></div>
      <div className="w-[25%]" > <HomePage user={session && session.user ? session.user : null} title="Related Posts" /></div>
    </div>
    </>
  );
}

