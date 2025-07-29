
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="  bg-gray-50  shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
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
        <button className="px-6 py-2  bg-cyan-900 text-white rounded-full hover:bg-blue-700 transition">
  Sign Up
</button>

      </div>
    </nav>
  );
}

