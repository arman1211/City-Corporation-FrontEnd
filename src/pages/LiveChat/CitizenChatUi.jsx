import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios";

// Function to format the timestamp
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Pad minutes with leading zero if necessary
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const CitizenChatUi = () => {
  const { roomId } = useParams();
  const senderId = localStorage.getItem("userId");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    try {
      const response = await axiosInstance.get(
        `/chat/chat-room/${roomId}/messages/`
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    setLoading(true);

    try {
      const response = await axiosInstance.post("/chat/message/send/", {
        room: roomId,
        sender: senderId,
        content: newMessage,
      });

      setMessages([...messages, response.data]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
    const intervalId = setInterval(fetchMessages, 5000);
    return () => clearInterval(intervalId);
  }, [roomId]);

  return (
    <div className="flex flex-col min-h-96 my-12 w-3/4 md:w-1/2 m-auto bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end ${
              message.sender === parseInt(senderId) ? "justify-end" : ""
            }`}
          >
            <div
              className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
                message.sender === parseInt(senderId)
                  ? "order-1 items-end"
                  : "order-2 items-start"
              }`}
            >
              <div>
                <span
                  className={`px-4 py-2 rounded-lg inline-block ${
                    message.sender === parseInt(senderId)
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-300 text-gray-600 rounded-bl-none"
                  }`}
                >
                  {message.content}
                </span>

                <span className="text-gray-500 text-xs">
                  {formatTimestamp(message.timestamp)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-200 p-4">
        <div className="flex flex-col sm:flex-row items-center rounded-lg w-full max-w-lg m-auto bg-white overflow-hidden">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full sm:w-auto flex-grow rounded border-red-400 px-4 py-2 focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="mt-2 sm:mt-0 sm:ml-2 bg-red-500 justify-end text-white px-6 py-2 hover:bg-red-600 transition duration-150 ease-in-out w-full sm:w-auto"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CitizenChatUi;
