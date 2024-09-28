import { useEffect, useState } from "react";
import ProblemReportModal from "./ProblemReportModal";
import { useGlobalState } from "../../../Layout/GlobalState";
import Skeleton from "../../Shared/Skeleton/Skeleton";

const ProblemReport = () => {
  const [problemReports, setProblemReports] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const globalState = useGlobalState();
  useEffect(() => {
    const fetchProblemReports = () => {
      fetch(
        "https://city-corporation-backend.onrender.com/services/problem-type/list/"
      )
        .then((res) => res.json())
        .then((data) => {
          setProblemReports(data);
          console.log(data);
        });
    };
    fetchProblemReports();
  }, []);
  const handleReportClick = (problem) => {
    setSelectedProblem(problem); // Set the selected problem
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProblem(null); // Clear the selected problem
  };
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold text-center my-3">Problem Reports</h1>
      {problemReports.length == 0 && (
        <div className="">
          <Skeleton></Skeleton>
        </div>
      )}
      <div className="problems-container flex gap-5 flex-wrap">
        {problemReports.map((problem) => (
          <div key={problem.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={problem.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{problem.name}</h2>
              <p>{problem.description}</p>
              <div className="card-actions justify-end">
                {globalState.isCitizen && (
                  <button
                    onClick={() => handleReportClick(problem)}
                    className="btn text-white bg-red-600"
                  >
                    Report
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-5" />
      <ProblemReportModal
        problem={selectedProblem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProblemReport;
