import Link from 'next/link';
// import styles from "../styles.css";


export default function Home() {
  return (
    <>
      <main>
        <div>
          <p>HI DANA</p>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/jobs">Jobs</Link>
          </li>
          <li>
            <Link href="/explore">Explore</Link>
          </li>
          <li>
            <Link href="/plans">Plans</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
