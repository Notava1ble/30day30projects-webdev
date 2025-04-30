import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
      <h1 className="text-6xl font-bold">Try some links</h1>
      <ul className="flex flex-row items-center justify-center gap-10">
        <li className="text-center">
          <p className="mb-2">Look at our about page</p>
          <Link href={"/about"}>
            <Button>about</Button>
          </Link>
        </li>
        <li className="text-center">
          <p className="mb-2">Look out some data</p>
          <Link href={"/data"}>
            <Button>data</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
