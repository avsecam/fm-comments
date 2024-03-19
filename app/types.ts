type CommentType = {
	id: number;
	content: string;
	createdAt: string;
  score: number;
  user: {
		image: {
			png: string;
			webp: string;
		}
		username: string;
	}
	replies?: CommentType[];
	/** username of person being replied to */
	replyingTo?: string; 
};