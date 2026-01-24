export default function ResumeSection() {
  return (
    <section className="w-full px-4 py-12">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-black">Resume</h1>
          <p className="text-black/70">
            Download my resume or view it directly below.
          </p>

          {/* Download button */}
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-black/5"
            >
              Open PDF
            </a>
          </div>
        </div>

        {/* Content Card */}
        <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
          {/* Name + Contact */}
          <div className="border-b border-black/10 pb-5">
            <h2 className="text-2xl font-bold text-black">Stephen Kelly</h2>
            <p className="mt-2 text-sm text-black/70">
              Austin, TX • 813-850-9964 •{" "}
              <a
                className="underline underline-offset-4 hover:opacity-80"
                href="mailto:sbk13@my.fsu.edu"
              >
                sbk13@my.fsu.edu
              </a>
            </p>
          </div>

          {/* Objective */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-black">Objective</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/70">
              Break into the SaaS industry by combining quota-carrying sales
              experience with strong full-stack development skills in a Sales
              Engineer role.
            </p>
          </div>

          {/* Education */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-black">Education</h3>

            <div className="mt-3 space-y-4 text-sm text-black/70">
              <div>
                <p className="font-medium text-black">
                  Full-Stack MERN Development Certificate
                </p>
                <p>University of Texas at Austin / Trilogy • Grade: A+</p>
                <p className="text-black/60">March 2022 – June 2022</p>
              </div>

              <div>
                <p className="font-medium text-black">
                  Bachelor of Science — Economics
                </p>
                <p>Florida State University • GPA: 3.0</p>
                <p className="text-black/60">August 2013 – June 2017</p>
              </div>

              <div>
                <p className="font-medium text-black">Tampa Prep</p>
                <p>GPA: 3.4</p>
                <p className="text-black/60">August 2006 – June 2010</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-black">Projects</h3>

            <div className="mt-4 space-y-5 text-sm text-black/70">
              <div>
                <p className="font-medium text-black">
                  Chicobot{" "}
                  <span className="text-black/50">
                    | JavaScript, React, GraphQL, MongoDB, Node, JWT
                  </span>
                </p>
                <p className="mt-1 leading-relaxed">
                  A volunteering hub for users to request help and help others,
                  earning karma for helping and spending karma for receiving
                  help. Designed to foster community and bring people together.
                </p>
                <p className="mt-2 flex flex-wrap gap-3">
                  <a
                    href="https://bit.ly/3xPKTAn"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://bit.ly/3HnBZxa"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    GitHub Repo
                  </a>
                </p>
              </div>

              <div>
                <p className="font-medium text-black">
                  ByteChess{" "}
                  <span className="text-black/50">
                    | JavaScript, Handlebars, Express, Sequelize, Node
                  </span>
                </p>
                <p className="mt-1 leading-relaxed">
                  A budgeting app that lets users set aside direct-deposit
                  income for recurring bills and expenses, and manage
                  non-recurring expenses like entertainment. Fully customizable
                  and updated dynamically.
                </p>
                <p className="mt-2 flex flex-wrap gap-3">
                  <a
                    href="https://bit.ly/396ujmh"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://bit.ly/3zfcBHZ"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    GitHub Repo
                  </a>
                </p>
              </div>

              <div>
                <p className="font-medium text-black">
                  Nido{" "}
                  <span className="text-black/50">
                    | JavaScript, Dynamic HTML, 3rd-Party APIs
                  </span>
                </p>
                <p className="mt-2 flex flex-wrap gap-3">
                  <a
                    href="https://bit.ly/3l8mH4V"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://bit.ly/3M5v656"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    GitHub Repo
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-black">
              Professional Experience
            </h3>

            <div className="mt-4 space-y-6 text-sm text-black/70">
              <div>
                <p className="font-medium text-black">
                  Elevate Sports Ventures – Inter Miami CF Project
                </p>
                <p className="text-black/60">
                  Account Executive, Membership Services • Jan 2020 – Oct 2020
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    First promotion from Inside Sales to Account Executive in my
                    class specializing in B2B membership sales.
                  </li>
                  <li>
                    #1 Sales Rep in 2020; exceeded Q1 goal by 55% and generated
                    $466,000 in revenue.
                  </li>
                  <li>
                    Sold 10 premium boxes and 268 club seats by sourcing and
                    closing 231 new accounts.
                  </li>
                  <li>
                    Built pipeline through networking, marketing tactics, and
                    prospecting via ZoomInfo + LinkedIn.
                  </li>
                  <li>Managed pipeline + forecasting in Salesforce.</li>
                </ul>

                <p className="mt-4 text-black/60">
                  Inside Sales Representative • Jun 2019 – Jan 2020
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    #2 Sales Rep in 2019; generated $1.67M in revenue across 535
                    new accounts.
                  </li>
                  <li>
                    Scheduled and conducted 100+ in-person sales appointments
                    (English + Spanish).
                  </li>
                  <li>Performed 100+ daily outbound outreaches.</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-black">Tampa Bay Rowdies</p>
                <p className="text-black/60">
                  Ticket Sales &amp; Services Intern • Feb 2019 – May 2019
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Lead event coordinator for sales team activities in West
                    Florida.
                  </li>
                  <li>
                    Delivered exceptional customer service via phone and face to
                    face.
                  </li>
                  <li>
                    Built local business relationships to improve sales team
                    performance.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-black">PFM Group</p>
                <p className="text-black/60">
                  Summer Intern • May 2017 – Jul 2017
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Supported municipal finance executives with research and
                    presentations.
                  </li>
                  <li>
                    Attended meetings at Tampa International Airport focused on
                    profitability + master plan strategy.
                  </li>
                  <li>
                    Helped forecast future years using previous revenue data.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-black">Northwestern Mutual</p>
                <p className="text-black/60">
                  Financial Representative Intern • May 2015 – Aug 2015
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Completed a 10-week sales bootcamp covering the full sales
                    cycle.
                  </li>
                  <li>
                    Built and managed a pipeline using forecasting + reporting.
                  </li>
                  <li>Passed the 2-15 Health &amp; Life agent license exam.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-black">Skills</h3>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-black/70">
              <li>2 years experience with ZoomInfo, CRM, Salesforce</li>
              <li>5+ years with Excel, Word, PowerPoint, LinkedIn</li>
              <li>Visited, studied, or volunteered in 45 countries</li>
              <li>Advanced Spanish; lived in Madrid for 3 years</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
