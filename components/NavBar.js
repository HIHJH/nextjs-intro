import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        <span>Home</span>
      </Link>
      <Link
        href="/about"
        className={router.pathname === "/about" ? "active" : ""}
      >
        <span>About</span>
      </Link>
      <style jsx global>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
