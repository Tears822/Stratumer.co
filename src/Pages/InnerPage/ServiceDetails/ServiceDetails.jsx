import ServiceDetailsLayout from "./ServiceDetailsLayout";
import { serviceDetailsData } from "./serviceDetailsData";

const activePath = "/service_details";

const ServiceDetails = () => (
  <ServiceDetailsLayout
    content={serviceDetailsData[activePath]}
    activePath={activePath}
  />
);

export default ServiceDetails;
