import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          BlogFlow
        </Link>
        <Link href="/create" className="bg-blue-500 px-4 py-2 rounded">
          Create Post
        </Link>
      </nav>
    </header>
  );
}