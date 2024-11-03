import { useEffect, useState } from "react";
import axios from "axios";

const ServicesGrid = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://city-corporation-backend.vercel.app/services/service-type/list/"
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-[640px] mt-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-8 text-purple-800">
          Available Services
        </h1>
        <a
          href="/services"
          className="btn btn-sm text-white bg-purple-600 hover:bg-purple-400"
        >
          See all
        </a>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-purple-800">
                {service.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
