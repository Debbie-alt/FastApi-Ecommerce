import { Inter } from "next/font/google";
import Navbar from '../components/Navbar.js'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  justify-between ${inter.className}`}>


    <Navbar/>

    </main>
  );
}
