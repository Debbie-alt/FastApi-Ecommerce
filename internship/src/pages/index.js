import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AllProducts from "@/components/AllProducts";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Make sure Button component is imported

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const proxy_url = 'https://corsproxy.io/?';
  const api_url = `https://fakestoreapi.com/products`;
  const full_url = proxy_url + encodeURIComponent(api_url);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(full_url, {
          method: 'GET',
        });
        const prod = await res.json();
        console.log(prod);
        setLoading(false);
        setAllProducts(prod); // Assuming prod is the array of products
      } catch (error) {
        console.log("error occurred", error);
        setLoading(false); // Ensure loading state is reset on error
      }
    };
    getProducts();
  }, []);

  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Head>
        <title>Modamart</title>
        <meta name="keywords" content="shop, e-commerce, cart order, product"></meta>
      </Head>
      <Navbar />
      <Hero />
      <AllProducts 
        allproducts={allproducts}
        loading={loading}
      />
     
    </main>
  );
}
