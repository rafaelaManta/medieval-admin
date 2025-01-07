import { auth } from "@/auth";
import { Main } from "@/templates";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <Main>
      <div className="grid md:grid-cols-3 auto-rows-fr gap-4"></div>
    </Main>
  );
}
