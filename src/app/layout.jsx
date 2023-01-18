import "./globals.css";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function RootLayout({ children }) {
  const items = [
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/settings",
      name: "Settings",
    },
    {
      path: "/conference",
      name: "Conference",
    },
  ];
  return (
    <html lang='en'>
      <head />
      <body>
        <header className='flex items-center justify-between bg-black px-32 py-4'>
          <h1 className='text-2xl text-gray-500 font-semibold cursor-pointer'>
            <Link href='/home'>Globamantics</Link>
          </h1>
          {items?.map((item, i) => (
            <h2 key={i} className='text-xl font-medium text-white '>
              <Link href={item.path}>{item.name}</Link>
            </h2>
          ))}
        </header>
        {children}
      </body>
    </html>
  );
}
