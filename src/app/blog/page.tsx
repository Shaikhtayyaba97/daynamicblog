"use client";
import React, { useState } from "react";
import { Blogdata } from "../../../Data/data";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 m-4 bg-purple-50">
      {Blogdata.map((data) => {
        // State for comments for each product
        const [comments, setComments] = useState<string[]>([]);
        const [newComment, setNewComment] = useState("");

        const handleAddComment = () => {
          if (newComment.trim()) {
            setComments((prev) => [...prev, newComment]);
            setNewComment("");
          }
        };

        return (
          <div
            key={data.id}
            className="text-amber-700 border border-gray-300 rounded-md p-4 shadow-md max-w-[200px] sm:max-w-[250px] md:max-w-[300px] flex flex-col items-center bg-white"
          >
            {/* Product Image */}
            <Link href={`/blog/${data.id}`}>
              <div className="relative w-full">
                <Image
                  src={data.img || "./img"}
                  alt="img"
                  height={200}
                  width={200}
                  className="object-cover rounded-md"
                />
              </div>
            </Link>

            {/* Product Description */}
            <p className="text-center mt-2 text-sm sm:text-base font-medium">
              {data.description}
            </p>

            {/* Comment Section */}
            <div className="w-full mt-6">
              <h2 className="text-base font-semibold text-center">
                Comments
              </h2>
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
                    No comments yet.
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
      })}
    </div>
  );
};

export default page;