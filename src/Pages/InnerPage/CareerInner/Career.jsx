import { Link } from "react-router-dom";
import { useState } from "react";
import { jobs } from "./jobsData";

const Career = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleDetails = (jobId) => {
    setExpandedId((current) => (current === jobId ? null : jobId));
  };

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
              experience, accuracy, reliability, and clear guidance for every
              teammate — including professionals age 50 and older.
            </p>
          </div>
        </div>

        <div>
          {jobs.map((job, index) => {
            const isExpanded = expandedId === job.id;

            return (
              <div
                key={job.id}
                className={`border-y-2 relative ${
                  index > 0 ? "border-t-0" : ""
                } before:absolute before:-top-[2px] before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 after:absolute after:-top-[2px] after:left-8 after:w-2 after:h-[2px] after:bg-white`}
              >
                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-0 lg:items-center py-16">
                  <div className="col-span-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h6 className="px-[22px] py-1 rounded-full bg-PrimaryColor-0 font-Nunito font-light text-white text-sm">
                        {job.type}
                      </h6>
                      <p className="font-Nunito text-TextColor2-0">
                        {job.location}
                      </p>
                    </div>
                    <p
                      className={`font-Rajdhani font-semibold text-2xl mt-5 ${
                        isExpanded
                          ? "text-PrimaryColor-0"
                          : "text-HeadingColor-0"
                      }`}
                    >
                      {job.title}
                    </p>
                    <p className="font-Nunito text-PrimaryColor-0 mt-2 font-medium">
                      {job.pay}
                    </p>
                  </div>
                  <div className="col-span-4">
                    <p className="font-Nunito text-TextColor2-0">
                      {job.summary}
                    </p>
                  </div>
                  <div className="col-span-4 flex lg:justify-end gap-3 flex-wrap">
                    <button
                      type="button"
                      onClick={() => toggleDetails(job.id)}
                      aria-expanded={isExpanded}
                      className={`font-Nunito px-8 py-[14px] border rounded-full transition-all duration-500 ${
                        isExpanded
                          ? "border-PrimaryColor-0 text-PrimaryColor-0"
                          : "text-HeadingColor-0 hover:border-PrimaryColor-0 hover:text-PrimaryColor-0"
                      }`}
                    >
                      {isExpanded ? "Hide Details" : "View Details"}
                    </button>
                    <Link to={`/career_apply?role=${job.id}`}>
                      <button className="font-Nunito text-white bg-PrimaryColor-0 px-8 py-[14px] border border-PrimaryColor-0 rounded-full transition-all duration-500 hover:bg-transparent hover:text-PrimaryColor-0">
                        Apply Now
                      </button>
                    </Link>
                  </div>
                </div>

                {isExpanded ? (
                  <div className="pb-16 max-w-4xl animate-[fadeIn_0.35s_ease]">
                    <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
                      About Stratumer
                    </h5>
                    <p className="font-Nunito text-TextColor2-0 mb-8">
                      {job.about}
                    </p>

                    <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
                      Key Responsibilities
                    </h5>
                    <ul className="font-Nunito text-TextColor2-0 list-disc pl-5 space-y-2 mb-8">
                      {job.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
                      Qualifications
                    </h5>
                    <ul className="font-Nunito text-TextColor2-0 list-disc pl-5 space-y-2 mb-8">
                      {job.qualifications.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
                      Benefits and Work Environment
                    </h5>
                    <ul className="font-Nunito text-TextColor2-0 list-disc pl-5 space-y-2 mb-8">
                      {job.benefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
                      How to Apply
                    </h5>
                    <p className="font-Nunito text-TextColor2-0 mb-6">
                      Please submit your resume or brief work history through
                      our official Stratumer careers application page, or email
                      your application to{" "}
                      <a
                        href="mailto:john@stratumer.co"
                        className="text-PrimaryColor-0 hover:underline"
                      >
                        john@stratumer.co
                      </a>
                      .
                    </p>
                    <Link to={`/career_apply?role=${job.id}`}>
                      <button className="primary-btn">
                        Apply for This Role
                      </button>
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
