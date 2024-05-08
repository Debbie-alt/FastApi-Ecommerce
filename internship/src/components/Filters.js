
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export  default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
         <button className='bg-gradient-to-r from-cyan-400 to-orange-400 rounded-full py-3 px-4  hover:opacity-80'>
                Sort By
          </button>      
          </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Filter Results</DialogTitle>
          <DialogDescription>
              Sort Products based on price and price range
         </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 ">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
            Min:
            </Label>
             <input placeholder="Min price.." className="border-2 p-2  text-neutral-700 text-sm rounded-xl focus:outline-none focus-within:outline-double"/>
            
          </div>
          
        </div>

        <div className="flex items-center space-x-2 ">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
            Min:
            </Label>
             <input placeholder="Max price.." className="border-2 p-2  text-neutral-700 text-sm rounded-xl focus:outline-none focus-within:outline-double"/>
            
          </div>
          
        </div>


        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="custom">
             Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}
