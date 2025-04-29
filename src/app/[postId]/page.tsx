import { promises as fs } from "fs";
import { default as PageClient } from "./page-client";

const Page = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params;
  const postName = decodeURIComponent(postId);

  const postContent = await fs.readFile(
    process.cwd() + `/src/posts/${postName}`,
    "utf8"
  );

  return <PageClient postName={postName} postContent={postContent} />;
};
export default Page;
