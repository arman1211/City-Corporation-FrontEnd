import { useState } from "react";
import LoginImg from "../../../assets/Login.png";
import axios from "axios";
import { useGlobalStateUpdate } from "../../../Layout/GlobalState";
import { useNavigate } from "react-router-dom";
import { useGlobalToast } from "../../../GlobalContext/GlobalToast";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const setGlobalState = useGlobalStateUpdate();
  const navigate = useNavigate();
  const { showToast } = useGlobalToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://city-corporation-backend.vercel.app/user/login/",
        {
          username,
          password,
        }
      );

      const { access, refresh, role, userId } = response.data;

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("userRole", role);
      localStorage.setItem("userId", userId);

      showToast({
        title: "Welcome Back",
        description: "Login successfull",
        status: "success",
      });
      setLoading(false);

      if (role === "citizen") {
        setGlobalState((prevState) => ({
          ...prevState,
          isAuthenticated: true,
          isCitizen: true,
          isAuthority: false,
        }));
        navigate("/");
      } else if (role === "authority") {
        setGlobalState((prevState) => ({
          ...prevState,
          isAuthenticated: true,
          isCitizen: false,
          isAuthority: true,
        }));
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setError("Login failed. Please check your credentials.", error);
    }
  };

  return (
    <div className="py-16">
      <div
        className="bg-purple-100 w-1/2 text-center mx-auto my-5 border-t border-b border-purple-500 text-purple-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">Please Wait</p>
        <p className="text-sm">
          Server may take time to start. please wait for a minute
        </p>
      </div>
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <img className="hidden lg:block lg:w-1/2 bg-cover" src={LoginImg}></img>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-red-700 text-center">
            Chittagong City Corporation
          </h2>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          {error && <h3 className="text-red-800 font-bold">{error}</h3>}
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                required
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="name"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                required
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button className="bg-red-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-500">
                {loading ? "Loading.." : "Login"}
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="#" className="text-xs text-gray-500 uppercase">
              or sign up
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
