import Hero from "@/components/Hero";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <h1>Welcome to Glomantics app</h1>
      <Link href='/home'>Home</Link>
    </div>
  );
}
