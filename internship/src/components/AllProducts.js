import Filters from "./Filters"

const AllProducts = () => {
  return (
    <section>
         <figure className='w-screen container flex items-center justify-between  p-10'>
            <div className='w-[60%] bg-red-500 flex justify-between items-center'>

            </div> 
           
              <Filters/>
        </figure>     
     </section>
  )
}

export default AllProducts