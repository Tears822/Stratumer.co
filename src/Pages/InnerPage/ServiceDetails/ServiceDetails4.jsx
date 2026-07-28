import ServiceDetailsLayout from "./ServiceDetailsLayout";
import { serviceDetailsData } from "./serviceDetailsData";

const activePath = "/service_details4";

const ServiceDetails4 = () => (
  <ServiceDetailsLayout
    content={serviceDetailsData[activePath]}
    activePath={activePath}
  />
);

export default ServiceDetails4;
