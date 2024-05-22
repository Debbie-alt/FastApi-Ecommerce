import Image from "next/image";
import { Input } from "@/components/ui/input";
import { FaCartShopping } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { ModeToggle } from "./ModeToggler";
import { FaGlobe } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Navbar = () => {
  return (
    <nav className="w-screen container flex justify-between items-center  border-b-2 border-b-slate-300 py-2">
      <div className="flex space-x-5 items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/modamartlogo.png"
          alt="Modamart Logo"
          width={55}
          height={37}
          
        />
        <h1 className="font-semibold text-xl text-cyan-800">ModaMart</h1>
      </div>

      <div className="relative flex">
        <Input />
        <div className="absolute  right-6  flex inset-y-0 items-center text-gray-600">
          <BsSearch />
        </div>
      </div>

      <div className="flex space-x-5 items-center ">
        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <FaGlobe className="text-cyan-500 text-lg cursor-pointer" />
          </HoverCardTrigger>
          <HoverCardContent>
             <ul>
               <li>English</li>
               <li>Spanish</li>
             </ul>
           </HoverCardContent>
        </HoverCard>

        <Link href="/" className="hover:text-cyan-600">
          Home
        </Link>
        <Link href="/addproduct" className="hover:text-cyan-600">
          Add Products
        </Link>
        <FaCartShopping role="button" />
        <Link href="/_cart" className="hover:text-cyan-600">
          Cart
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
export default Navbar;
