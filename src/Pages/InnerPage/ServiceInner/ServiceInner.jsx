/* eslint-disable no-unused-vars */
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import serviceIcon from "/images/service-icon1.png";
import serviceIcon2 from "/images/service-icon2.png";
import serviceIcon3 from "/images/service-icon3.png";
import serviceIcon4 from "/images/service-icon4.png";
import serviceIcon5 from "/images/service-icon5.png";
import serviceIcon6 from "/images/service-icon6.png";
import ServiceCard from "./ServiceCard";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Newsletter from "./Newsletter/Newsletter";

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: "Cloud Services",
    serviceDesc:
      "Secure cloud migration and optimization that keeps systems fast, flexible, and cost ready.",
    serviceUrl: "/service_details",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: "IT Management",
    serviceDesc:
      "Managed IT support and monitoring that keeps daily operations stable and secure.",
    serviceUrl: "/service_details2",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon4,
    serviceTitle: "Software Renew",
    serviceDesc:
      "Upgrade outdated tools with renewal plans that improve speed, usability, and security.",
    serviceUrl: "/service_details3",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon3,
    serviceTitle: "Machine Learning",
    serviceDesc:
      "Practical machine learning models that forecast trends and automate smarter decisions.",
    serviceUrl: "/service_details4",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 5,
    serviceIcon: serviceIcon5,
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "SEO, content, and paid campaigns that attract qualified leads and grow brand reach.",
    serviceUrl: "/service_details5",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 6,
    serviceIcon: serviceIcon6,
    serviceTitle: "Web Development",
    serviceDesc:
      "Custom websites and web apps built for speed, security, and conversion focused journeys.",
    serviceUrl: "/service_details6",
    serviceButton2: "Learn More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
];

const ServiceInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Services"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Our Services"}
      />
      <section className="pt-28 pb-[120px] p relative z-10 bg-BodyBg-0">
        <div className="Container">
          <div className="text-center">
            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
              IT Support For Business
            </h5>
            <h1 className="font-Rajdhani font-bold text-[20px] text-HeadingColor-0 leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] mt-[18px]">
              Ensuring Your Success Trusted <br />
              IT Services Source
            </h1>
          </div>
          <div className="mt-[88px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-[68px]">
              {serviceData.map(
                ({
                  id,
                  serviceImg,
                  serviceIcon,
                  serviceUrl,
                  serviceButton,
                  serviceButton2,
                  serviceTitle,
                  serviceDesc,
                  serviceShape,
                }) => {
                  return (
                      <div key={id}>
                        <ServiceCard
                          serviceImg={serviceImg}
                          serviceIcon={serviceIcon}
                          serviceUrl={serviceUrl}
                          serviceButton={serviceButton}
                          serviceButton2={serviceButton2}
                          serviceTitle={serviceTitle}
                          serviceDesc={serviceDesc}
                          serviceShape={serviceShape}
                        />
                      </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default ServiceInner;
