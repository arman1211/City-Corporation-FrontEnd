import { Link, useNavigate } from "react-router-dom";
import NavImg from "../../../assets/cityCorporation.png";
import {
  useGlobalState,
  useGlobalStateUpdate,
} from "../../../Layout/GlobalState";
import { useGlobalToast } from "../../../GlobalContext/GlobalToast";
const Navbar = () => {
  const globalState = useGlobalState();
  const setGlobalState = useGlobalStateUpdate();
  const { showToast } = useGlobalToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    setGlobalState((prevState) => ({
      ...prevState,
      isAuthenticated: false,
      isCitizen: false,
      isAuthority: false,
    }));
    showToast({
      title: "Success",
      description: "Logged Out Successfull.",
      status: "success",
    });
    navigate("/login");
  };

  return (
    <div className="w-full shadow-lg bg-purple-950 text-white">
      <div className="navbar w-full lg:w-3/4  m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/" className="text-lg font-bold text-red-500">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/contact-us"
                  className="text-lg font-bold text-red-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="/services" className="text-lg font-bold text-red-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/chat" className="text-lg font-bold text-red-500">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="flex gap-1 items-center">
            <img src={NavImg} className="w-16" alt="" />
            <h1 className="black-ops-one-regular md:block hidden font-bold text-4xl text-red-600">
              CCC
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/" className="text-lg font-bold hover:text-red-500">
                Home
              </a>
            </li>

            <li>
              <a
                href="/contact-us"
                className="text-lg font-bold hover:text-red-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-lg font-bold hover:text-red-500"
              >
                Services
              </a>
            </li>
            <li>
              <a href="/chat" className="text-lg font-bold hover:text-red-500">
                Live Chat
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {globalState.isAuthenticated ? (
            <>
              <Link
                onClick={handleLogout}
                className="btn uppercase py-2 px-4 rounded-lg bg-red-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Logout
              </Link>
              {globalState.isCitizen ? (
                <Link
                  to={"profile/"}
                  className="btn uppercase py-2  px-4 rounded-lg bg-transparent border-2 border-red-500 text-red-500  hover:bg-red-500 hover:text-white text-md"
                >
                  Profile
                </Link>
              ) : (
                <Link
                  to={"dashboard/"}
                  className="btn uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-red-500 text-red-500  hover:bg-red-500 hover:text-white text-md"
                >
                  Dashboard
                </Link>
              )}
            </>
          ) : (
            <>
              <a
                className="btn uppercase py-2 px-4 rounded-lg bg-red-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                href="/login"
              >
                Login
              </a>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost ml-4 btn-circle avatar"
                >
                  <a className="btn uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-red-500 text-red-500  hover:bg-red-500 hover:text-white text-md">
                    Register
                  </a>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a
                      className="justify-between p-2 hover:bg-red-500 hover:text-white text-pink-600 font-bold"
                      href="/register/citizen"
                    >
                      Register as Citizen
                    </a>
                  </li>
                  <li>
                    <a
                      href="/register/authority"
                      className="p-2 hover:bg-red-500 hover:text-white text-pink-600 font-bold"
                    >
                      Register as Authority
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
