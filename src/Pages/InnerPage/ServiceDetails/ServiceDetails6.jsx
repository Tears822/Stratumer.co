import ServiceDetailsLayout from "./ServiceDetailsLayout";
import { serviceDetailsData } from "./serviceDetailsData";

const activePath = "/service_details6";

const ServiceDetails6 = () => (
  <ServiceDetailsLayout
    content={serviceDetailsData[activePath]}
    activePath={activePath}
  />
);

export default ServiceDetails6;
