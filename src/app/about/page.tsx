import { Button } from "@/components/ui/button";
import Link from "next/link";

import { unstable_ViewTransition as ViewTransition } from "react";

const Page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-lg">
        <ViewTransition name="Hello">
          <span>View Transitions</span>
        </ViewTransition>{" "}
        Smoothly transition an element between pages
      </h1>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};
export default Page;
