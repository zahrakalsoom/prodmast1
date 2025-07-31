
import Link from 'next/link';
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet" 

export default function Navbar() {
  return (
    <nav className=" fixed top-0 z-50  bg-gray-50  shadow-md w-full ">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan-900">
          Prodmast
        </Link>

        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-cyan-900 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
        <button className="px-6 py-2  bg-cyan-900 text-white rounded-full hover:bg-blue-700 transition hidden md:flex">
  Sign Up
</button>


<Sheet >
         
          {/* Mobile navigation sheet */}
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="size-6" />
              
            </Button>
          </SheetTrigger>
          <SheetContent side='right'>
            <div className="flex flex-col gap-6 pt-8   items-center justify-center">
              <Link href="/" className="text-lg text-cyan-900 font-medium hover:underline underline-offset-4">
                Home
              </Link>
              
              <Link href="/about" className="text-lg text-cyan-900 font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link href="/contact" className="text-lg text-cyan-900 font-medium hover:underline underline-offset-4">
                Contact
              </Link>
              <Button asChild className="px-6 py-2  bg-cyan-900 text-white rounded-full hover:bg-blue-700 transition">
                <Link href="#">Sign Up</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

