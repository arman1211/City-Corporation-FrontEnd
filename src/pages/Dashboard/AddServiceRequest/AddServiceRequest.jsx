import { useState } from "react";
import { useGlobalToast } from "../../../GlobalContext/GlobalToast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axios";

const AddServiceRequest = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { showToast } = useGlobalToast();
  const navigate = useNavigate();

  const imageBBApiKey = "6d7c721c067a459ff64cabd28e220d44";

  const uploadImageToImageBB = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${imageBBApiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data.data.url; // Return the image URL
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // First, upload the image to ImageBB
      const imageUrl = await uploadImageToImageBB(image);

      // Once the image URL is obtained, submit the form data to the backend
      const response = await axiosInstance.post(
        "/services/service-type/create/",
        {
          name,
          description,
          image: imageUrl, // Send image URL to the backend
        }
      );

      if (response.status === 201) {
        showToast({
          title: "Added",
          description: "Service Type added successfully",
          status: "success",
        });
        navigate("/dashboard/service-control");
      }
    } catch (error) {
      console.log(error);
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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
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
