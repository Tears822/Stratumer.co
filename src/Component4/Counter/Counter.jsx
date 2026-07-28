import CounterCard from "./CounterCard";

const counterData = [
  {
    id: 1,
    counterNumber: 22,
    counterTitle: "Years Experience",
    counterDesc: "Decades guiding businesses through reliable IT strategy and delivery.",
    counterSuffex: "+",
  },
  {
    id: 2,
    counterNumber: 86,
    counterTitle: "Client Satisfaction",
    counterDesc: "Clients stay with Stratumer for responsive support and measurable results.",
    counterSuffex: "%",
  },
  {
    id: 3,
    counterNumber: 25,
    counterTitle: "Awards Wining",
    counterDesc: "Industry recognition for excellence in consulting, security, and service.",
    counterSuffex: "+",
  },
];

const Counter = () => {
  return (
    <section className="pt-28 bg-SecondaryColor-0">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-3 items-center justify-center">
          {counterData.map(
            ({
              id,
              counterNumber,
              counterTitle,
              counterDesc,
              counterSuffex,
            }) => {
              return (
                <div key={id}>
                  <CounterCard
                    counterNumber={counterNumber}
                    counterTitle={counterTitle}
                    counterDesc={counterDesc}
                    counterSuffex={counterSuffex}
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

export default Counter;
