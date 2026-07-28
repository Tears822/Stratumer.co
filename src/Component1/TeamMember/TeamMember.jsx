import teamThumb from "/images/team-1.png";
import teamThumb2 from "/images/team-2.png";
import teamThumb3 from "/images/team-4.png";
import teamThumb4 from "/images/team-3.png";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: "Connie Diaz",
    teamDesc: "CEO & Founder",
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: "James E. Huey",
    teamDesc: "Co Founder",
  },
  {
    id: 3,
    teamThumb: teamThumb4,
    teamTitle: "Jone D. Alexon",
    teamDesc: "IT Expert",
  },
  {
    id: 4,
    teamThumb: teamThumb3,
    teamTitle: "June D. Vargas",
    teamDesc: "Hr. Maneger",
  },
];

const TeamMember = () => {
  return (
    <section className="bg-[url('/images/team-bg.jpg')] bg-no-repeat bg-cover bg-center py-28 relative">
      <div className="Container">
        <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 lg:items-center">
          <div>
            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
              Dedicated Team
            </h5>
            <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px]">
              Meet Our Dedicated Member <br />
              For Any Enquery
            </h1>
          </div>
          <div className="flex lg:justify-end">
            <Link to={"/team_inner"}>
              <button className="primary-btn">
                {`All Member`}
                <GoArrowRight size={"22"} />
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[50px] mt-[52px]">
          {teamData.map(
            ({
              id,
              teamThumb,
              teamTitle,
              teamDesc,
            }) => {
              return (
                <div key={id}>
                  <TeamCard
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    teamDesc={teamDesc}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
