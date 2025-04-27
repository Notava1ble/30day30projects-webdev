import PostList from "@/components/PostList";
import { Separator } from "@radix-ui/react-context-menu";
import { promises as fs } from "fs";

export default async function Page() {
  const posts = await fs.readdir(process.cwd() + "/src/posts");

  return (
    <div className="w-full min-h-screen">
      <div className="w-[95%] h-72 flex flex-row justify-center items-center border-b mx-auto">
        <h1 className="text-6xl font-bold">Todays Featured</h1>
      </div>
      <Separator color="white" />
      <div className="h-auto w-fit mx-auto prose prose-invert mt-36">
        {posts.map((post) => (
          <PostList post={post} key={post} />
        ))}
      </div>
    </div>
  );
}
