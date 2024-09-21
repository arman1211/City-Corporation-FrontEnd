import ProblemReportControl from "./ProblemReportControl";
import ServiceRequestControl from "./ServiceRequestControl";

const ServiceControl = () => {
  return (
    <div>
      <h2>All Service Control</h2>
      <ProblemReportControl></ProblemReportControl>
      <ServiceRequestControl></ServiceRequestControl>
    </div>
  );
};

export default ServiceControl;
