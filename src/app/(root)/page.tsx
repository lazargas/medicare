import HomePage from "@/components/atoms/Home";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <HomePage user={session && session.user ? session.user : null} />
    </>
  );
}

