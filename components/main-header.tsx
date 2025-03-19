import HeaderLinks from "./header-links";
import Link from "next/link";
export default function MainHeader() {
  const path = [
    { path: "/news", label: "News" },
    { path: "/archive", label: "Archive" },
  ];
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          {path.map((item) => (
            <li key={item.path}>
              <HeaderLinks path={item.path} label={item.label} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
