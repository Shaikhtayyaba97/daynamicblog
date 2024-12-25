import Link from "next/link";
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-center py-8">
      <h1 className="text-3xl font-bold text-white mb-4">Thank You</h1>
      <p>
        <ul className="flex justify-center space-x-6 text-white">
          <li>
            <Link
              href="https://www.facebook.com/tayyaba.rehaman?mibextid=ZbWKwL"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaFacebook size={50} />
            </Link>
          </li>
          <li>
            <Link
              href="http://www.linkedin.com/in/tayyaba-shahbaz-801a322b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin size={50} />
            </Link>
          </li>
        </ul>
      </p>
    </div>
  );
}