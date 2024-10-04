import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LiveChat = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const startNewChat = async () => {
    const senderId = localStorage.getItem("userId"); // Get senderId from localStorage
    if (!senderId) {
      alert("User not found! Please log in.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://city-corporation-backend.vercel.app/chat/chat-room/",
        {
          citizen: senderId,
        }
      );
      console.log(response);

      if (response.status == 201) {
        const Id = response.data.id; // Get the roomId from the response
        // Redirect to the new chat room using roomId
        navigate(`newchat/${Id}`);
      }
    } catch (error) {
      console.error("Error creating chat room:", error);
      alert("Failed to start a new chat. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-red-100">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-2xl flex flex-col md:flex-row gap-5 justify-center w-full px-4">
            <button
              onClick={startNewChat}
              className={`btn btn-secondary ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Starting Chat..." : "Start a new Chat"}
            </button>
            <Link to="chat-history/" className="btn btn-primary">
              My Chat History
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
