import { useEffect, useState } from "react";

export default function Page() {
  const [queryNo, setQueryNo] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`,{
            method: 'GET',
            headers:{
                  accept:'application/json'
            }

        });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const fetchedProducts = await res.json();
        setProducts(fetchedProducts);
        console.log(fetchedProducts)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [queryNo]);

  return (
    <>
       <h1 className="text-center font-bold">PRODUCTS</h1> 
        <input 
          type="number" 
          onChange={(e) => setQueryNo(e.target.value)} 
          className="border-2 border-red-300 w-[400px]" 
          placeholder="Enter query limit"
        />  
        <p>{queryNo}</p> 
        {/* <div>
          {products.map((product) => (
            <div key={product.id}>
                  <p>{product.name}</p>
            </div>
          ))}
        </div> */}
    </>
  );
}
