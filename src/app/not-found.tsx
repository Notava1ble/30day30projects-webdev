import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col gap-20">
      <h1 className="text-8xl font-bold">404</h1>
      <div className="flex justify-center items-center flex-col gap-6">
        <h2 className="text-2xl">
          Just kidding, the page you requested does not exist
        </h2>
        <Link href={"/"}>
          <Button className="text-xl" size="lg">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
