"use client";

import { useFormState } from "react-dom";
import CommentBlock from "./CommentBlock";
import { useDispatch } from "react-redux";
import { addComment } from "../lib/slice";
import { useAppSelector } from "@/lib/hooks";

export default function Home() {
  const [state, formDispatch] = useFormState(f, "");
  const dispatch = useDispatch();
  const {comments, currentUser} = useAppSelector((state) => state.app);

  function f(prev: string, formData: FormData) {
    dispatch(
      addComment({
        user: currentUser,
        content: formData.get("comment")?.toString() || "",
        score: 0,
        createdAt: new Date().toISOString(),
        replies: [],
        id: Math.random(),
      })
    );
    return formData.get("comment")?.toString() || "";
  }

  return (
    <main className="flex justify-center items-center w-screen mb-5">
      <div className="flex flex-col max-w-3xl max-h-fit">
        {comments.map((comment, idx) => {
          return <CommentBlock key={idx} comment={comment} />;
        })}

        <article>
          <form
            action={formDispatch}
            className="flex rounded-lg p-6 bg-white items-start mt-5 gap-5"
          >
            {state && <p className="text-red-500">{state}</p>}
            <textarea
              name="comment"
              maxLength={140}
              className="p-4 h-24 resize-none flex-1 border-lightGrayishBlue border rounded-lg placeholder:text-darkBlue"
              placeholder="Add a comment..."
            />
            <input
              type="submit"
              value="SEND"
              className="w-24 bg-moderateBlue text-white rounded-md p-2.5 cursor-pointer"
            />
          </form>
        </article>
      </div>
    </main>
  );
}
