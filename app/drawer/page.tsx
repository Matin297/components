import Link from "next/link";

export default function DrawerEntry() {
  return (
    <section className="space-x-4">
      <Link
        href="/drawer/permanent/left"
        className="bg-teal-500 border p-2 rounded inline-block hover:bg-teal-600 transition-colors"
      >
        Permanent - Left
      </Link>
      <Link
        href="/drawer/permanent/right"
        className="bg-teal-500 border p-2 rounded inline-block hover:bg-teal-600 transition-colors"
      >
        Permanent - Right
      </Link>
      <Link
        href="/drawer/persistent/left"
        className="bg-teal-500 border p-2 rounded inline-block hover:bg-teal-600 transition-colors"
      >
        Persistent - Left
      </Link>
      <Link
        href="/drawer/persistent/right"
        className="bg-teal-500 border p-2 rounded inline-block hover:bg-teal-600 transition-colors"
      >
        Persistent - Right
      </Link>
    </section>
  );
}
