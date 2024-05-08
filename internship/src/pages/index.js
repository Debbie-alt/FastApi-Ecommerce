import { Inter } from "next/font/google";
import Head from "next/head.js";
import Navbar
 from "@/components/Navbar";
import Hero from "@/components/Hero";
import AllProducts from "@/components/AllProducts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  ${inter.className}`}>
        <Head>
           <title>Modamart</title>
           <meta name="keywords" content="shop, e-commerce, cart  order, product"></meta>
        </Head>
        <Navbar/>
        <Hero/>
        <AllProducts/>
        
  

    </main>
  );
}
