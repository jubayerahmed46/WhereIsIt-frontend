import { CircularProgress } from "@mui/material";

function Spinner() {
  return (
    <div className="min-h-96 flex justify-center items-center">
      <div>
        <CircularProgress />
      </div>
    </div>
  );
}

export default Spinner;
