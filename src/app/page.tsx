import { Separator } from "@radix-ui/react-context-menu";
import { promises as fs } from "fs";
import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

export default async function Page() {
  const posts = await fs.readdir(process.cwd() + "/src/posts");

  return (
    <div className="w-full min-h-screen">
      <div className="w-[95%] h-72 flex flex-row justify-center items-center border-b mx-auto">
        <h1 className="text-6xl font-bold">Todays Featured</h1>
      </div>
      <Separator color="white" />
      <div className="h-auto w-fit mx-auto prose prose-invert mt-36">
        {posts.map((post) => {
          return (
            <Link href={`/${post}`} key={post} className="no-underline">
              <h2>{post.slice(0, -3)}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
