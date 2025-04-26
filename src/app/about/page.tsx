import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-xl">This is the about page</h1>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};
export default Page;
