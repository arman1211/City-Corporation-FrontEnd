import { useEffect, useState } from "react";
import ServiceRequestModal from "./ServiceRequestModal";
import { useGlobalState } from "../../../Layout/GlobalState";
import Skeleton from "../../Shared/Skeleton/Skeleton";

const ServiceRequest = () => {
  const [serviceRequests, setServiceRequests] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const globalState = useGlobalState();
  useEffect(() => {
    const fetchServiceRequests = () => {
      fetch(
        "https://city-corporation-backend.vercel.app/services/service-type/list/"
      )
        .then((res) => res.json())
        .then((data) => {
          setServiceRequests(data);
          console.log(data);
        });
    };
    fetchServiceRequests();
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
        Service Request
      </h1>
      {serviceRequests.length == 0 && (
        <div className="">
          <Skeleton></Skeleton>
        </div>
      )}
      <div className="services-container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 flex-wrap w-full">
        {serviceRequests.map((service) => (
          <div
            key={service.id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <figure>
              <img src={service.image} className="w-full h-56" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p>{service.description}</p>
              <div className="card-actions justify-end">
                {globalState.isAuthenticated ? (
                  <button
                    onClick={() => handleReportClick(service)}
                    className="btn text-white bg-red-600"
                  >
                    Report
                  </button>
                ) : (
                  <a href="/login" className="btn text-white bg-red-600">
                    Login
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ServiceRequestModal
        problem={selectedProblem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ServiceRequest;
