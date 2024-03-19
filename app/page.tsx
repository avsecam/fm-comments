"use client";

import data from "../data.json";
import CommentBlock from "./CommentBlock";

export default function Home() {
  return (
    <main className="flex justify-center w-screen h-screen">
      <div className="flex flex-col max-w-3xl max-h-fit">
        {data.comments.map((comment, idx) => {
          return <CommentBlock key={idx} comment={comment} />;
        })}
      </div>
    </main>
  );
}
