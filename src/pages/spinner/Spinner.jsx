import { MagnifyingGlass } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="min-h-96 flex justify-center items-center">
      <div>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
        <h2 className="text-xl font-bold -mt-3 mr-20"> Searching...</h2>
      </div>
    </div>
  );
}

export default Spinner;
