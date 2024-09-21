import { useState } from "react";
import axios from "axios";
import { useGlobalToast } from "../../../GlobalContext/GlobalToast";
import { useNavigate } from "react-router-dom";

const AddProbemReport = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { showToast } = useGlobalToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/services/problem-type/create/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      showToast({
        title: "Added",
        description: "Problem Type added successfully",
        status: "success",
      });
      navigate("/dashboard/service-control");
    } catch {
      showToast({
        title: "Failed",
        description: "Something went wrong",
        status: "warning",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Problem Type
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

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

        <button
          type="submit"
          className={`btn bg-red-600 text-white w-full ${
            loading ? "loading" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Problem Type"}
        </button>
      </form>
    </div>
  );
};

export default AddProbemReport;
