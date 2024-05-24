import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className=' hero container flex items-center justify-between h-[80vh] w-screen bg-orange-300  dark:bg-gradient-to-r from-cyan-500 via-black to-orange-400'>

       <div className=' space-y-6 md:space-y-4  shop-hero '>
       <h1 className=' text-center xs:text-left  text-lg md:text-3xl font-semibold  '>Shop till you drop and sell your products with ModaMart</h1>
       <Link href='/addproduct'>
         <Button variants= "outline">Start Selling</Button>
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