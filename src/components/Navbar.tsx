import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Elysium</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/trainer" className="hover:text-gray-300">Trainer & Training</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
