import ServiceDetailsLayout from "./ServiceDetailsLayout";
import { serviceDetailsData } from "./serviceDetailsData";

const activePath = "/service_details5";

const ServiceDetails5 = () => (
  <ServiceDetailsLayout
    content={serviceDetailsData[activePath]}
    activePath={activePath}
  />
);

export default ServiceDetails5;
