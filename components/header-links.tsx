"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLinks({
  path,
  label,
}: {
  path: string;
  label: string;
}) {
  const pathname = usePathname();
  return (
    <Link href={path} className={pathname.startsWith(path) ? "active" : ""}>
      {label}
    </Link>
  );
}
