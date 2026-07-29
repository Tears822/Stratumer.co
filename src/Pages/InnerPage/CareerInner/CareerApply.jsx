import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { apiUrl } from "../../../config/api";

const CareerApply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      formData.set(
        "jobTitle",
        "Remote Digital Content Moderator"
      );

      const response = await fetch(apiUrl("/api/applications"), {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Job Application"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Apply"}
      />
      <section className="bg-BodyBg-0 py-28">
        <div className="Container">
          <div className="max-w-3xl mx-auto bg-white rounded-md shadow-sm p-6 sm:p-10">
            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
              Stratumer Careers
            </h5>
            <h1 className="font-Rajdhani font-bold text-2xl sm:text-3xl text-HeadingColor-0 mt-2 mb-3">
              Remote Digital Content Moderator
            </h1>
            <p className="font-Nunito text-TextColor2-0 mb-2">
              Part-Time / Remote (United States)
            </p>
            <p className="font-Nunito text-PrimaryColor-0 font-medium mb-8">
              $16.50 to $18.50 per hour
            </p>

            {submitted ? (
              <div className="border border-PrimaryColor-0 rounded-md p-6 bg-[#f3f8ff]">
                <h4 className="font-Rajdhani font-semibold text-2xl text-HeadingColor-0 mb-3">
                  Application Received
                </h4>
                <p className="font-Nunito text-TextColor2-0 mb-6">
                  Thank you for applying to Stratumer. Our hiring team will
                  review your information and contact you if your profile matches
                  this role.
                </p>
                <Link to={"/career"}>
                  <button className="primary-btn">Back to Careers</button>
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
                encType="multipart/form-data"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="font-Nunito text-HeadingColor-0 mb-2 block"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Your full name"
                    required
                    className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-Nunito text-HeadingColor-0 mb-2 block"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    required
                    className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="font-Nunito text-HeadingColor-0 mb-2 block"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Your phone number"
                    required
                    className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="font-Nunito text-HeadingColor-0 mb-2 block"
                  >
                    Resume or Work History*
                  </label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    accept=".pdf,.doc,.docx,.txt"
                    required
                    className="border border-BorderColor2-0 rounded py-3 px-6 outline-none w-full bg-white font-Nunito text-TextColor2-0"
                  />
                  <p className="font-Nunito text-sm text-TextColor2-0 mt-2">
                    Upload PDF, DOC, DOCX, or TXT (max 5MB).
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-Nunito text-HeadingColor-0 mb-2 block"
                  >
                    Brief Note (optional)
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Share a short note about your availability or experience"
                    className="border border-BorderColor2-0 rounded py-2 px-6 outline-none resize-none h-[120px] w-full"
                  ></textarea>
                </div>

                {error ? (
                  <p className="font-Nunito text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3">
                    {error}
                  </p>
                ) : null}

                <div className="flex flex-wrap gap-4 items-center mt-2">
                  <button
                    type="submit"
                    className="primary-btn disabled:opacity-60"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                  <Link
                    to={"/career"}
                    className="font-Nunito text-HeadingColor-0 hover:text-PrimaryColor-0 transition-all duration-300"
                  >
                    Back to job details
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerApply;
