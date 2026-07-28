/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";
import TestimonialNavigation from "./TestimonialNavigation";

const testiData = [
  {
    id: 1,
    testiDesc: `Stratumer helped us migrate critical apps with almost no disruption. The project plan was realistic, the engineers were sharp, and post launch support has been outstanding.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Elena Brooks",
    testiDesignation: "Product Manager",
  },
  {
    id: 2,
    testiDesc: `Our help desk used to drown in routine issues. After Stratumer took over managed services, users get faster answers and our internal team can focus on strategic work again.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "James Whitaker",
    testiDesignation: "Systems Administrator",
  },
  {
    id: 3,
    testiDesc: `They redesigned our network for growth instead of patching old problems. Performance is consistent across offices, and expanding to new locations no longer feels risky.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Aisha Rahman",
    testiDesignation: "Network Engineer",
  },
  {
    id: 4,
    testiDesc: `Stratumer turned a messy stack of tools into a clean, supportable platform. Reporting is clearer, vendors are easier to manage, and we finally have a single point of accountability.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Noah Patel",
    testiDesignation: "Business Owner",
  },
  {
    id: 5,
    testiDesc: `Compliance reviews used to scramble our calendar. Stratumer built policies, logging, and access controls that made our last audit straightforward and far less stressful.`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Claire Nguyen",
    testiDesignation: "Compliance Lead",
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1500,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
    },
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="testimonial py-28 bg-[url(/images/testi-bg.jpg)] bg-no-repeat bg-cover bg-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-[19px] font-semibold text-PrimaryColor-0 inline-block relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
            SERVICE WE PROVIDE
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-SecondaryColor-0 mt-3 mb-4">
            Customer’s Awesome Feedback <br />
            About Our <span className="text-PrimaryColor-0">Services</span>
          </h1>
        </div>
        <div className="mt-[46px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiDesc,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pt-[80px] md:pt-[150px]">
                        <TestimonialCard
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiDesc={testiDesc}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
            <TestimonialNavigation />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
