import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className=' hero container flex items-center justify-between h-[80vh] w-screen bg-[#1a1a1a]text-white'>

       <div className=' space-y-6 md:space-y-4  shop-hero '>
       <h1 className=' text-center xs:text-left  text-lg md:text-3xl font-semibold   text-white'>Shop till you drop and sell your products with ModaMart</h1>
       <Link href='/addproduct'>
         <Button variants= "destructive">Start Selling</Button>
       </Link>
       </div>
          <Image
          src="/productheader.png"
          alt="product header example photo"
          className=" hero-image w-[200px] md:w-[550px] "
         width={550}
          height={100}
          priority/>

      </section>
  )
}

export default Hero