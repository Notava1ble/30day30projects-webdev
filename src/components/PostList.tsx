"use client";

import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

const PostList = ({ post }: { post: string }) => {
  return (
    <ViewTransition name={post}>
      <Link href={`/${post}`} className="no-underline">
        <h2>{post.slice(0, -3)}</h2>
      </Link>
    </ViewTransition>
  );
};
export default PostList;
