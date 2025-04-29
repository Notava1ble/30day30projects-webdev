"use client";

import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";

const PostContentsHeader = ({
  postName,
  postContent,
}: {
  postName: string;
  postContent: string;
}) => {
  return (
    <ViewTransition>
      <div className="relative">
        <Link href="/">
          <Button className="fixed top-2 left-2" variant="ghost">
            <ArrowLeft />
            Back
          </Button>
        </Link>
      </div>
      <div>
        <ViewTransition name={postName}>
          <div className="py-20 w-fit max-w-[50%] text-center mx-auto">
            <h1 className="text-5xl font-bold">{postName.slice(0, -3)}</h1>
          </div>
        </ViewTransition>
        <div className="prose prose-lg prose-invert mx-auto">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {postContent}
          </ReactMarkdown>
        </div>
      </div>
    </ViewTransition>
  );
};
export default PostContentsHeader;
