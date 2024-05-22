import Navbar from "@/components/Navbar"
const Cart = () => {
  return (
      <div className="space-y-8">
        <Navbar/>
           <div className="w-[80vw] rounded-xl shadow-xl border-2 h-[400px] bg-stone-100 py-5 container ">
            <h2 className="text-center font-[600] text-xl dark:text-black">Pending Orders </h2>

           </div>
      </div>
  )
}

export default Cart