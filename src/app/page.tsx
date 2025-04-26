import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-xl">This is the home page</h1>
      <div className="flex flex-row gap-8">
        <Link href="/about">
          <Button>About Me</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Contact</Button>
        </Link>
      </div>
    </div>
  );
}
