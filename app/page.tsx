"use client";

import data from "../data.json";
import CommentBlock from "./CommentBlock";

export default function Home() {
  return (
    <main className="flex justify-center w-screen mb-5">
      <div className="flex flex-col max-w-3xl max-h-fit">
        {data.comments.map((comment, idx) => {
          return <CommentBlock key={idx} comment={comment} />;
        })}

        <article className="flex rounded-lg p-6 bg-white items-start mt-5 gap-5">
          <form action={(s) => console.log(s)}>
            <textarea
              maxLength={140}
              className="p-4 h-24 resize-none flex-1 border-lightGrayishBlue border rounded-lg placeholder:text-darkBlue"
              placeholder="Add a comment..."
            />
            <button className="w-24 bg-moderateBlue text-white rounded-md p-2.5">
              SEND
            </button>
          </form>
        </article>
      </div>
    </main>
  );
}
