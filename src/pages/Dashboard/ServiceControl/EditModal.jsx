/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobalToast } from "../../../GlobalContext/GlobalToast";

const EditModal = ({ onClose, id, problemType, setProblemReports }) => {
  const [problem, setProblem] = useState({});
  const [problemName, setProblemName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const { showToast } = useGlobalToast();
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/services/${problemType}/update/${id}/`
        );
        console.log(response);
        if (response.data) {
          setProblem(response.data);
          setProblemName(problem.name);

          setDescription(problem.description);
        }
      } catch (error) {
        console.log("something wrong", error);
      }
    };
    fetchProblem();
  }, [id, problemType, problem.name, problem.description]);
  const handleEditProblem = async (e) => {
    e.preventDefault();
    const data = {
      name: problemName,
      description: description,
      image: image,
    };
    console.log(data);
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/services/${problemType}/update/${id}/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status == 200) {
        setProblem(response.data);
        showToast({
          title: "Edited",
          description: "edited successfully",
          status: "success",
        });
        setProblemReports((prevProbem) =>
          prevProbem.map((problem) =>
            problem.id === id ? { ...problem, ...response.data } : problem
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
          Edit Problem
        </h2>
        <form onSubmit={handleEditProblem}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="file-input file-input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="text"
              value={problemName}
              onChange={(e) => setProblemName(e.target.value)}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <input
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
