"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

interface Comment {
  name: string;
  comment: string;
}

export default function Home() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName('');
      setComment('');
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="bg-gradient-to-r from-purple-300 to-pink-300 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">Welcome to My Blog</h1>

        <p className="text-lg text-gray-800 leading-7 mb-8">
          Welcome to our beauty website, your ultimate destination for all things beauty and wellness. Our online shop features a diverse range of products across three main sections: Women, Men, and Kids. In the Women section, you will discover an extensive collection of beauty essentials, including perfumes, body sprays, makeup, skincare, and jewelry. Each product is carefully selected to enhance your beauty and confidence. The Men section offers a variety of premium perfumes, grooming products, body sprays, bracelets, rings, and body essentials designed to suit every modern man’s needs. For the little ones, our Kids section includes lotions, toys, kid-friendly skincare, and all the essentials to keep your children feeling happy and healthy. At our website, we pride ourselves on offering high-quality products, ensuring that everyone, no matter their age or gender, finds something perfect for them. Whether you are looking for a new fragrance, the latest makeup trend, or essentials for your child, our online shop brings convenience and variety, making it easier for you to shop all your beauty and wellness needs in one place. Explore our collections and experience the best of beauty, all under one roof!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/about" className="text-center hover:underline transform hover:scale-105 transition duration-300">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734587785/WhatsApp_Image_2024-12-19_at_10.56.15_a1d9b9dc_mqljpw.jpg"
              alt="about image"
              height={300}
              width={300}
              className="rounded-lg shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-purple-700">About My Website</p>
          </Link>

          <Link href="/blog" className="text-center hover:underline transform hover:scale-105 transition duration-300">
            <Image
              src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734586598/WhatsApp_Image_2024-12-19_at_10.33.33_1e003ff9_aejphu.jpg"
              alt="blog image"
              height={300}
              width={300}
              className="rounded-lg shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-purple-700">My Blog</p>
          </Link>
        </div>

        {/* Comment Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center text-purple-700 mb-4">Join the Conversation</h2>

          <form onSubmit={handleCommentSubmit} className="mb-6">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="comment" className="text-gray-700 font-semibold mb-2">Comment</label>
              <textarea
                id="comment"
                value={comment}
                onChange={handleCommentChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
                required
              />
            </div>

            <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition duration-300">
              Submit Comment
            </button>
          </form>

          {/* Display Comments */}
          <div>
            {comments.length > 0 && (
              <div className="space-y-4">
                {comments.map((comment, index) => (
                  <div key={index} className="border-b border-gray-300 pb-4">
                    <p className="font-semibold text-purple-700">{comment.name}</p>
                    <p className="text-gray-700">{comment.comment}</p>
                  </div>
                ))}
              </div>
            )}
            {comments.length === 0 && <p className="text-gray-500">Be the first to comment!</p>}
          </div>
        </div>
      </div>
    </div>
  );
}