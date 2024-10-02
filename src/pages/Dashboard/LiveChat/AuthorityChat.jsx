import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axiosInstance from "../../../axios";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

const AuthorityChat = () => {
  const userId = localStorage.getItem("userId");
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axiosInstance.get("/chat/chat-room/list");
        const data = response.data.filter((res) => res.last_message != null);

        setChatRooms(data);
      } catch (error) {
        console.error("Error fetching chat history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChatHistory();
  }, [userId]);

  if (loading) {
    return <div>Loading chat history...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl w-full px-4">
        <h1 className="text-2xl font-bold text-center mb-6">User Chat List</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {chatRooms.length === 0 ? (
            <p className="text-center text-gray-500">No chat history found.</p>
          ) : (
            <ul className="space-y-4">
              {chatRooms.map((chatRoom) => (
                <li key={chatRoom.id} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold">
                          {chatRoom.last_message.sender_name}
                        </span>
                        : {chatRoom.last_message.content}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Sent at: {formatDate(chatRoom.last_message.timestamp)}
                      </p>
                    </div>
                    <Link
                      to={`${chatRoom.id}/`}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Reply
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorityChat;
