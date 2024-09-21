/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGlobalToast } from "../../../GlobalContext/GlobalToast";

const ServiceRequestModal = ({ problem, isOpen, onClose }) => {
  const [description, setDescription] = useState(""); // State to manage the description
  const [loading, setLoading] = useState(false); // State to manage loading state
  const userId = localStorage.getItem("userId");
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const { showToast } = useGlobalToast();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/services/request-service/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_type: problem.id,
            description: description,
            citizen: parseInt(userId),
          }),
        }
      );

      if (response.ok) {
        showToast({
          title: "Success",
          description:
            "You requested a service Successfully. Please wait for solve...",
          status: "success",
        });
        onClose();
      } else {
        showToast({
          title: "Something went wrong",
          description: "Failed to request",
          status: "error",
        });
      }
    } catch (error) {
      console.error("Error reporting problem:", error);
      alert("An error occurred while reporting the problem.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="modal-box bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
        <h2 className="text-4xl text-purple-950 text-center font-semibold  mb-4">
          Request a Service
        </h2>
        <p className="text-base text-gray-700 mb-2">
          Service Name: <span className="font-medium">{problem.name}</span>
        </p>
        <p className=" text-gray-700 mb-4">
          <span className="font-bold">
            Make Sure you are giving proper information with Location.
          </span>
        </p>

        <textarea
          onChange={handleDescriptionChange}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-500"
          placeholder="Enter a detailed description of the problem with location"
          rows="4"
        ></textarea>

        <div className="modal-action flex justify-end">
          <button
            onClick={onClose}
            className="btn text-gray-700 border border-gray-300 rounded-md px-4 py-2 mr-2 hover:bg-gray-100 transition duration-200"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="btn bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Reporting..." : "Confirm Report"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestModal;
