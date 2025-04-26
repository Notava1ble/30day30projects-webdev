import { Button } from "@/components/ui/button";
import Link from "next/link";

import { unstable_ViewTransition as ViewTransition } from "react";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-lg">
        In this project, I also tried out{" "}
        <ViewTransition name="Hello">
          <span>View Transitions</span>
        </ViewTransition>
      </h1>
      <div className="flex flex-row gap-8">
        <Link href="/about">
          <Button>Learn More</Button>
        </Link>
        <Link href="/code">
          <Button variant="outline">Code</Button>
        </Link>
      </div>
    </div>
  );
}
