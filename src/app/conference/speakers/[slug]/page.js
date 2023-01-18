// async function speakerData(params) {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json().find((data) => data.name === params.slug);
//   return data;
// }

// export default async function Page({ params }) {
//   const data = speakerData(params);
//   return (
//     <>
//       {data.map((item, i) => (
//         <div
//           className='flex items-center justify-evenly py-4 bg-gray-200'
//           key={i}
//         >
//           <h2 className='text-2xl font-semibold '>Name: {item.name}</h2>

//           <h3 className='text-xl font-semibold cursor-pointer text-green-600 '>
//             E-mail: {item.email}
//           </h3>
//         </div>
//       ))}
//     </>
//   );
// }
