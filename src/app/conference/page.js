import React from "react";
import Link from "next/link";
import bg from "../../assests/backgroundGlobal.jpg";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className='fixed w-full h-full overflow-hidden -z-[1] opacity-60'>
        <Image
          src={bg}
          quality={100}
          alt='background'
          sizes='100vw'
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className=' text-center text-3xl font-bold text-slate-800 py-8'>
        Welcome to Globamantics Conference
      </h1>
      <h2 className='text-xl font-medium text-blue-900 text-xl font-medium hover:text-gray-500 text-center py-4'>
        <Link href='/conference/speakers'>View Speakers</Link>
      </h2>
      <h2 className='text-xl font-medium text-blue-900 text-xl font-medium hover:text-gray-500 text-center'>
        <Link href='/conference/sessions'>View Sessions</Link>
      </h2>
    </>
  );
};

export default page;
