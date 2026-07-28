/* eslint-disable react/prop-types */
const TeamCard = ({ teamThumb, teamTitle, teamDesc }) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
        <img src={teamThumb} className="w-full xl:w-[inherit] m-auto" />
      </div>
      <div className="bg-white relative transition-all duration-500 rounded-md text-center pt-[22px] pb-10 rounded-b-md before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:bg-[url('/images/team-shape.png')] before:bg-no-repeat before:bg-cover before:-z-10 before:rounded-md group-hover:bg-PrimaryColor-0">
        <h5 className="font-Rajdhani font-semibold text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white pb-[2px]">
          {teamTitle}
        </h5>
        <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white">
          {teamDesc}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
