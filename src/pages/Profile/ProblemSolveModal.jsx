/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

const ProblemReportSolveModal = ({ problemId, onClose, problemType }) => {
  const [description, setDescription] = useState("");
  const [solvedAt, setSolvedAt] = useState("");
  console.log(problemId);
  useEffect(() => {
    const fetchProblemSolveData = async () => {
      try {
        const response = await axios.get(
          `https://city-corporation-backend.vercel.app/authority/${problemType}/solve/${problemId}`
        );
        if (response.status == 200) {
          setDescription(response.data.description);
          setSolvedAt(new Date(response.data.solved_at).toLocaleString());
        }
      } catch (error) {
        console.error("Error fetching problem solve data:", error);
      }
    };

    fetchProblemSolveData();
  }, [problemId, problemType]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-box bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="text-3xl text-purple-700 text-center font-bold mb-6">
          Message from Authority
        </h2>

        <div className=" shadow-lg p-5">
          <p className="text-lg text-gray-800 mb-4">
            <span className="font-bold text-3xl text-gray-700 font-serif ">
              {description}
            </span>
          </p>
          <p className="text-lg text-gray-600 mb-8">
            <span className="font-semibold">Solved At:</span> {solvedAt}
          </p>
        </div>

        <div className="modal-action flex justify-end">
          <button
            onClick={onClose}
            className="btn text-white bg-purple-700 rounded-lg px-6 py-2 hover:bg-purple-800 transition duration-300 shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemReportSolveModal;
