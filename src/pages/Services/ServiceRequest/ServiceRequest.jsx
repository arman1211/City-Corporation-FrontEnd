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
      <div className="services-container flex gap-5 flex-wrap">
        {serviceRequests.map((service) => (
          <div key={service.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={service.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p>{service.description}</p>
              <div className="card-actions justify-end">
                {globalState.isCitizen && (
                  <button
                    onClick={() => handleReportClick(service)}
                    className="btn text-white bg-red-600"
                  >
                    Report
                  </button>
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
