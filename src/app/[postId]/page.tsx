import { promises as fs } from "fs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PostContentsHeader from "@/components/PostContentsComponent";

const Page = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params;
  const postName = decodeURIComponent(postId);

  const postContent = await fs.readFile(
    process.cwd() + `/src/posts/${postName}`,
    "utf8"
  );

  return (
    <div>
      <PostContentsHeader postName={postName} />
      <div className="prose prose-lg prose-invert mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{postContent}</ReactMarkdown>
      </div>
    </div>
  );
};
export default Page;
