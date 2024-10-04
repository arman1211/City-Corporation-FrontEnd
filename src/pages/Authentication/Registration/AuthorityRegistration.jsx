import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalToast } from "../../../GlobalContext/GlobalToast";
import axios from "axios";
import RegistrationImg from "../../../assets/Register.jpg";

const AuthorityRegistration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { showToast } = useGlobalToast();

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password didnt match");
      return;
    }
    if (password === confirmPassword) {
      console.log(username, email, password);
      try {
        const response = await axios.post(
          "https://city-corporation-backend.vercel.app/user/register/authority/",
          {
            username: username,
            email: email,
            password: password,
          }
        );
        console.log(response);

        if (response.status === 201) {
          showToast({
            title: "Registration successful",
            description: "Please login",
            status: "success",
          });
          navigate("/login");
        }
      } catch (error) {
        setError("An unexpected error occurred. Please try again", error);
      }
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
        <img
          className="hidden lg:block lg:w-1/2 bg-cover"
          src={RegistrationImg}
        ></img>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-red-700 text-center">
            Chittagong City Corporation
          </h2>
          <p className="text-xl text-gray-600 text-center">
            Authority Registration
          </p>
          <form onSubmit={(e) => handleRegistration(e)}>
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
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                required
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                required
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
              </div>
              {error && <h2 className="text-red-700 font-bold">{error}</h2>}
              <input
                required
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button className="bg-red-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-500">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="#" className="text-xs text-gray-500 uppercase">
              or login
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityRegistration;
