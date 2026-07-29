import { FaPhoneAlt } from "react-icons/fa";
import teamDetailsImg from "/images/team-details.jpg"
import { MdOutlineMail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import ProgressBar from "react-animated-progress-bar";

const TeamDetailsMain = () => {
  return (
    <section className="bg-[url(/images/team-details-bg.jpg)] bg-no-repeat bg-center bg-cover py-28">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-20 2xl:gap-[140px]">
          <div>
            <img src={teamDetailsImg} draggable="false" />
          </div>
          <div>
            <h2 className="font-Rajdhani font-bold text-4xl text-HeadingColor-0 mb-1">
              Dillur Rahman
            </h2>
            <p className="font-Nunito text-TextColor2-0">
              Dream Land Founder & CEO
            </p>
            <p className="font-Nunito text-TextColor2-0 mt-9 mb-10">
              Dillur leads Stratumer with a clear vision for reliable IT
              services that help growing businesses stay secure, connected, and
              ready to scale. He guides product strategy, client partnerships,
              and delivery excellence across our full technology stack.
            </p>
            <div className="bg-BodyBg-0 py-10 px-5 2xl:px-10 rounded-md grid grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-2 sm:items-center">
              <div className="flex lg:flex-col xl:flex-row items-center lg:items-start xl:items-center gap-5">
                <div className="size-[64px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0 text-3xl transition-all duration-500 group-hover:text-white group-hover:border-white">
                  <FaPhoneAlt />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-2">
                    Call Us Anytime
                  </h5>
                  <p className="font-Rajdhani text-PrimaryColor-0 font-semibold md:text-2xl lg:text-xl 2xl:text-2xl transition-all duration-500 group-hover:text-white">
                    +1 (228) 303-1642
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-col xl:flex-row items-center lg:items-start xl:items-center gap-5">
                <div className="size-[64px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0 text-3xl transition-all duration-500 group-hover:text-white group-hover:border-white">
                  <MdOutlineMail />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-2">
                    Send E-Mail
                  </h5>
                  <p className="font-Rajdhani text-PrimaryColor-0 font-semibold md:text-2xl lg:text-xl 2xl:text-2x transition-all duration-500 group-hover:text-white">
                    hello@stratumer.co
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 my-[50px]">
              <div className="size-[56px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0 text-3xl transition-all duration-500 group-hover:text-white group-hover:border-white">
                <TfiLocationPin />
              </div>
              <div className="flex-1">
                <h5 className="font-Rajdhani font-semibold text-lg text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-1">
                  Location
                </h5>
                <p className="font-Nunito text-PrimaryColor-0 text-lg transition-all duration-500 group-hover:text-white">
                  21 King Street 5th Floor Hamilton, Ontario Canada
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-Rajdhani font-bold text-4xl text-HeadingColor-0 mb-12 mt-28">
          My Skills
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px]">
          <div>
            <div>
              <h6 className="font-Rajdhani font-medium text-lg text-TextColor2-0 pb-2">
                Design Analytics
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="7px"
                fontColor="#001818"
                fontSize="17px"
                leading="10px"
                margin="0px"
                rectBorderRadius="0"
                fontWeight="600"
                percentage="95"
                defColor={{
                  excellent: "#0b58d8",
                  good: "#79b900",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#dcdcdc"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
            <div className="mt-8">
              <h6 className="font-Rajdhani font-medium text-lg text-TextColor2-0 pb-2">
                Digital Marketing
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="7px"
                fontColor="#001818"
                fontSize="17px"
                leading="10px"
                margin="0px"
                rectBorderRadius="0"
                fontWeight="600"
                percentage="85"
                defColor={{
                  excellent: "#0b58d8",
                  good: "#79b900",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#dcdcdc"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
          </div>
          <div>
            <div>
              <h6 className="font-Rajdhani font-medium text-lg text-TextColor2-0 pb-2">
                UI / UX Design & Development
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="7px"
                fontColor="#001818"
                fontSize="17px"
                leading="10px"
                margin="0px"
                rectBorderRadius="0"
                fontWeight="600"
                percentage="75"
                defColor={{
                  excellent: "#0b58d8",
                  good: "#79b900",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#dcdcdc"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
            <div className="mt-8">
              <h6 className="font-Rajdhani font-medium text-lg text-TextColor2-0 pb-2">
                Content Strategy
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="7px"
                fontColor="#001818"
                fontSize="17px"
                leading="10px"
                margin="0px"
                rectBorderRadius="0"
                fontWeight="600"
                percentage="90"
                defColor={{
                  excellent: "#0b58d8",
                  good: "#79b900",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#dcdcdc"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsMain;
