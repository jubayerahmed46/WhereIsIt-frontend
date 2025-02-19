function SectionHeading({ children }) {
  return (
    <h2 className="sm:text-2xl text-xl text-center mb-8  dark:text-white/85 uppercase font-bold">
      {" "}
      {children}{" "}
    </h2>
  );
}

export default SectionHeading;
