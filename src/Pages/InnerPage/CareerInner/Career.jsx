import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { jobs } from "./jobsData";

const Career = () => {
  const [selectedId, setSelectedId] = useState(jobs[0].id);

  const selectedJob = useMemo(
    () => jobs.find((job) => job.id === selectedId) || jobs[0],
    [selectedId]
  );

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

        <div className="space-y-0">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-0 lg:items-center border-y-2 py-16 relative ${
                index > 0 ? "border-t-0" : ""
              } before:absolute before:-top-[2px] before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 after:absolute after:-top-[2px] after:left-8 after:w-2 after:h-[2px] after:bg-white`}
            >
              <div className="col-span-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h6 className="px-[22px] py-1 rounded-full bg-PrimaryColor-0 font-Nunito font-light text-white text-sm">
                    {job.type}
                  </h6>
                  <p className="font-Nunito text-TextColor2-0">
                    {job.location}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedId(job.id)}
                  className="text-left"
                >
                  <p
                    className={`font-Rajdhani font-semibold text-2xl mt-5 transition-colors ${
                      selectedId === job.id
                        ? "text-PrimaryColor-0"
                        : "text-HeadingColor-0 hover:text-PrimaryColor-0"
                    }`}
                  >
                    {job.title}
                  </p>
                </button>
                <p className="font-Nunito text-PrimaryColor-0 mt-2 font-medium">
                  {job.pay}
                </p>
              </div>
              <div className="col-span-4">
                <p className="font-Nunito text-TextColor2-0">{job.summary}</p>
              </div>
              <div className="col-span-4 flex lg:justify-end gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setSelectedId(job.id)}
                  className="font-Nunito text-HeadingColor-0 px-8 py-[14px] border rounded-full transition-all duration-500 hover:border-PrimaryColor-0 hover:text-PrimaryColor-0"
                >
                  View Details
                </button>
                <Link to={`/career_apply?role=${job.id}`}>
                  <button className="font-Nunito text-white bg-PrimaryColor-0 px-8 py-[14px] border border-PrimaryColor-0 rounded-full transition-all duration-500 hover:bg-transparent hover:text-PrimaryColor-0">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[80px] max-w-4xl">
          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
            About Stratumer
          </h5>
          <p className="font-Nunito text-TextColor2-0 mb-8">
            {selectedJob.about}
          </p>

          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
            Key Responsibilities
          </h5>
          <ul className="font-Nunito text-TextColor2-0 list-disc pl-5 space-y-2 mb-8">
            {selectedJob.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
            Qualifications
          </h5>
          <ul className="font-Nunito text-TextColor2-0 list-disc pl-5 space-y-2 mb-8">
            {selectedJob.qualifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
            Benefits and Work Environment
          </h5>
          <ul className="font-Nunito text-TextColor2-0 list-disc pl-5 space-y-2 mb-8">
            {selectedJob.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mb-4">
            How to Apply
          </h5>
          <p className="font-Nunito text-TextColor2-0 mb-6">
            Please submit your resume or brief work history through our official
            Stratumer careers application page, or email your application to{" "}
            <a
              href="mailto:john@stratumer.co"
              className="text-PrimaryColor-0 hover:underline"
            >
              john@stratumer.co
            </a>
            .
          </p>
          <Link to={`/career_apply?role=${selectedJob.id}`}>
            <button className="primary-btn">Apply for This Role</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Career;
