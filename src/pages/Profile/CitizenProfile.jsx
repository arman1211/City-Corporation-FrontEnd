import { useEffect, useState } from "react";
import img from "../../assets/citizen.jpg";
import axios from "axios";
const CitizenProfile = () => {
  const [profile, setProfile] = useState(null);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios.get(
        `https://city-corporation-backend.onrender.com/user/details/${userId}`
      );
      if (response.status == 200) {
        setProfile(response.data);
        console.log(response);
      }
    };
    getUserInfo();
  }, [userId]);
  return (
    <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              src={img}
              className="h-48 w-full object-cover md:h-full md:w-48"
              alt=""
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Citizen Profile
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              {profile?.username}
            </h1>
            <div className="mt-2 flex items-center text-gray-500">
              <a
                href={`mailto:${profile?.email}`}
                className="hover:text-indigo-600 transition-colors duration-200"
              >
                {profile?.email}
              </a>
            </div>
            <p className="mt-4 text-gray-500">Welcome to my profile!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenProfile;
