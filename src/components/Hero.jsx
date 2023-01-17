import Dashboard from "../assests/dash.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-between bg-black h-screen px-32 flex-wrap-reverse max-[1450px]:justify-center'>
        <div className=''>
          <h1 className='text-5xl text-gray-600 font-bold mb-8'>Hello,there</h1>
          <h2 className='text-xl text-gray-400 w-[30rem]'>
            Incentiv offers an easy way for employers to issue ESOPs/grants,and
            allow employees to easily accept, track, exercise, and sell their
            granted shares.
          </h2>
          <button className='flex items-start bg-gradient-to-r from-blue-700 to-blue-500 w-[60%] p-3 text-base  rounded-xl text-center justify-center my-8 text-white w-[10rem]'>
            Learn More
          </button>
        </div>
        <Image src={Dashboard} alt='dash' />
      </div>
    </>
  );
};

export default Hero;
