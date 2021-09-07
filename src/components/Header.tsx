import Link from "next/dist/client/link";

function HeaderComponent() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Page /</a>
          </Link>
        </li>
        <li>
          <Link href="/person">
            <a>Page /person</a>
          </Link>
        </li>
        <li>
          <Link href="/person/123">
            <a>Page /person/123</a>
          </Link>
        </li>
        <li>
          <Link href="/person/create">
            <a>Page /person/create</a>
          </Link>
        </li>
        <li>
          <Link href="/person/ssr">
            <a>Page /person/ssr</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default HeaderComponent;
