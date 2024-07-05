import Image from "next/image";
import { Input } from "@/components/ui/input";
import { FaCartShopping } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { ModeToggle } from "./ModeToggler";

const Navbar = () => {
  return (
    <nav className="w-screen container flex justify-between items-center py-2  text-pretty text-white">
      <div className="flex space-x-2  sm:space-x-5 items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-[40px] md:w-[55px] dark:invert"
          src="/mirageban-modified.png"
          alt="Modamart Logo"
          width={55}
          height={37}
          
        />
        <h1 className="font-semibold  text-lg md:text-xl font-serif italic">The Mirage <sub><small>Shop</small></sub></h1>
      </div>
       

      <div className="flex space-x-5 items-center ">    
      <BsSearch className="text-sm " />

        <div className="hidden lg:flex md:gap-3 items-center  text-sm lg:text-md">

          <Link href="/" className="hover:text-red-400">
            Home
          </Link>
          <Link href="/login" className="hover:text-red-400">
           Login
          </Link>
          <FaCartShopping role="button" />
          <Link href="/_cart" className="hover:text-red-400">
            Cart
          </Link>
          <ModeToggle />
        </div>

      </div>
    </nav>
  );
};
export default Navbar;
