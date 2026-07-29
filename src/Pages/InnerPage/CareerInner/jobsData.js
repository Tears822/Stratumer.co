export const jobs = [
  {
    id: "content-moderator",
    title: "Remote Digital Content Moderator",
    type: "Part-Time / Remote",
    location: "United States (excluding California)",
    pay: "$18.00 to $22.00 per hour",
    summary:
      "Entry level remote role reviewing user content for quality and safety. Full paid onboarding provided. No previous technical background required.",
    about:
      "Stratumer is a premier IT consulting and data management services firm. We are currently seeking a detail oriented and reliable Remote Digital Content Moderator to join our platform support team. In this role, you will assist in managing data quality and content safety for our clients online platforms. This is an entry level position that requires no previous technical background; we provide straightforward, fully paid onboarding and system orientation. This role is open to applicants located in the United States, excluding California.",
    responsibilities: [
      "Review user submitted comments, text entries, and product reviews on our client platforms.",
      "Filter out automated spam, promotional links, duplicates, and inappropriate language based on a clear set of community guidelines.",
      "Ensure all user generated content aligns with established platform safety and quality standards.",
      "Flag or escalate complex customer service inquiries or technical issues to the appropriate internal IT support team.",
    ],
    qualifications: [
      "Must have a reliable computer (laptop or desktop) with a stable, secure internet connection.",
      "Basic computer literacy, including comfort using a standard web browser and navigating online dashboards.",
      "Strong reading comprehension, attention to detail, and a focus on accuracy.",
      "Ability to work independently with minimal supervision while adhering to guidelines.",
      "Must be located in the United States (California residents are not eligible for this role).",
    ],
    benefits: [
      "100% Remote: Work from the comfort of your own home.",
      "Flexible Scheduling: Morning, afternoon, and evening blocks are available to easily fit around your existing lifestyle.",
      "No Hidden Fees: We provide all digital platform access completely free of charge. Applicants will never be asked to pay for training, onboarding materials, background checks, or software licenses.",
    ],
  },
  {
    id: "software-engineer",
    title: "Senior Software Engineer",
    type: "Part-Time / Full-Time / Remote",
    location: "United States (excluding California)",
    pay: "$55.00 to $75.00 per hour",
    summary:
      "Experienced software engineer role for seasoned professionals. Ideal for career-experienced talent, including applicants 50 and older, who want flexible remote work building reliable software systems.",
    about:
      "Stratumer is a premier IT consulting and data management services firm. We welcome experienced professionals from all walks of life, including applicants age 50 and older, who bring proven engineering judgment, communication skills, and a steady approach to delivering quality software. As a Senior Software Engineer, you will design, build, and maintain applications and integrations that support our clients’ IT and data platforms. We value maturity, mentorship, and real-world problem solving as much as current technical skills.",
    responsibilities: [
      "Design, develop, test, and maintain web applications, APIs, and internal tools used by Stratumer and our clients.",
      "Collaborate with product, support, and client stakeholders to clarify requirements and deliver practical solutions.",
      "Review code, improve system reliability, and help document processes so teams can operate with confidence.",
      "Troubleshoot production issues and recommend durable improvements rather than short-term patches.",
      "Optionally mentor teammates and share best practices drawn from your professional experience.",
    ],
    qualifications: [
      "Several years of professional software development experience (experience is valued over degree requirements).",
      "Comfortable with at least one modern stack such as JavaScript/TypeScript, React, Node.js, Python, Java, or similar.",
      "Familiarity with APIs, databases (SQL or PostgreSQL preferred), Git, and cloud or Linux-based environments.",
      "Strong written and verbal communication skills, with the ability to work independently in a remote setting.",
      "Applicants age 50+ and career changers with transferable engineering experience are encouraged to apply.",
      "Must be located in the United States (California residents are not eligible for this role).",
      "Reliable computer and stable internet connection suitable for remote engineering work.",
    ],
    benefits: [
      "100% Remote work from home across the United States (excluding California).",
      "Flexible part-time or full-time scheduling designed to fit around established lifestyles and commitments.",
      "Age-inclusive hiring: we actively welcome experienced workers 50 and older.",
      "No hidden fees for training, tools, background checks, or software access.",
      "Opportunity to apply decades of professional experience on meaningful IT consulting projects.",
    ],
  },
];

export function getJobById(id) {
  return jobs.find((job) => job.id === id) || jobs[0];
}
