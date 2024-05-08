import { Button } from "@/components/ui/button"
import Image from "next/image"


const Hero = () => {
  return (
    <section className=' container flex items-center justify-between h-[80vh] w-screen bg-orange-300  dark:bg-gradient-to-r from-cyan-500 via-black to-orange-400'>

       <div className='w-[50vw] space-y-4  '>
       <h1 className='text-left text-3xl font-semibold '>Shop till you drop and sell your products with ModaMart</h1>
       <Button variants= "outline">Start Selling</Button>
       </div>
       
          <Image
          src="/productheader.png"
          alt="product header example photo"
         width={550}
          height={100}
          priority
          
          />
      </section>
  )
}

export default Hero