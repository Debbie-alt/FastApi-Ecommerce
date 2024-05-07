import Image from "next/image";
import { Input } from "@/components/ui/input"
import { FaCartShopping } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import Link from 'next/link'
import { MdDarkMode } from "react-icons/md";





const Navbar = () => {
  return (
    <nav className="w-screen container flex justify-between items-center  border-2 border-b-slate-300 py-2">
      <div className="flex space-x-5 items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/modamartlogo.png"
          alt="Next.js Logo"
          width={55}
          height={37}
          priority
        />
        <h1 className="font-semibold text-xl text-cyan-800">ModaMart</h1>
      </div>

      <div className="relative flex">
      <Input/>
      <div className="absolute  right-6  flex inset-y-0 items-center text-gray-600">
        <BsSearch />
      </div>
      </div>
        
      <div className="flex space-x-3 items-center ">
       <FaCartShopping role="button" />
       <Link href="/" className="hover:text-cyan-600">Cart</Link>
       
      </div>

    </nav>
  );
};
export default Navbar;
