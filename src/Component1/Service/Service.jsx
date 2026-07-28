/* eslint-disable no-unused-vars */
import serviceIcon from "/images/service-1.png";
import serviceIcon2 from "/images/service-2.png";
import serviceIcon3 from "/images/service-3.png";
import serviceIcon4 from "/images/service-4.png";
import serviceIcon5 from "/images/service-5.png";
import serviceIcon6 from "/images/service-6.png";
import ServiceCard from "./ServiceCard";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceNumber: "01",
    serviceTitle: "Cloud Services",
    serviceDesc:
      "Secure cloud migration and optimization that keeps systems fast and flexible.",
    serviceUrl: "/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceNumber: "02",
    serviceTitle: "IT Management",
    serviceDesc:
      "Managed IT support and monitoring that keeps daily operations stable.",
    serviceUrl: "/service_details2",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceNumber: "03",
    serviceTitle: "Software Renew",
    serviceDesc:
      "Upgrade outdated tools with renewal plans that improve speed and security.",
    serviceUrl: "/service_details3",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceNumber: "04",
    serviceTitle: "Machine Learning",
    serviceDesc:
      "Practical models that forecast trends and automate smarter decisions.",
    serviceUrl: "/service_details4",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 5,
    serviceIcon: serviceIcon5,
    serviceNumber: "05",
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "SEO, content, and paid campaigns that attract qualified leads.",
    serviceUrl: "/service_details5",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 6,
    serviceIcon: serviceIcon6,
    serviceNumber: "06",
    serviceTitle: "Web Development",
    serviceDesc:
      "Custom websites and web apps built for speed, security, and conversion.",
    serviceUrl: "/service_details6",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
];

const Service = () => {
  return (
    <section className="relative pt-28 pb-[120px] bg-[url('/images/service-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            IT Support For Business
          </h5>
          <h1 className="font-Rajdhani font-bold text-[20px] leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]">
            Ensuring Your Success Trusted <br />
            IT Services Source
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[54px]">
          {ServiceData.map(
            ({
              id,
              serviceIcon,
              serviceNumber,
              serviceTitle,
              serviceDesc,
              serviceUrl,
              serviceButton,
              serviceBtnIcon,
            }) => {
              return (
                <>
                  <div key={id}>
                    <ServiceCard
                      serviceIcon={serviceIcon}
                      serviceNumber={serviceNumber}
                      serviceTitle={serviceTitle}
                      serviceDesc={serviceDesc}
                      serviceUrl={serviceUrl}
                      serviceButton={serviceButton}
                      serviceBtnIcon={serviceBtnIcon}
                    />
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
