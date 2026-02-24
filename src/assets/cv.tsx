export default function CV() {
  return (
    <div className="min-h-screen bg-gray-900 py-14 px-8">
      <div className="max-w-5xl mx-auto shadow-2xl flex bg-white">
        {/* LEFT PANEL — ~1/3 width, muted grey background */}
        <aside className="w-1/3 bg-gray-100 p-10 flex flex-col gap-8">
          {/* Name */}
          <div>
            <h1 className="text-2xl font-bold text-teal-600 leading-tight">
              Shaun Halliday
            </h1>
            <p className="text-sm text-teal-700 font-medium mt-1">
              Front End Software Engineer
            </p>
            <p className="text-sm text-teal-800">UX / Usability Engineer</p>
          </div>

          {/* Skills */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3">
              Skills
            </h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>React / Next.js / TypeScript</li>
              <li>HTML5, CSS3, Python</li>
              <li>Tailwind CSS / Sass / Bootstrap</li>
              <li>Figma / Framer / Prototyping</li>
              <li>Storybook / Design Systems</li>
              <li>Twilio / API Integration</li>
              <li>Accessibility (WCAG 2.1 / 2.2)</li>
              <li>Usability Testing</li>
              <li>npm Package Deployment</li>
              <li>GitHub</li>
            </ul>
          </section>

          {/* Areas of Expertise */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3">
              Areas of Expertise
            </h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>UX Research & Methodology</li>
              <li>User Interviews & Focus Groups</li>
              <li>Personas & Journey Mapping</li>
              <li>Wireframing & Prototyping</li>
              <li>Front End Architecture</li>
              <li>Component Libraries</li>
              <li>Solutions Engineering</li>
              <li>Requirements Gathering</li>
              <li>End-User Training & Testing</li>
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
                  2018 – 2021 · First Class Honours
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">
                  Diploma of Higher Education
                </p>
                <p>The Open University</p>
                <p className="text-gray-400">2015 – 2018 · Computing & IT</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">6 GCSEs (A–C)</p>
                <p>Albany High School</p>
                <p className="text-gray-400">1992 – 1997</p>
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
          </div>

          <div className="flex flex-wrap items-center gap-x-8 text-sm text-gray-500"
          style={{ marginTop: "-1rem" }}
          >
            <a
              href="https://www.linkedin.com/in/shaun-halliday-5001a6b2"
              className="underline text-teal-600 hover:text-teal-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="http://www.shaunhalliday.co.uk/" // !TODO Placeholder URL for personal portfolio
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
            </a>
          </div>

          {/* Profile Summary */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-teal-200 pb-1 mb-3">
              Profile
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Front End Software Engineer and UX/Usability Engineer with a
              first-class degree in Web Design & Development and 4+ years of
              hands-on experience delivering end-to-end UX research, design, and
              development. Experienced working with major NGOs including UNHCR
              and Shelter, with a strong focus on accessibility, user-centred
              design, and building robust React/TypeScript frontends. Brings a
              grounded, human perspective to complex problems — shaped by 21
              years of team leadership, operational management, and
              client-facing roles across diverse industries.
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
                  Frontend Software Engineer
                </h3>
                <span className="text-sm text-gray-400">
                  June 2021 – Present
                </span>
              </div>
              <p className="text-sm text-teal-600 font-medium mb-2">
                Ciptex · Manchester
              </p>
              <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                <li>
                  Led end-to-end UX processes — requirements gathering, user
                  interviews, prototype testing, and iterative development — for
                  clients including{" "}
                  <span className="text-gray-700 font-medium">UNHCR</span> and{" "}
                  <span className="text-gray-700 font-medium">Shelter</span>.
                </li>
                <li>
                  Built and deployed React/TypeScript frontends and design
                  systems via Storybook and npm, with API integrations using the
                  Twilio communications platform.
                </li>
                <li>
                  Conducted usability testing and accessibility audits to WCAG
                  2.1 standards; produced test scripts and delivered end-user
                  training sessions.
                </li>
                <li>
                  Collaborated closely with solutions engineers and clients to
                  translate requirements into scalable, accessible UI components
                  and applications.
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
                <span className="text-sm text-gray-400">Ongoing</span>
              </div>
              <p className="text-sm text-teal-600 font-medium mb-1">
                Pre-funding Startup · Volunteer UX/Dev
              </p>
              <p className="text-sm text-gray-500">
                Contributing UX research, design, frontend development, testing
                and deployment for a safety-focused app aimed at LGBTQ+ users.
                Full SDLC involvement at pre-funding stage.
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
                Full SDLC project — user research, React build, and delivery of
                a web application to support first-year Computer Science
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
              21 years across operational, leadership and management roles prior
              to re-training in tech.
            </p>

            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-800">
                  Senior Works Coordinator
                </h3>
                <span className="text-sm text-gray-400">
                  Aug 2015 – Sep 2018
                </span>
              </div>
              <p className="text-sm text-teal-600 font-medium mb-1">
                Telent Communications · Chorley
              </p>
              <p className="text-sm text-gray-500">
                Managed Openreach systems, production reporting and team
                coaching. Led project management on a national software suite
                rollout. Contributions credited with helping retain Openreach
                within BT following Ofcom scrutiny.
              </p>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-800">
                  Company Director
                </h3>
                <span className="text-sm text-gray-400">
                  Apr 2013 – May 2014
                </span>
              </div>
              <p className="text-sm text-teal-600 font-medium mb-1">
                Global Guarding · Preston
              </p>
              <p className="text-sm text-gray-500">
                Founded and managed a security company operating across the UK —
                responsible for client relationships, operations, staffing, and
                business development.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
