import Image from "next/image";

type Props = Readonly<{ comment: CommentType }>;

const iconSize = 12;

export default function CommentBlock({ comment }: Props) {
  return (
    <div>
      <Comment comment={comment} />
      {comment.replies && comment.replies.length > 0 ? (
        <div className="grid grid-cols-10">
          <div className="w-1 bg-lightGray mt-5 mx-auto rounded-full"></div>
          <div className="col-span-9 flex flex-col">
            {comment.replies.map((reply, idx) => {
              return <CommentBlock key={idx} comment={reply} />;
            })}
          </div>
        </div>
      ) : (
				<></>
			)}
    </div>
  );
}

function Comment({ comment }: Props) {
  const {
    score,
    user: { username },
    createdAt,
    content,
    replies,
  } = comment;

  return (
    <article className="flex flex-row bg-white p-6 mt-5 gap-6 rounded-lg">
      <aside className="flex flex-col bg-veryLightGray items-center justify-around rounded-lg p-3 sm:h-24">
        <Image
          alt="Upvote comment"
          src={"/icons/icon-plus.svg"}
          width={iconSize}
          height={iconSize}
        />
        <div className="font-bold text-moderateBlue">{score}</div>
        <Image
          alt="Downvote comment"
          src={"/icons/icon-minus.svg"}
          width={iconSize}
          height={iconSize}
        />
      </aside>
      <div className="flex flex-1 flex-col justify-around">
        <div className="bg-red-300">
          <div className="flex">
            <div className="flex flex-1">
              <span className="font-medium">{username}</span>
              <span className="text-grayishBlue">{createdAt}</span>
            </div>
            <div className="flex flex-row items-center text-moderateBlue font-bold gap-2">
              <Image
                alt="Reply"
                src={"/icons/icon-reply.svg"}
                width={iconSize}
                height={iconSize}
              />
              Reply
            </div>
          </div>
        </div>
        <div className="flex flex-1 bg-blue-100">{content}</div>
      </div>
    </article>
  );
}
