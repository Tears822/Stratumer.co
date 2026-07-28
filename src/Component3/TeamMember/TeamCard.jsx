/* eslint-disable react/prop-types */
const TeamCard = ({ teamThumb, teamTitle, teamDesc }) => {
  return (
    <div className="group relative">
      <div className="relative z-10 overflow-hidden">
        <img
          src={teamThumb}
          draggable="false"
          className="w-full -z-10 rounded-md"
        />
        <div className="text-center rounded-t-md pt-[22px] rounded-b-md bg-PrimaryColor-0 w-10/12 transition-all duration-500 pb-5 absolute z-10 -bottom-[76px] opacity-0 left-1/2 -translate-x-1/2 group-hover:bottom-0 group-hover:opacity-100">
          <h5 className="font-Rajdhani font-bold text-[22px] text-white">
            {teamTitle}
          </h5>
          <p className="font-Nunito text-white">{teamDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
