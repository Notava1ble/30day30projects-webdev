"use client";

import { unstable_ViewTransition as ViewTransition } from "react";

const PostContentsHeader = ({ postName }: { postName: string }) => {
  return (
    <ViewTransition name={postName}>
      <div className="py-20 w-fit max-w-[50%] text-center mx-auto">
        <h1 className="text-5xl font-bold">{postName.slice(0, -3)}</h1>
      </div>
    </ViewTransition>
  );
};
export default PostContentsHeader;
