import React from "react";

const Navbar = () => {
  const items = ["Features", "About Us", "Pricing", "Login"];
  return (
    <>
      <div className='flex items-center justify-between bg-black px-32 py-4'>
        <h1 className='text-3xl text-gray-500 font-semibold cursor-pointer'>
          incentive
        </h1>
        <div>
          <ul className='flex items-center justify-between'>
            {items?.map((item, i) => (
              <li className='text-lg text-gray-100 font-medium px-7 cursor-pointer hover:text-gray-600 hover:ease-in-out hover:duration-300'>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
