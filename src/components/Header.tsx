import { FcGlobe } from 'react-icons/fc';
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-between px-4 py-3">
      <div className="text-4xl font-extrabold tracking-wide">My Beauty Blog</div>
      <div className="flex gap-6 text-lg font-medium">
        <Link href="/" className="hover:underline hover:scale-105 transition duration-300">
          Home
        </Link>
        <Link href="/about" className="hover:underline hover:scale-105 transition duration-300">
          About
        </Link>
        <Link href="/blog" className="hover:underline hover:scale-105 transition duration-300">
          Blog
        </Link>
      </div>

      {/* Globe Icon */}
      <div className="flex items-center hover:rotate-360 transition-transform duration-500">
        <FcGlobe size={50} />
      </div>
    </div>
  );
}