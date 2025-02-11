function Heading({ children }) {
  return (
    <div>
      <h2 className="md:text-3xl text-2xl font-bold tracking-tight text-gray-900 my-5 mt-12 ">
        {children}
      </h2>
    </div>
  );
}

export default Heading;
