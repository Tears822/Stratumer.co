/* eslint-disable react/prop-types */
const TeamCard = ({ teamThumb, teamTitle, teamDesc }) => {
  return (
    <div className="group rounded-md relative z-10 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 after:bg-gradient-to-t after:from-PrimaryColor-0 after:to-transparent hover:after:h-4/6">
      <img src={teamThumb} draggable="false" className="w-full" />
      <div className="text-center absolute z-20 bottom-5 left-1/2 -translate-x-1/2 w-full">
        <h5 className="font-Rajdhani font-semibold text-[22px] text-white">
          {teamTitle}
        </h5>
        <p className="font-Nunito text-TextColor-0">{teamDesc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
