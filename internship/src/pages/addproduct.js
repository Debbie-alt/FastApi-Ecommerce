import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function AddProducts() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const post_url = 'https://corsproxy.io/?' + encodeURIComponent('https://fastapi-ecommerce-api.onrender.com/products/create')

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Make API request to save product
      const response = await fetch(post_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productName,
          price: productPrice,
          quantity: productQuantity
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save product');
      }

      // Clear form inputs on success
      setProductName("");
      setProductPrice("");
      setProductQuantity("");
      
      setSuccess(true);
      setError(null);
    } catch (error) {
      setError('Failed to save product');
      setSuccess(false);
    }
  };

  return (
    <div className="space-y-8">
      <Navbar />
      <h1 className="text-xl font-bold mx-10">ADD NEW PRODUCT</h1>
      <form onSubmit={handleSubmit} className="w-[40vw] space-y-8 mx-10 p-5 rounded-xl border-2 shadow-lg bg-slate-200 dark:bg-transparent dark:border-orange-400">
        <div className="space-x-5">
          <label htmlFor='name'>Product Name</label>
          <input
            className="w-[60%] rounded-xl h-[35px] text-gray-400 px-5"
            placeholder="Sneakers..."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
            <p>{productName}</p>
                  </div>
        <div className="space-x-8">
          <label htmlFor='price'>Product Price</label>
          <input
            className="w-[60%] rounded-xl h-[35px] text-gray-400 px-5"
            placeholder="Price..."
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="space-x-3">
          <label htmlFor='quantity'>Product Quantity</label>
          <input
            className="w-[60%] rounded-xl h-[35px] text-gray-400 px-5"
            placeholder="Quantity..."
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Product saved successfully!</p>}
        <Button variant="custom" type="submit">Save</Button>
      </form>
    </div>
  );
}
