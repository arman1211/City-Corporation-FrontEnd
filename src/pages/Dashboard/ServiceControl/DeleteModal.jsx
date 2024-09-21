/* eslint-disable react/prop-types */
import axios from "axios";
import { useGlobalToast } from "../../../GlobalContext/GlobalToast";

const DeleteModal = ({ onClose, id, problemType, setProblemReports }) => {
  const { showToast } = useGlobalToast();
  const handleDelete = async (e) => {
    e.preventDefault();
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/services/${problemType}/delete/${id}/`
      );
      console.log(response);
      if (response.status == 204) {
        showToast({
          title: "Deleted",
          description: "deleted successfully",
          status: "success",
        });
        setProblemReports((prevProblem) =>
          prevProblem.filter((problem) => problem.id !== id)
        );
        onClose();
      }
    } catch (error) {
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
        <h2 className="text-2xl font-semibold mb-4 text-center text-red-600 ">
          Are You sure want to delete
        </h2>
        <form onSubmit={handleDelete}>
          <div className="flex justify-center my-12">
            <button
              className="btn py-2 px-4 rounded-lg bg-transparent border-2 border-green-500  hover:bg-green-500 hover:text-white text-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn py-2 px-4 rounded-lg bg-red-700 border-2 border-transparent ml-2 text-white text-md mr-4 hover:bg-red-400"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteModal;
