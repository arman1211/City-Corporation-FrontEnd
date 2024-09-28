import axios from "axios";
import { useEffect, useState } from "react";
import ReportSolveModal from "./ReportSolveModal";

const AllProblemReports = () => {
  const [citizenReports, setCitizenReports] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [problemId, setProblemId] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCitizenReports = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://city-corporation-backend.onrender.com/services/report-problem/list`
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
  }, []);

  const handleModalOpen = (id) => {
    setIsModalOpen(true);
    setProblemId(id);
    console.log(id);
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
            All Problem Reports By Citizen
          </h1>
          {citizenReports.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full m-auto">
                <thead>
                  <tr>
                    <th className="text-left">#</th>
                    <th className="text-left">Problem Type</th>
                    <th className="text-left">Reported By</th>
                    <th className="text-left">Description</th>
                    <th className="text-left">Status</th>
                    <th className="text-left">Created At</th>
                    <th className="text-left">Updated At</th>
                    <th className="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {citizenReports.map((report, index) => (
                    <tr key={report.id}>
                      <td>{index + 1}</td>
                      <td>{report.problem_type.name}</td>
                      <td>{report.citizen.username}</td>
                      <td>{report.description}</td>
                      <td>
                        <span
                          className={`badge ${
                            report.status === "in_progress"
                              ? "badge-success p-3 text-white"
                              : "badge-warning p-3"
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
                          <button className="btn text-white btn-success btn-sm">
                            Solved
                          </button>
                        ) : (
                          <button
                            onClick={() => handleModalOpen(report.id)}
                            className="btn btn-primary btn-sm"
                          >
                            Solve
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isModalOpen && (
                <ReportSolveModal
                  onClose={handleCloseModal}
                  id={problemId}
                  setProblemReports={setCitizenReports}
                ></ReportSolveModal>
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

export default AllProblemReports;
