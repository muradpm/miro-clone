import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Hello World
      <div>
        <UserButton />
      </div>
    </div>
  );
}
