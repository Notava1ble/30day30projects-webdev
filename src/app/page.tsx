import { Separator } from "@radix-ui/react-context-menu";
import { promises as fs } from "fs";
import Link from "next/link";

import { unstable_ViewTransition as ViewTransition } from "react";

export default async function Page() {
  const posts = await fs.readdir(process.cwd() + "/src/posts");

  return (
    <ViewTransition>
      <div className="w-full min-h-screen">
        <div className="w-[95%] h-72 flex flex-row justify-center items-center border-b mx-auto">
          <h1 className="text-6xl font-bold">Todays Featured</h1>
        </div>
        <Separator color="white" />
        <div className="h-auto w-fit mx-auto prose prose-invert mt-36">
          {posts.map((post) => (
            <div key={post}>
              <ViewTransition name={post}>
                <Link href={`/${post}`} className="no-underline">
                  <h2>{post.slice(0, -3)}</h2>
                </Link>
              </ViewTransition>
            </div>
          ))}
        </div>
      </div>
    </ViewTransition>
  );
}
