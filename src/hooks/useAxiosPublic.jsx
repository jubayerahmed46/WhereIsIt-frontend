import axios from "axios";

const instance = axios.create({
  baseURL: "https://where-is-it-backend.vercel.app",
  // baseURL: "http://localhost:8888",
});

function useAxiosPublic() {
  return instance;
}

export default useAxiosPublic;
