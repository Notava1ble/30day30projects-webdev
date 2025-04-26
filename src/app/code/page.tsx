import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { unstable_ViewTransition as ViewTransition } from "react";

const Page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-lg">
        Here&apos;s the documentation on how to use it:
      </h1>
      <Link href="https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition">
        <Button>
          <ViewTransition name="Hello">
            <span>View Transitions</span>
          </ViewTransition>
        </Button>
      </Link>
      <Link href="/">
        <Button variant="outline">
          <ArrowLeft />
          Back to Home
        </Button>
      </Link>
    </div>
  );
};
export default Page;
