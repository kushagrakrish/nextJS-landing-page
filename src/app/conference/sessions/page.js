import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className='text-3x font-semibold'>Welcome to the conference Page</h1>
      <h2 className='text-xl font-medium text-blue-900'>
        <Link href='/conference'>Go back to conference Page</Link>
      </h2>
    </>
  );
};

export default page;
