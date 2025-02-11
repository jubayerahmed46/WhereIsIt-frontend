import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

const instance = axios.create({
  // baseURL: "https://whereisit-server.vercel.app",
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

function useAxiosInstance() {
  useEffect(() => {
    const resInterceptor = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          const status = error.response.status;

          if (status === 401) {
            // Unauthorized - Token might be invalid or expired
            toast.error("Unauthorized!");
          } else if (status === 403) {
            // Forbidden - User doesn't have access
            toast.error("Forbidden! You do not have access.");
          } else if (status === 500) {
            // Internal Server Error
            toast.error("Server error! Please try again later.");
          }
        } else if (error.request) {
          toast.error("Network error! Unable to connect to the server.");
        } else {
          // Unexpected errors
          toast.error(`Unexpected error: ${error.message}`);
        }

        return Promise.reject(error);
      }
    );
    return () => instance.interceptors.response.eject(resInterceptor);
  }, []);

  return instance;
}

export default useAxiosInstance;
