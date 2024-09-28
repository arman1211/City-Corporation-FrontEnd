import { useState } from "react";
import axios from "axios";
import { useGlobalToast } from "../../../GlobalContext/GlobalToast";
import { useNavigate } from "react-router-dom";

const AddServiceRequest = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { showToast } = useGlobalToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "https://city-corporation-backend.onrender.com/services/service-type/create/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
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
    <div className="max-w-lg  mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Service Type
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
          {loading ? "Creating..." : "Create Service Type"}
        </button>
      </form>
    </div>
  );
};

export default AddServiceRequest;
