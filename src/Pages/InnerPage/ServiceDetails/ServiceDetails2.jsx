import ServiceDetailsLayout from "./ServiceDetailsLayout";
import { serviceDetailsData } from "./serviceDetailsData";

const activePath = "/service_details2";

const ServiceDetails2 = () => (
  <ServiceDetailsLayout
    content={serviceDetailsData[activePath]}
    activePath={activePath}
  />
);

export default ServiceDetails2;
