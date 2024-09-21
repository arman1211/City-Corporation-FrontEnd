import ProblemReport from "../ProblemReport/ProblemReport";
import ServiceRequest from "../ServiceRequest/ServiceRequest";

const Services = () => {
  return (
    <div className="w-4/5 mx-auto">
      All Services
      <ProblemReport></ProblemReport>
      <ServiceRequest></ServiceRequest>
    </div>
  );
};

export default Services;