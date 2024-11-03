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
        "https://city-corporation-backend.vercel.app/services/problem-type/list/"
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
    setSelectedProblem(problem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProblem(null);
  };
  return (
    <div className="my-5">
      <h1 className="text-4xl font-bold text-center text-purple-900 my-7">
        Problem Reports
      </h1>
      {problemReports.length == 0 && (
        <div className="">
          <Skeleton></Skeleton>
        </div>
      )}
      <div className="problems-container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 flex-wrap w-full">
        {problemReports.map((problem) => (
          <div
            key={problem.id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <figure>
              <img src={problem.image} alt="Shoes" className="w-full h-56" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{problem.name}</h2>
              <p>{problem.description}</p>
              <div className="card-actions justify-end">
                {globalState.isAuthenticated ? (
                  <button
                    onClick={() => handleReportClick(problem)}
                    className="btn text-white bg-red-600"
                  >
                    Report
                  </button>
                ) : (
                  <a className="btn text-white bg-red-600" href="/login">
                    Login
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-5 w-full border-0 h-1 bg-gradient-to-r from-red-500 to-purple-500" />

      <ProblemReportModal
        problem={selectedProblem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProblemReport;
