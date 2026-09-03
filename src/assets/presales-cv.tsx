"use client";

export default function CVTwilioPresales() {
  const handleExportPDF = () => {
    window.print();
  };

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body { margin: 0; }
          .no-print { display: none !important; }

          @page {
            size: A4;
            margin: 0;
          }

          html {
            zoom: 0.8;
          }

          .cv-wrapper {
            padding: 0 !important;
            background: white !important;
            min-height: unset !important;
          }

          .cv-card {
            box-shadow: none !important;
            max-width: 100% !important;
            width: 100%;
          }
        }
      `}</style>

      <div className="cv-wrapper min-h-screen bg-gray-900 py-14 px-8">
        <div className="cv-card max-w-5xl mx-auto shadow-2xl flex bg-white">
          {/* LEFT PANEL — ~1/3 width, muted grey background */}
          <aside className="w-1/3 bg-gray-100 p-10 flex flex-col gap-8">
            {/* Name */}
            <div>
              <h1 className="text-2xl font-bold text-teal-600 leading-tight">
                Shaun Halliday
              </h1>
              <p className="text-sm text-teal-700 font-medium mt-1">
                Solutions Engineer
              </p>
              <p className="text-sm text-teal-800">
                Technical Project Manager | Frontend Engineer
              </p>
            </div>

            {/* Skills */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3">
                Skills
              </h2>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Twilio Flex | Studio | Paste</li>
                <li>REST API Design & Integration</li>
                <li>AWS | Azure | Snowflake</li>
                <li>WhatsApp Business API</li>
                <li>React | Next.js | TypeScript</li>
                <li>HTML | CSS | Python</li>
                <li>Agile | Scrum</li>
                <li>GitHub | GitHub Actions</li>
                <li>Storybook | Design Systems</li>
                <li>WCAG 2.1 | 2.2 Accessibility</li>
              </ul>
            </section>

            {/* Areas of Expertise */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3">
                Areas of Expertise
              </h2>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Client-Facing Technical Demos</li>
                <li>Commercial Scoping, Pricing & SOWs</li>
                <li>Stakeholder & Client Management</li>
                <li>Requirements Gathering & Analysis</li>
                <li>Solutions Engineering</li>
                <li>Cross-functional Team Coordination</li>
                <li>Cloud Application Architecture</li>
                <li>End-User Training & Enablement</li>
              </ul>
            </section>

            {/* Activities */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3">
                Activities
              </h2>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <span className="font-medium text-gray-700">
                    UX/Dev Volunteer
                  </span>
                  <br />
                  LGBTQ+ Safety App — pre-funding startup
                </li>
                <li>
                  <span className="font-medium text-gray-700">
                    Archery Club Web Maintainer
                  </span>
                  <br />
                  Ongoing pro bono site maintenance
                </li>
                <li>
                  <span className="font-medium text-gray-700">
                    Passion Projects
                  </span>
                  <br />
                  Collaborative dev projects with peers
                </li>
              </ul>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3">
                Education
              </h2>
              <div className="text-sm text-gray-600 space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">
                    BSc Web Design & Development
                  </p>
                  <p>Edge Hill University</p>
                  <p className="text-gray-400">
                    2018 - 2021 · First Class Honours
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">
                    Diploma of Higher Education
                  </p>
                  <p>The Open University</p>
                  <p className="text-gray-400">2015 - 2018 · Computing & IT</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">6 GCSEs (A - C)</p>
                  <p>Albany High School</p>
                  <p className="text-gray-400">1992 - 1997</p>
                </div>
              </div>
            </section>
          </aside>

          {/* RIGHT PANEL — ~2/3 width */}
          <main className="w-2/3 p-10 flex flex-col gap-8">
            {/* Contact row */}
            <div className="flex flex-wrap items-center gap-x-4 text-sm text-gray-500">
              <span>Coates, Cambridgeshire</span>
              <span className="text-gray-300">|</span>
              <span>shaunuxuidev@gmail.com</span>
              <span className="text-gray-300">|</span>
              <a
                href="https://www.linkedin.com/in/shaun-halliday-5001a6b2"
                className="underline text-teal-600 hover:text-teal-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            {/* <div
              className="flex flex-wrap items-center gap-x-8 text-sm text-gray-500"
              style={{ marginTop: "-1rem" }}
            >
              <a
                href="https://www.linkedin.com/in/shaun-halliday-5001a6b2"
                className="underline text-teal-600 hover:text-teal-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a> */}
            {/* <span className="text-gray-300">|</span> */}
            {/* <a
                href="http://www.shaunhalliday.co.uk/"
                className="underline text-teal-600 hover:text-teal-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="http://github.com/smolCat1512"
                className="underline text-teal-600 hover:text-teal-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a> */}
            {/* </div> */}

            {/* Profile Summary */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3">
                Profile
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Technical Project Manager and Frontend Engineer with deep,
                hands-on experience building and integrating on the Twilio
                platform — including Flex, Studio, Paste, and WhatsApp Business
                API — for enterprise and NGO clients including UNHCR and
                Shelter. Regularly the technical voice in the room: running
                client demos, translating complex technical capability into
                terms both technical and non-technical stakeholders can act on,
                and owning commercial scoping — authoring Statements of Work,
                agreeing pricing, and securing client sign-off. Comfortable
                working across cloud platforms including AWS and Azure, with
                production experience integrating REST APIs and cloud-native
                automation. Brings a grounded, client-first perspective shaped
                by 21 years in client-facing leadership and operational roles
                prior to re-training in tech.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-4">
                Work Experience
              </h2>

              {/* Ciptex */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-800">
                    Technical Project Manager & Frontend Engineer
                  </h3>
                  <span className="text-sm text-gray-400">
                    June 2021 - Present
                  </span>
                </div>
                <p className="text-sm text-teal-600 font-medium mb-2">
                  Ciptex · Manchester
                </p>
                <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                  <li>
                    Built and demoed solutions on the{" "}
                    <span className="text-gray-700 font-medium">
                      Twilio platform
                    </span>{" "}
                    — including Flex, Studio, and Paste — for clients including{" "}
                    <span className="text-gray-700 font-medium">UNHCR</span> and{" "}
                    <span className="text-gray-700 font-medium">Shelter</span>,
                    presenting technical capability directly to both technical
                    and non-technical stakeholders.
                  </li>
                  <li>
                    Owned commercial scoping for ongoing client engagements end
                    to end — authoring Statements of Requirement and Statements
                    of Work, agreeing pricing, and securing client sign-off,
                    growing the Shelter relationship alone into £10k+ of
                    delivered engagements.
                  </li>
                  <li>
                    Led project management, development, and commercial
                    ownership for{" "}
                    <span className="text-gray-700 font-medium">
                      OPUSFidelis
                    </span>{" "}
                    — starting with a Twilio dialler build integrated with the
                    client's Zendesk platform for healthcare member services,
                    and growing to include SMS capability, an opt-out/blocklist
                    workflow, automated voicemail, a web chat build with Zendesk
                    ticket integration, and a Twilio AI Copilot implementation
                    within their Flex environment. Delivered £100k+ in value to
                    date, with further AI and call campaign dialler work
                    ongoing.
                  </li>
                  <li>
                    Designed and integrated REST APIs across Twilio, AWS, Azure,
                    and Snowflake, including a WhatsApp Business API deployment
                    for humanitarian field teams and a zero-touch GitHub Actions
                    automation workflow replacing a manual process across
                    hundreds of thousands of records.
                  </li>
                  <li>
                    Ran discovery workshops and requirements gathering directly
                    with clients, translating needs into technical
                    specifications and delivery plans for cross-functional
                    teams.
                  </li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-4">
                Projects
              </h2>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-800">
                    LGBTQ+ Safety App
                  </h3>
                  <span className="text-sm text-gray-400">2024 - 2025</span>
                </div>
                <p className="text-sm text-teal-600 font-medium mb-1">
                  Pre-funding Startup · Volunteer UX/Dev
                </p>
                <p className="text-sm text-gray-500">
                  Contributing UX research, design, frontend development,
                  testing and deployment for a safety-focused app aimed at
                  LGBTQ+ users. Full SDLC involvement at pre-funding stage.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-800">
                    Student Information Web App
                  </h3>
                  <span className="text-sm text-gray-400">
                    2021 · Final Year Project
                  </span>
                </div>
                <p className="text-sm text-teal-600 font-medium mb-1">
                  Edge Hill University
                </p>
                <p className="text-sm text-gray-500">
                  Full SDLC project — user research, React build, and delivery
                  of a web application to support first-year Computer Science
                  students. Achieved first-class marks.
                </p>
              </div>
            </section>

            {/* Previous Experience */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-4">
                Previous Experience
              </h2>
              <p className="text-xs text-gray-400 mb-3 italic">
                21 years in client-facing, operational and leadership roles —
                the foundation for direct client engagement today.
              </p>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-800">
                    Senior Works Coordinator
                  </h3>
                  <span className="text-sm text-gray-400">
                    Aug 2015 - Sep 2018
                  </span>
                </div>
                <p className="text-sm text-teal-600 font-medium mb-1">
                  Telent Communications · Chorley
                </p>
                <p className="text-sm text-gray-500">
                  Led project management on a national software suite rollout —
                  planning, coordinating, and reporting across teams. Managed
                  Openreach systems and production reporting, and coached a team
                  through the transition. Contributions credited with helping
                  retain Openreach within BT following Ofcom scrutiny.
                </p>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-800">
                    Company Director
                  </h3>
                  <span className="text-sm text-gray-400">
                    Apr 2013 - May 2014
                  </span>
                </div>
                <p className="text-sm text-teal-600 font-medium mb-1">
                  Global Guarding · Preston
                </p>
                <p className="text-sm text-gray-500">
                  Founded and ran a security company operating across the UK —
                  owning client relationships, operations, staffing, and
                  business development end-to-end.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Floating PDF Export Button */}
      <button
        onClick={handleExportPDF}
        className="no-print fixed bottom-8 right-8 flex items-center gap-2 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg transition-all duration-200 group"
        aria-label="Download CV as PDF"
      >
        {/* Download icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
          />
        </svg>
        Download PDF
      </button>
    </>
  );
}
