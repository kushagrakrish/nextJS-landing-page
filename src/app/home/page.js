import Image from "next/image";
import React from "react";
import bg from "../../assests/bg.jpeg";

const page = () => {
  return (
    <>
      <div className='fixed w-full h-full overflow-hidden -z-[1] opacity-90'>
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
      <h1 className='text-3xl text-white font-bold text-center my-6 uppercase text-gray-900'>
        Welcome to Home of Globamantics
      </h1>
      <p className='text-xl text-center text-white font-medium'>
        building of web applications by providing a set of features and tools
        for developing and deploying React applications.
      </p>
    </>
  );
};

export default page;
