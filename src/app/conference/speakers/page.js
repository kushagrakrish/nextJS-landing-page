import React from "react";
import Link from "next/link";

// Static fetcing data
async function fetchSpeakers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const data = await response.json();
  console.log(data);
  return data;
}
fetchSpeakers();

const page = async () => {
  const data = await fetchSpeakers();
  return (
    <>
      <h1 className='text-3xl font-semibold uppercase text-center py-6 '>
        Welcome to the Speakers Page
      </h1>
      <h2 className='text-xl font-medium text-blue-900 text-center underline hover:text-gray-500 mb-5'>
        <Link href='/conference'>Go back to conference Page</Link>
      </h2>
      {data?.map((item, i) => (
        <div
          className='flex items-center justify-evenly py-4 bg-gray-200'
          key={i}
        >
          {/* <Link href={`/conference/speakers/${item.name}`}> */}
          <h2 className='text-2xl font-semibold '>Name: {item.name}</h2>
          {/* </Link> */}
          <h3 className='text-xl font-semibold cursor-pointer text-green-600 '>
            E-mail: {item.email}
          </h3>
        </div>
      ))}
    </>
  );
};

export default page;
