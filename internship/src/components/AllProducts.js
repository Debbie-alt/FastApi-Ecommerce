import Filters from "./Filters";
import { Button } from "./ui/button";

const AllProducts = ({ loading, allproducts}) => {

  // console.log("Rendered products:", produce); 
  return (
    <section className="bg-white">
      <figure className='w-screen container flex items-center justify-between p-10'>
        <div className='w-[60%] bg-red-500 flex justify-between items-center'>
        </div>
        <Filters/>
      </figure>
      <div className="space-y-8">
        <div className="text-center font-semibold text-lg">
          Showing products from all categories
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 justify-center container w-[90vw]  ">
        {loading && (
          <div className="animate-spin w-[100px] h-[100px] rounded-full border-4 border-t-orange-600"></div>
        )}
        {allproducts.map(product => (
          <div key={product.id} c className="m-4 p-4 border flex flex-col justify-between border-gray-300 rounded-xl hover:opacity-70 cursor-pointer hover:bg-white hover:text-black">
            <img src={product.image} className="w-[70px] sm:w[100px]"></img>
            <p className=" font-semibold uppercase">{product.title}</p>
            <div>
               <p className="">Current Price: <span className="text-orange-500">${product.price}</span> </p>
                <p className="">Category: <span className="text-cyan-600">{product.category}</span></p>
              
            </div>
            <Button type="submit" variant="custom">Add to cart</Button>
          </div>
        ))}
      </div>
      </div>  
    </section>
  );
};

export default AllProducts;
