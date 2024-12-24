import { FcGlobe } from "react-icons/fc";
import Link from "next/link";

export default function Header() {
  return (
 <div className="bg-purple-200 text-black flex justify-between ">
            <div className="text-4xl font-bold "> My Beauty Blog </div>
            <div className=" m-2 flex gap-3 text-2xl">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/contact'>Contact</Link></div>
            <div className="m-2"><FcGlobe size={50} />
            </div>
        </div>
    )
}
