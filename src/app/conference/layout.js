export default function ConferenceLayout({ children }) {
  return (
    <>
      <header>
        <h1 className='text-xl font-semibold uppercase bg-slate-900 text-white py-8 text-center'>
          Globomantics Manically taking tech to Globe
        </h1>
      </header>
      <section>{children}</section>
    </>
  );
}
