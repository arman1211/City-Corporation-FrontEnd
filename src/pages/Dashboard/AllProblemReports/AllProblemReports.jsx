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
          `https://city-corporation-backend.vercel.app/services/report-problem/list`
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
              <table className="table-auto w-full m-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left border">#</th>
                    <th className="px-4 py-2 text-left border">Problem Type</th>
                    <th className="px-4 py-2 text-left border">Reported By</th>
                    <th className="px-4 py-2 text-left border">Description</th>
                    <th className="px-4 py-2 text-left border">Status</th>
                    <th className="px-4 py-2 text-left border">Created At</th>
                    <th className="px-4 py-2 text-left border">Updated At</th>
                    <th className="px-4 py-2 text-left border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {citizenReports.map((report, index) => (
                    <tr key={report.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">{index + 1}</td>
                      <td className="px-4 py-2 border">
                        {report.problem_type.name}
                      </td>
                      <td className="px-4 py-2 border">
                        {report.citizen.username}
                      </td>
                      <td className="px-4 py-2 border">{report.description}</td>
                      <td className="px-4 py-2 border">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                            report.status === "in_progress"
                              ? "bg-green-500 text-white"
                              : "bg-yellow-400 text-gray-800"
                          }`}
                        >
                          {report.status.replace("_", " ")}
                        </span>
                      </td>
                      <td className="px-4 py-2 border">
                        {new Date(report.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 border">
                        {new Date(report.updated_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 border">
                        {report.status === "in_progress" ? (
                          <button className="btn text-white bg-green-500 hover:bg-green-600 btn-sm">
                            Solved
                          </button>
                        ) : (
                          <button
                            onClick={() => handleModalOpen(report.id)}
                            className="btn bg-blue-500 hover:bg-blue-600 text-white btn-sm"
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
                />
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
