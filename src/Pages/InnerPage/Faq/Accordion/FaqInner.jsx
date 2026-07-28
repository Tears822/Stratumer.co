import FaqAccordion from "./FaqAccordion";
import faqIcon from "/images/faqs-icon-s.png";
import faqIcon2 from "/images/faqs-icon1.png";
import faqImg from "/images/faqs-1.jpg";
import faqImg2 from "/images/faqs-2.jpg";
import BreadCrumb from "../../../../Shared/BreadCrumb/BreadCrumb";
import { FaArrowRightLong } from "react-icons/fa6";
import Newsletter from "../../../../Component2/Newsletter/Newsletter";
import Brand from "../Brand";

const FaqInner = () => {
  //  All Faqs and  answers.
  const faqs = [
    {
      faqIcon2: faqIcon2,
      title: "How does Stratumer start a new IT project?",
      text: "We begin with a discovery workshop to map your goals, systems, and risks. From there we deliver a scoped plan with timelines, responsibilities, and clear success metrics before any build work begins.",
      active: true,
    },
    {
      faqIcon2: faqIcon2,
      title: "What industries does Stratumer support?",
      text: "We partner with growing businesses across professional services, healthcare, retail, manufacturing, and finance. Our playbooks adapt to each sector while keeping security and uptime as nonnegotiable standards.",
      active: false,
    },
    {
      faqIcon2: faqIcon2,
      title: "How quickly can you respond to urgent issues?",
      text: "Priority incidents are triaged as soon as they are reported. Critical outages receive immediate attention from on call engineers, while lower severity requests follow agreed service windows published in your support plan.",
      active: false,
    },
    {
      faqIcon2: faqIcon2,
      title: "Can you modernize our existing business systems?",
      text: "Yes. We assess legacy applications, data flows, and integrations, then recommend phased upgrades that reduce risk. Migrations are staged carefully so your teams keep working while platforms improve underneath.",
      active: false,
    },
    {
      faqIcon2: faqIcon2,
      title: "Do you offer custom IT services?",
      text: "Absolutely. Beyond managed support, we design custom networks, cloud architectures, automation workflows, and security programs tailored to how your organization operates and scales.",
      active: false,
    },
  ];

  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"FAQ"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"FAQ"}
      />
      <section className="relative overflow-hidden py-28 bg-BodyBg-0">
        <div className="Container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            <div className="relative">
              <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                IT Support For Business
              </h5>
              <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-4">
                Ensuring Your Success Trusted <br />
                IT Services Source
              </h1>
              <p className="font-Nunito text-TextColor2-0 pt-1 pb-10">
                Business tailored it design, management & support services needs
                to be business agency elit, sed do eiusmod tempor proved.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center gap-3 mb-10">
                <div>
                  <img src={faqImg} draggable="false" />
                </div>
                <div>
                  <img src={faqImg2} draggable="false" />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img src={faqIcon} draggable="false" />
                </div>
                <p className="font-Nunito text-TextColor2-0 flex-1">
                  Business tailored it design, management & support services
                  busines agency elit sed do eiusmod tempor proved business task
                  state of the art infrastructures for you.
                </p>
              </div>
            </div>
            <div className="w-full mx-auto">
              <div>
                {faqs.map((faq, index) => (
                  <FaqAccordion
                    key={index}
                    faqIcon={faq.faqIcon2}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </FaqAccordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Brand />
    </>
  );
};

export default FaqInner;
