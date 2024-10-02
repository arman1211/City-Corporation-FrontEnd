import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Services/Services/Services";
import Login from "../pages/Authentication/Login/Login";
import Registration from "../pages/Authentication/Registration/Registration";
import Profile from "../pages/Profile/Profile";
import CitizenProblemReport from "../pages/Profile/CitizenProblemReport";
import CitizenServiceRequest from "../pages/Profile/CitizenServiceRequest";
import CitizenProfile from "../pages/Profile/CitizenProfile";
import AuthorityRegistration from "../pages/Authentication/Registration/AuthorityRegistration";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AllProblemReports from "../pages/Dashboard/AllProblemReports/AllProblemReports";
import AllServiceRequest from "../pages/Dashboard/AllServiceRequest/AllServiceRequest";
import AddProbemReport from "../pages/Dashboard/AddProblemReport/AddProblemReport";
import AddServiceRequest from "../pages/Dashboard/AddServiceRequest/AddServiceRequest";
import ServiceControl from "../pages/Dashboard/ServiceControl/ServiceControl";
import AuthorityProfile from "../pages/Dashboard/AuthorityProfile/AuthorityProfile";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import LiveChat from "../pages/LiveChat/LiveChat";
import UserContactMessage from "../pages/Dashboard/UserContactMessage/UserContactMessage";
import CitizenChatUi from "../pages/LiveChat/CitizenChatUi";
import ChatHistory from "../pages/LiveChat/ChatHistory";
import AuthorityChat from "../pages/Dashboard/LiveChat/AuthorityChat";
import ReplyChat from "../pages/Dashboard/LiveChat/ReplyChat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/chat",
        element: <PrivateRoute element={<LiveChat />}></PrivateRoute>,
      },
      {
        path: "/chat/chat-history",
        element: <PrivateRoute element={<ChatHistory />}></PrivateRoute>,
      },
      {
        path: "/chat/newchat/:roomId",
        element: (
          <PrivateRoute
            element={<CitizenChatUi></CitizenChatUi>}
          ></PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register/citizen",
        element: <Registration></Registration>,
      },
      {
        path: "/register/authority",
        element: <AuthorityRegistration></AuthorityRegistration>,
      },
    ],
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<Profile></Profile>} />,
    children: [
      {
        path: "/profile",
        element: <PrivateRoute element={<CitizenProfile></CitizenProfile>} />,
      },
      {
        path: "/profile/service-request",
        element: <CitizenServiceRequest></CitizenServiceRequest>,
      },
      {
        path: "/profile/problem-report",
        element: <CitizenProblemReport></CitizenProblemReport>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute element={<Dashboard></Dashboard>} />,
    children: [
      {
        path: "/dashboard",
        element: <AuthorityProfile></AuthorityProfile>,
      },
      {
        path: "/dashboard/problem-report",
        element: <AllProblemReports></AllProblemReports>,
      },
      {
        path: "/dashboard/problem-report/add",
        element: <AddProbemReport></AddProbemReport>,
      },
      {
        path: "/dashboard/service-request",
        element: <AllServiceRequest></AllServiceRequest>,
      },
      {
        path: "/dashboard/service-request/add",
        element: <AddServiceRequest></AddServiceRequest>,
      },
      {
        path: "/dashboard/service-control",
        element: <ServiceControl></ServiceControl>,
      },
      {
        path: "/dashboard/user-contact",
        element: <UserContactMessage></UserContactMessage>,
      },
      {
        path: "/dashboard/authority-chat",
        element: <AuthorityChat></AuthorityChat>,
      },
      {
        path: "/dashboard/authority-chat/:roomId",
        element: <ReplyChat></ReplyChat>,
      },
    ],
  },
]);
