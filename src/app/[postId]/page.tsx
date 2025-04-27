import { promises as fs } from "fs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Page = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params;
  const postName = decodeURIComponent(postId);

  const postContent = await fs.readFile(
    process.cwd() + `/src/posts/${postName}`,
    "utf8"
  );

  return (
    <div>
      <div className="py-20 w-fit max-w-[50%] text-center mx-auto">
        <h1 className="text-5xl font-bold">{postName.slice(0, -3)}</h1>
      </div>
      <div className="prose prose-lg prose-invert mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{postContent}</ReactMarkdown>
      </div>
    </div>
  );
};
export default Page;
