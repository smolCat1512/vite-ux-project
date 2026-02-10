import { motion, useReducedMotion } from "framer-motion";
import Main from "../../utils/Main";

// Images
import shelterHero from "../../assets/shelter-wireframes/shelterHero.png";
import wireframeStart from "../../assets/shelter-wireframes/start.png";
import wireframeTriage from "../../assets/shelter-wireframes/triage.png";
import wireframePostChat from "../../assets/shelter-wireframes/postChat.png";

// Reusable List Component
const ContentList = ({ title, items }: { title: string; items: string[] }) => (
  <article className="mt-6">
    <h3 className="pb-2 font-semibold">{title}</h3>
    <ul className="list-disc font-light pl-4 space-y-1">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </article>
);

const CaseStudyShelterDetailed = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Main className="p-8 md:w-8/12 mx-auto mt-24">
      {/* Header */}
      <header className="flex flex-col md:flex-row gap-4 items-baseline">
        <h1 className="text-4xl font-bold text-red-500">Shelter</h1>
        <h2 className="text-2xl font-semibold">Digital Advice Web Chat</h2>
      </header>

      {/* Intro */}
      <p className="text-gray-600 mt-4">
        Shelter’s outdated chat and call systems slowed response times and
        limited agent efficiency. I designed and built a modern, customisable
        interface that improved triage, communication, and multitasking.
      </p>
      <p className="text-gray-400">2024</p>

      <img
        src={shelterHero}
        alt="Project Shelter hero area interface"
        className="rounded-lg shadow-lg my-6"
      />

      {/* Section: Introduction */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-labelledby="introduction"
      >
        <h2 id="introduction" className="text-2xl font-bold mt-6 pb-4">
          1. Introduction / Project Overview
        </h2>
        <p className="font-light">
          Shelter is a UK-based charity campaigning for housing justice in
          England and Scotland. They provide advice, support, and advocacy to
          individuals, and run national campaigns to address housing issues.
        </p>
        <p className="font-light">
          Shelter required a new digital web chat interface, as well as a
          call-handling interface, to enable their agents to manage both web
          chats and voice calls more effectively.
        </p>
      </motion.section>

      {/* Section: Problem Statement */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="problem-statement"
      >
        <h2 id="problem-statement" className="text-2xl font-bold mt-6 pb-4">
          2. Problem Statement
        </h2>
        <p className="font-light">
          Shelter needed to maximise efficiency by triaging and prioritising
          urgent cases, reducing unnecessary conversations, and easing the
          overall load on their service.
        </p>
        <p className="font-light">
          The previous system (SnapEngage) had multiple usability pain points
          affecting both agents and users.
        </p>
      </motion.section>

      {/* Section: Research */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="research"
      >
        <h2 id="research" className="text-2xl font-bold mt-6 pb-4">
          3. Research
        </h2>

        <ContentList
          title="a. Research Questions"
          items={[
            "How do users (both agents and end clients) perceive the app’s usability and overall experience?",
            "What motivates users to continue using the app, and what discourages them?",
            "What do users like about the current systems they use?",
            "What do users dislike about the current systems they use?",
          ]}
        />

        <ContentList
          title="b. Research Methods"
          items={[
            "User Interviews – Conducted interviews with both service users and Shelter agents to understand needs, motivations, and pain points.",
            "Desktop Research – Analysed other web chat and voice platforms to identify best practices and potential features to adopt.",
            "Usability Testing – Observed users interacting with the existing system to uncover usability issues and inefficiencies.",
            "Analytics Review – Analysed user data to identify patterns, peak usage times, and drop-off points.",
          ]}
        />

        <ContentList
          title="c. Key Findings (Pain Points)"
          items={[
            "No ability to triage clients and prioritise urgent cases.",
            "No way to inform users when the chat queue was busy or full.",
            "Basic out-of-the-box design from SnapEngage, with no theming or customisation options.",
            "On the agent side, the system only allowed handling of one voice call or one web chat at a time.",
            "Poor integration with SSO, requiring manual skill assignment each day.",
            "Cumbersome onboarding and off-boarding processes for agents.",
            "Client transcripts were basic, with no option to amend email templates before sending.",
            "SnapEngage customer service did not meet Shelter’s requirements, and pricing was an issue.",
            "System performance was deteriorating, causing glitches, bugs, and false chat terminations.",
          ]}
        />
      </motion.section>

      {/* Section: Design */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="design"
      >
        <h2 id="design" className="text-2xl font-bold mt-6 pb-4">
          4. Design Process and Iteration
        </h2>

        <p className="font-light">
          Iterative design translated research insights into actionable
          solutions using wireframes, prototyping, and user testing.
        </p>

        <section className="flex flex-row gap-2 flex-wrap justify-center my-6">
          <img
            src={wireframeStart}
            alt="Start screen wireframe"
            className="rounded-lg shadow-lg"
            width={200}
            height={300}
          />
          <img
            src={wireframeTriage}
            alt="Triage screen wireframe"
            className="rounded-lg shadow-lg"
            width={200}
            height={300}
          />
          <img
            src={wireframePostChat}
            alt="Post-chat screen wireframe"
            className="rounded-lg shadow-lg"
            width={200}
            height={300}
          />
        </section>

        <ContentList
          title="Key design insights"
          items={[
            "Generated multiple ideas to address core problems like triage and multitasking.",
            "Early wireframes improved user flow and information hierarchy.",
            "Integrated agent and client experience for cohesive UI.",
            "Highlighted persistence and multi-device support for web chat.",
          ]}
        />

        <img
          src="https://via.placeholder.com/800x500"
          alt="Shelter design sketches and prototypes"
          className="rounded-lg shadow-lg my-6"
          width={800}
          height={500}
        />
      </motion.section>

      {/* Section: Engineering */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="engineering"
      >
        <h2 id="engineering" className="text-2xl font-bold mt-6 pb-4">
          5. Engineering and Implementation
        </h2>

        <p className="font-light">
          Worked with dev team using React and TypeScript to build modular,
          reusable components and integrate the custom web chat UI into Twilio
          Flex.
        </p>

        <img
          src="https://via.placeholder.com/800x500"
          alt="Engineering screenshots of Shelter project"
          className="rounded-lg shadow-lg my-6"
          width={800}
          height={500}
        />
      </motion.section>

      {/* Section: Evaluation */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="evaluation"
      >
        <h2 id="evaluation" className="text-2xl font-bold mt-6 pb-4">
          6. Evaluation and Outcomes
        </h2>

        <p className="font-light">
          User feedback and metrics demonstrated improved agent efficiency,
          reduced wait times, and higher satisfaction for end users.
        </p>

        <img
          src="https://via.placeholder.com/800x500"
          alt="Evaluation screenshots"
          className="rounded-lg shadow-lg my-6"
          width={800}
          height={500}
        />
      </motion.section>

      {/* Section: Lessons Learned */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="lessons-learned"
      >
        <h2 id="lessons-learned" className="text-2xl font-bold mt-6 pb-4">
          7. Lessons Learned
        </h2>

        <ContentList
          title="Collaboration is Key"
          items={[
            "Close communication between design, engineering, and Shelter stakeholders was essential.",
            "Regular cross-functional check-ins ensured feasible and aligned design decisions.",
          ]}
        />

        <ContentList
          title="Iterative Improvement"
          items={[
            "Continuous feedback loops with agents and users were invaluable.",
            "Early usability testing and ongoing input uncovered real-world pain points.",
          ]}
        />

        <ContentList
          title="Transferable Skills & Reflection"
          items={[
            "Balancing technical implementation with UX principles in Twilio Flex.",
            "Designing for flexibility and scalability from the outset.",
            "Anticipating future needs like multi-language support and CRM integration.",
          ]}
        />
      </motion.section>
    </Main>
  );
};

export default CaseStudyShelterDetailed;
