import axios from "axios";
import { useEffect, useState } from "react";
import ProblemReportSolveModal from "./ProblemSolveModal";

const CitizenProblemReport = () => {
  const userId = localStorage.getItem("userId");
  const [citizenReports, setCitizenReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [problemId, setProblemId] = useState(null);
  useEffect(() => {
    const fetchCitizenReports = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8000/services/report-problem/citizen/${parseInt(
            userId
          )}`
        );
        console.log(response);
        if (response.status == 200) {
          setCitizenReports(response.data);
          console.log(response.data);
        }
      } catch (error) {
        alert("something went wrong", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchCitizenReports();
  }, [userId]);
  const handleModalOpen = (id) => {
    console.log(id);
    setIsModalOpen(true);
    setProblemId(id);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-red-600"></span>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold text-center my-6">
            Your Problem Reports
          </h1>
          {citizenReports.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full m-auto">
                <thead>
                  <tr>
                    <th className="text-left">#</th>
                    <th className="text-left">Problem Type</th>
                    <th className="text-left">Description</th>
                    <th className="text-left">Status</th>
                    <th className="text-left">Created At</th>
                    <th className="text-left">Updated At</th>
                    <th className="text-left">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {citizenReports.map((report, index) => (
                    <tr key={report.id}>
                      <td>{index + 1}</td>
                      <td>{report.problem_type_name}</td>
                      <td>{report.description}</td>
                      <td>
                        <span
                          className={`badge ${
                            report.status === "in_progress"
                              ? "badge-success p-3 text-white"
                              : "badge-warning p-3 "
                          }`}
                        >
                          {report.status.replace("_", " ")}
                        </span>
                      </td>
                      <td>
                        {new Date(report.created_at).toLocaleDateString()}
                      </td>
                      <td>
                        {new Date(report.updated_at).toLocaleDateString()}
                      </td>
                      <td>
                        {report.status === "in_progress" ? (
                          <button
                            onClick={() => handleModalOpen(report.id)}
                            className="btn btn-success text-white btn-sm"
                          >
                            Show message
                          </button>
                        ) : (
                          <button className="btn btn-warning btn-sm">
                            Pending
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isModalOpen && (
                <ProblemReportSolveModal
                  onClose={handleCloseModal}
                  problemId={problemId}
                  problemType="problem-report"
                ></ProblemReportSolveModal>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-600">No reports found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CitizenProblemReport;
