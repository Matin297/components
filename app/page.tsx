import Link from "next/link";

export default function Home() {
  return (
    <Link
      href="/drawer"
      className="bg-teal-500 border p-2 rounded inline-block hover:bg-teal-600 transition-colors"
    >
      Drawer
    </Link>
  );
}
