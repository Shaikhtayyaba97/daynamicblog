"use client";

import React, { useState } from "react";
import { Blogdata } from "../../../../Data/data";
import Image from "next/image";

interface Paramsin {
  params: {
    id: string;
  };
}

const Page = ({ params }: Paramsin) => {
  const tonum = Number(params.id);
  const filter = Blogdata.find((items) => items.id === tonum);

  // State for comments
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prev) => [...prev, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="text-purple-600 flex flex-col justify-center items-center m-4 gap-4 p-4 border rounded-md shadow-md max-w-[90%] sm:max-w-[400px] mx-auto">
      {/* Product Image */}
      <Image
        src={filter?.img || "./img"}
        alt="img"
        height={200}
        width={200}
        className="object-cover rounded-md"
      />

      {/* Product Title */}
      <p className="text-center text-lg sm:text-xl font-semibold">
        {filter?.title}
      </p>

      

      {/* Comments Section */}
      <div className="w-full mt-6">
        <h2 className="text-lg font-semibold text-center">Comments</h2>

        {/* Display Comments */}
        <ul className="mt-4 space-y-2">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-2 rounded-md shadow-sm text-sm"
              >
                {comment}
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center">
              No comments yet. Be the first to comment!
            </p>
          )}
        </ul>

        {/* Add Comment */}
        <div className="mt-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Write your comment..."
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-purple-500 text-white w-full py-2 mt-2 rounded hover:bg-purple-600 transition-all"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;