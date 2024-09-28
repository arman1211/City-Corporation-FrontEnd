/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useGlobalToast } from "../../../GlobalContext/GlobalToast";

const ServiceSolveModal = ({ onClose, id, setProblemReports }) => {
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { showToast } = useGlobalToast();
  const authorId = localStorage.getItem("userId");

  const handleSolveProblem = async (e) => {
    e.preventDefault();
    const data = {
      service: id,
      description: description,
      authority: parseInt(authorId),
    };
    console.log(data);
    try {
      const response = await axios.post(
        `https://city-corporation-backend.onrender.com/authority/service-request/solve/`,
        data
      );
      console.log(response);
      if (response.status == 201) {
        showToast({
          title: "Send",
          description: "Solve successfully",
          status: "success",
        });
        setProblemReports((prevProblems) =>
          prevProblems.map((problem) =>
            problem.id === id
              ? { ...problem, status: "in_progress", updated_at: new Date() }
              : problem
          )
        );
        onClose();
      }
    } catch (error) {
      setError("something wrong", error);
      console.log(error);
    }
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>

        {error && (
          <div role="alert" className="alert alert-warning bg-red-300">
            <span>{error}</span>
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-4 text-center text-red-600">
          Solve Problem
        </h2>
        <form onSubmit={handleSolveProblem}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Write Your Suggestion to the citizen
            </label>
            <textarea
              type="text"
              name="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              className="btn py-2 px-4 rounded-lg bg-transparent border-2 border-red-500 text-red-500  hover:bg-red-500 hover:text-white text-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn py-2 px-4 rounded-lg bg-red-500 border-2 border-transparent ml-2 text-white text-md mr-4 hover:bg-red-400"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceSolveModal;
