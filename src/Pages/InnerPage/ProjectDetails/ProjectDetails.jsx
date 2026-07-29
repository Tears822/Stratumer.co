import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import projectDetailsThumb from "/images/project-details-thumb.jpg";
import projectDetailsListThumb from "/images/project-details-item-images.jpg";
import wedgetIcon from "/images/widget-icon.png";
import { FaArrowRight, FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Project from "./Project/Project";

const ProjectDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Project Details"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Project Details"}
      />
      <section className="py-[120px]">
        <div className="Container">
          <img src={projectDetailsThumb} draggable="false" className="w-full" />
          <div className="grid grid-cols-3 gap-[70px] mt-12">
            <div className="col-span-3 lg:col-span-2">
              <h2 className="font-Rajdhani font-bold text-3xl sm:text-4xl text-HeadingColor-0">
                Intro of the project
              </h2>
              <p className="font-Nunito text-TextColor2-0 mt-6">
                Stratumer rebuilt this client platform to unify scattered tools
                into one secure workspace. The goal was faster collaboration,
                cleaner data flow, and a system that supports daily operations
                without constant manual fixes or downtime.
              </p>
              <p className="font-Nunito text-TextColor2-0 mt-7 mb-9">
                We mapped existing workflows, then designed a scalable cloud
                environment with clear roles, automated backups, and modern
                integrations. The result is a reliable foundation that teams
                can trust as the business grows and new services come online.
              </p>
              <h2 className="font-Rajdhani font-bold text-3xl sm:text-4xl text-HeadingColor-0 mt-[52px]">
                Challenge and solution
              </h2>
              <p className="font-Nunito text-TextColor2-0 mt-6">
                Legacy systems slowed reporting and left security gaps across
                departments. Stratumer replaced fragile processes with a
                modular solution, stronger access controls, and training that
                helps staff adopt the new tools with confidence.
              </p>
              <div className="grid gap-7 grid-cols-1 lg:grid-cols-1 md:grid-cols-2 items-center xl:grid-cols-2 mt-12">
                <div>
                  <img src={projectDetailsListThumb} draggable="false" />
                </div>
                <div>
                  <h2 className="font-Rajdhani font-semibold text-[28px] text-HeadingColor-0">
                    Process & Result
                  </h2>
                  <ul className="flex flex-col gap-[14px] mt-7">
                    <li className="flex gap-3 items-center font-Nunito text-TextColor2-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Secure cloud migration
                    </li>
                    <li className="flex gap-3 items-center font-Nunito text-TextColor2-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Automated daily backups
                    </li>
                    <li className="flex gap-3 items-center font-Nunito text-TextColor2-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Role based access controls
                    </li>
                    <li className="flex gap-3 items-center font-Nunito text-TextColor2-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Faster internal reporting
                    </li>
                    <li className="flex gap-3 items-center font-Nunito text-TextColor2-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-PrimaryColor-0"
                      />
                      Ongoing support coverage
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="font-Rajdhani font-bold text-2xl md:text-[28px] text-PrimaryColor-0 mt-[44px]">
                A clear delivery path that turned complex IT needs into lasting
                business results
              </h2>
              <p className="font-Nunito text-TextColor2-0 mt-5">
                After launch, the client saw fewer outages, quicker reporting,
                and stronger visibility into every system. Stratumer remains
                involved with monitoring and improvements so the platform stays
                aligned with changing business priorities.
              </p>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <div className="rounded-lg overflow-hidden bg-BodyBg-0 mb-7">
                <div className="mx-9 pt-9 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Nunito text-TextColor2-0">Clients :</p>
                  <h5 className="font-Rajdhani text-xl font-semibold text-HeadingColor-0 pt-1">
                    MR. Dolon Khan
                  </h5>
                </div>
                <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Nunito text-TextColor2-0">Category :</p>
                  <h5 className="font-Rajdhani text-xl font-semibold text-HeadingColor-0 pt-1">
                    IT Solution
                  </h5>
                </div>
                <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Nunito text-TextColor2-0">
                    Starting Date :
                  </p>
                  <h5 className="font-Rajdhani text-xl font-semibold text-HeadingColor-0 pt-1">
                    02 January, 2024
                  </h5>
                </div>
                <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Nunito text-TextColor2-0">Ending Date :</p>
                  <h5 className="font-Rajdhani text-xl font-semibold text-HeadingColor-0 pt-1">
                    05 June, 2024
                  </h5>
                </div>
                <div className="mx-9 pt-3">
                  <p className="font-Nunito text-TextColor2-0">
                    Project Value :
                  </p>
                  <h5 className="font-Rajdhani text-xl font-semibold text-HeadingColor-0 pt-1 pb-8">
                    $5,000
                  </h5>
                </div>
              </div>
              <div className="rounded-lg px-9 overflow-hidden bg-[url('/images/sidber-contact.png')] bg-cover bg-no-repeat bg-center py-[50px]">
                <img src={wedgetIcon} draggable="false" />
                <h6 className="font-Nunito font-medium text-lg text-white mt-5 mb-2">
                  Call Us Anytime
                </h6>
                <Link to={"/"}>
                  <button className="font-Nunito font-semibold text-2xl text-white">
                    +1 (228) 303-1642
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="font-Nunito text-white flex gap-2 items-center mt-4 mb-[52px]">
                    <MdEmail className="text-xl text-PrimaryColor-0" />
                    hello@stratumer.co
                  </button>
                </Link>
                <Link to={"/contact"}>
                  <button className="font-Nunito text-white flex gap-2 items-center bg-PrimaryColor-0 w-full h-[58px] rounded-md justify-center z-10 relative before:absolute before:top-0 before:right-0 before:scale-0 before:-z-10 before:w-full before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:scale-100 hover:text-white">
                    Contact Us
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Project />
    </>
  );
};

export default ProjectDetails;
