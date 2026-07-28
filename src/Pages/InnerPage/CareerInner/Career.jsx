import { Link } from "react-router-dom";

const Career = () => {
  return (
    <section className="bg-BodyBg-0 py-28">
      <div className="Container">
        <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-3 items-center mb-[80px]">
          <div className="col-span-2">
            <h4 className="font-Rajdhani text-2xl font-semibold">
              Join the{" "}
              <span className="text-PrimaryColor-0">Stratumer</span> Team
            </h4>
          </div>
          <div>
            <p className="font-Nunito text-TextColor2-0">
              Explore open roles at Stratumer and grow with a team that values
              accuracy, reliability, and clear guidance for every teammate.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-0 lg:items-center border-y-2 py-16 relative before:absolute before:-top-[2px] before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 after:absolute after:-top-[2px] after:left-8 after:w-2 after:h-[2px] after:bg-white">
          <div className="col-span-4">
            <div className="flex flex-wrap items-center gap-3">
              <h6 className="px-[22px] py-1 rounded-full bg-PrimaryColor-0 font-Nunito font-light text-white text-sm">
                Part-Time / Remote
              </h6>
              <p className="font-Nunito text-TextColor2-0">United States</p>
            </div>
            <p className="font-Rajdhani font-semibold text-2xl mt-5">
              Remote Digital Content Moderator
            </p>
            <p className="font-Nunito text-PrimaryColor-0 mt-2 font-medium">
              $16.50 to $18.50 per hour
            </p>
          </div>
          <div className="col-span-4">
            <p className="font-Nunito text-TextColor2-0">
              Entry level remote role reviewing user content for quality and
              safety. Full paid onboarding provided. No previous technical
              background required.
            </p>
          </div>
          <div className="col-span-4 flex lg:justify-end">
            <Link to={"/career_apply"}>
              <button className="font-Nunito text-HeadingColor-0 px-[60px] py-[14px] border rounded-full transition-all duration-500 hover:border-PrimaryColor-0 hover:text-PrimaryColor-0">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-[80px] max-w-4xl">
          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
            About Stratumer
          </h5>
          <p className="font-Nunito text-TextColor2-0 mb-8">
            Stratumer is a premier IT consulting and data management services
            firm. We are currently seeking a detail oriented and reliable Remote
            Digital Content Moderator to join our platform support team. In this
            role, you will assist in managing data quality and content safety
            for our clients online platforms. This is an entry level position
            that requires no previous technical background; we provide
            straightforward, fully paid onboarding and system orientation.
          </p>

          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
            Key Responsibilities
          </h5>
          <ul className="font-Nunito text-TextColor2-0 list-disc pl-5 space-y-2 mb-8">
            <li>
              Review user submitted comments, text entries, and product reviews
              on our client platforms.
            </li>
            <li>
              Filter out automated spam, promotional links, duplicates, and
              inappropriate language based on a clear set of community
              guidelines.
            </li>
            <li>
              Ensure all user generated content aligns with established platform
              safety and quality standards.
            </li>
            <li>
              Flag or escalate complex customer service inquiries or technical
              issues to the appropriate internal IT support team.
            </li>
          </ul>

          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
            Qualifications
          </h5>
          <ul className="font-Nunito text-TextColor2-0 list-disc pl-5 space-y-2 mb-8">
            <li>
              Must have a reliable computer (laptop or desktop) with a stable,
              secure internet connection.
            </li>
            <li>
              Basic computer literacy, including comfort using a standard web
              browser and navigating online dashboards.
            </li>
            <li>
              Strong reading comprehension, attention to detail, and a focus on
              accuracy.
            </li>
            <li>
              Ability to work independently with minimal supervision while
              adhering to guidelines.
            </li>
          </ul>

          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
            Benefits and Work Environment
          </h5>
          <ul className="font-Nunito text-TextColor2-0 list-disc pl-5 space-y-2 mb-8">
            <li>100% Remote: Work from the comfort of your own home.</li>
            <li>
              Flexible Scheduling: Morning, afternoon, and evening blocks are
              available to easily fit around your existing lifestyle.
            </li>
            <li>
              No Hidden Fees: We provide all digital platform access completely
              free of charge. Applicants will never be asked to pay for
              training, onboarding materials, background checks, or software
              licenses.
            </li>
          </ul>

          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
            How to Apply
          </h5>
          <p className="font-Nunito text-TextColor2-0 mb-6">
            Please submit your resume or brief work history through our official
            Stratumer careers application page.
          </p>
          <Link to={"/career_apply"}>
            <button className="primary-btn">
              Apply for This Role
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Career;
