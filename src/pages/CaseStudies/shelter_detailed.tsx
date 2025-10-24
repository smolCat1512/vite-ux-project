import shelterHero from "../../assets//shelter-wireframes/shelterHero.png";

const CaseStudyShelter = () => {
  return (
    <main>
      <main className="p-8 md:w-8/12 mx-auto mt-24">
        <div className="flex flex-row gap-4">
          <h1 className="text-4xl font-bold py-8 text-red-500">Shelter</h1>
          <span className="text-4xl font-bold py-8">
            Digital Advice Web Chat
          </span>
        </div>
        <p className="text-gray-600">
          Shelter’s outdated chat and call systems slowed response times and
          limited agent efficiency. I designed and built a modern, customisable
          interface that improved triage, communication, and multitasking.
        </p>
        <p className="text-gray-400">2024</p>

        <img
          src={shelterHero}
          alt="Project Shelter hero area image"
          width={800}
          height={500}
          className="rounded-lg shadow-lg my-6"
        />

        <section>
          <h2 className="text-2xl font-bold mt-6 pb-4">
            1. Introduction/Project Overview
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
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-6 pb-4">2. Problem Statement</h2>
          <p className="font-light">
            As a non-profit organisation, Shelter does not have the resources to
            employ the hundreds of staff needed to handle the thousands of web
            chat connection attempts made daily through their website. They
            needed to maximise efficiency by triaging and prioritising the most
            urgent cases, reducing unnecessary conversations and easing the
            overall load on their service.
          </p>
          <p className="font-light">
            Shelter had previously used a system called SnapEngage, but ongoing
            use revealed numerous pain points and areas for improvement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-6 pb-4">3. Research</h2>
          <article>
            <h3 className="pb-2">a. Research Questions</h3>
            <ul className="font-light pl-4">
              <li className="list-disc">
                How do users (both agents and end clients) currently perceive
                the app’s usability and overall experience?
              </li>
              <li className="list-disc">
                What motivates users to continue using the app, and what
                discourages them?
              </li>
              <li className="list-disc">
                What do you like about the current systems you use?
              </li>
              <li className="list-disc">
                What do you dislike about the current systems you use?
              </li>
            </ul>
          </article>
        </section>

        <div className="mt-6">
          <article>
            <h3 className="pb-2">b. Research Methods</h3>
            <ul className="font-light pl-4">
              <li className="list-disc">
                <span className="font-bold">User Interviews</span> – Conducted
                interviews with both service users and Shelter agents to
                understand needs, motivations, and pain points.
              </li>
              <li className="list-disc">
                <span className="font-bold">Desktop Research</span> – Analysed
                other web chat and voice platforms to identify best practices
                and potential features to adopt.
              </li>
              <li className="list-disc">
                <span className="font-bold">Usability Testing</span> – Observed
                users interacting with the existing system to uncover usability
                issues and inefficiencies.
              </li>
              <li className="list-disc">
                <span className="font-bold">Analytics Review</span> – Analysed
                user data to identify patterns, peak usage times, and drop-off
                points.
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-6">
          <article>
            <h3 className="pb-2">c. Key Findings (Pain Points)</h3>
            <ul className="font-light pl-4">
              <li className="list-disc">
                No ability to triage clients and prioritise urgent cases.
              </li>
              <li className="list-disc">
                No way to inform users when the chat queue was busy or full.
              </li>
              <li className="list-disc">
                Basic out-of-the-box design from SnapEngage, with no theming or
                customisation options — meaning opening hours, estimated
                response times, or queue positions could not be displayed.
              </li>
              <li className="list-disc">
                On the agent side, the system only allowed handling of one voice
                call or one web chat at a time, preventing multitasking and
                significantly reducing efficiency.
              </li>
              <li className="list-disc">
                Poor integration with SSO — agents had to have skills manually
                assigned on login each day, taking time from supervisors.
              </li>
              <li className="list-disc">
                Cumbersome onboarding and off-boarding processes for agents.
              </li>
              <li className="list-disc">
                Client transcripts were basic, with no option to amend email
                templates before sending transcripts.
              </li>
              <li className="list-disc">
                SnapEngage customer service did not meet Shelter’s requirements,
                and pricing had become an issue.
              </li>
              <li className="list-disc">
                System performance was deteriorating, causing glitches, bugs,
                false chat terminations, connection issues, and various UI
                problems for both clients and agents.
              </li>
            </ul>
          </article>
        </div>

        <article className="mt-6">
          <h3 className="pb-2">Summary of Research Insights</h3>
          <p>
            Through a combination of user interviews, usability testing, desktop
            research, and data analysis, several critical issues emerged
            affecting both service users and Shelter agents. The existing
            platform lacked essential features for effective triage and queue
            management, limiting communication transparency for users and
            reducing agent efficiency. Technical and operational challenges,
            including poor system integration, cumbersome onboarding, and
            deteriorating performance, further hindered the user experience and
            service delivery. These insights shaped the design and engineering
            priorities to build a more efficient, user-friendly chat and
            call-handling solution.
          </p>
        </article>

        <section className="mt-6">
          <article>
            <h2 className="text-2xl font-bold mt-6 pb-4">
              4. Design Process and Iteration:
            </h2>
            <p className="font-light">
              Following the research phase, we translated the key insights and
              pain points into concrete design solutions through a structured,
              iterative process. This involved ideation, wireframing,
              prototyping, and user testing, allowing us to refine the product
              continuously based on real user feedback.
            </p>
          </article>

          <article className="mt-6">
            <h3>Ideation and Wireframing</h3>
            <ul>
              <li className="list-disc font-light">
                Based on research findings, we generated multiple ideas to
                address the core problems, such as enabling triage, queue
                visibility, and multitasking for agents.
              </li>
              <li className="list-disc font-light">
                Early sketches and low-fidelity wireframes focused on improving
                user flow and information hierarchy, emphasising clarity and
                efficiency.
              </li>
              <li className="list-disc font-light">
                On the agent side, we mapped out how the new functions would be
                integrated within the Twilio Flex platform, clearly outlining
                what features were being added, their purposes, and how they
                would operate in practice.
              </li>
              <li className="list-disc font-light">
                By addressing both the agent and client experiences
                simultaneously, we ensured the solution was cohesive and met the
                needs of all users involved in the communication process.
              </li>
              <li className="list-disc font-light">
                On the client side, we presented the new web chat UI across
                desktop, tablet, and mobile devices. We highlighted new features
                such as triage flows, requesting transcripts, ending chats.
                Also, persistence of chat - ensuring that if clients lose
                connection, refresh the browser, or navigate around the website
                in the background - the service remains uninterrupted.
              </li>
            </ul>
            <section className="flex flex-row items-center gap-2">
              <img
                src="../../assets/shelter-wireframes/Digital Wireframes - Start A.png"
                alt="Webchat wireframe start screen"
                width={200}
                height={300}
                className="rounded-lg shadow-lg my-6"
              />
              <img
                src="../../assets/shelter-wireframes/Digital Wireframes - Triage A.png"
                alt="Webchat wireframe triage screen"
                width={200}
                height={300}
                className="rounded-lg shadow-lg my-6"
              />
              <img
                src="../../assets/shelter-wireframes/Digital Wireframes - Post Chat.png"
                alt="Webchat wireframe post-chat screen"
                width={200}
                height={300}
                className="rounded-lg shadow-lg my-6"
              />
            </section>
          </article>
          <article className="mt-6">
            <h3>Ideation and Wireframing</h3>
            <ul>
              <li className="list-disc font-light">
                Based on research findings, we generated multiple ideas to
                address the core problems, such as enabling triage, queue
                visibility, and multitasking for agents.
              </li>
              <li className="list-disc font-light">
                Early sketches and low-fidelity wireframes focused on improving
                user flow and information hierarchy, emphasising clarity and
                efficiency.
              </li>
              <li className="list-disc font-light">
                On the agent side, we mapped out how the new functions would be
                integrated within the Twilio Flex platform, clearly outlining
                what features were being added, their purposes, and how they
                would operate in practice.
              </li>
              <li className="list-disc font-light">
                By addressing both the agent and client experiences
                simultaneously, we ensured the solution was cohesive and met the
                needs of all users involved in the communication process.
              </li>
              <li className="list-disc font-light">
                On the client side, we presented the new web chat UI across
                desktop, tablet, and mobile devices. We highlighted new features
                such as triage flows, requesting transcripts, ending chats.
                Also, persistence of chat - ensuring that if clients lose
                connection, refresh the browser, or navigate around the website
                in the background - the service remains uninterrupted.
              </li>
            </ul>
            <img
              src="/images/project-alpha.jpg"
              alt="Project Shelter - sketches, wireframes, etc. here"
              width={800}
              height={500}
              className="rounded-lg shadow-lg my-6"
            />
          </article>
          <article className="mt-6">
            <h3>Prototyping</h3>
            <ul>
              <li className="list-disc font-light">
                We developed interactive prototypes to bring designs to life and
                simulate key user interactions, including queue status updates
                and multitasking interfaces for agents.
              </li>
              <li className="list-disc font-light">
                Prototypes allowed rapid experimentation with layout, theming,
                and messaging to ensure the system was intuitive and met user
                needs.
              </li>
            </ul>
            <img
              src="/images/project-alpha.jpg"
              alt="Project Shelter - clickable prototypes, screens, etc. here"
              width={800}
              height={500}
              className="rounded-lg shadow-lg my-6"
            />
          </article>
          <article className="mt-6">
            <h3>User Testing</h3>
            <ul>
              <li className="list-disc font-light">
                Conducted usability testing sessions with Shelter agents and
                service users to validate design decisions and identify any
                remaining pain points or confusion.
              </li>
              <li className="list-disc font-light">
                Feedback led to several refinements, such as clearer queue
                status notifications and improved accessibility for agents
                handling multiple chats and calls simultaneously.
              </li>
              <li className="list-disc font-light">
                Iterations focused on balancing simplicity for users with the
                complexity of agent workflows.
              </li>
            </ul>
            <img
              src="/images/project-alpha.jpg"
              alt="Project Shelter - visuals of sketches/wireframes/prototypes with notes on user feedback here"
              width={800}
              height={500}
              className="rounded-lg shadow-lg my-6"
            />
          </article>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-bold mt-6 pb-4">
            5. Engineering and Implementation:
          </h2>
          <p className="font-light">
            Throughout the engineering phase, I worked closely with the
            development team while also contributing directly to building key
            parts of the application. Using React and TypeScript, I helped
            develop modular, reusable components that brought the design to life
            while ensuring performance and scalability.
          </p>
          <p className="font-light">
            One of the major technical challenges we addressed was enabling
            agents to multitask effectively—handling voice calls and web chats
            concurrently—which required careful state management and integration
            with the Twilio Flex platform. I contributed to building a custom
            flow-style UI within Flex using the React Flow library, empowering
            Shelter to create and manage their own triage flows dynamically.
            This included developing a separate Content Manager view for
            creating and editing contact templates used in the flows.
          </p>
          <p className="font-light">
            Additionally, I developed a Shortcuts Manager interface to allow
            agents to create reusable shortcuts for quicker and more consistent
            communication during conversations. We also built a Management
            Interface screen where administrators could add new languages,
            categories, and labels, ensuring the system remained flexible and
            scalable for Shelter’s evolving needs.
          </p>
          <p className="font-light">
            Development was paired with comprehensive testing, including unit
            and integration tests, as well as user acceptance testing with
            Shelter agents to ensure the product met their practical needs. The
            rollout was phased to allow for monitoring and iterative
            improvements based on real-world feedback.
          </p>
          <p>
            These engineering enhancements significantly improved the user
            experience and operational efficiency. Allowing agents to multitask
            boosted their productivity and reduced client wait times. The triage
            flow builder and content manager empowered Shelter’s administrators
            to adapt quickly to changing needs without relying on engineering
            resources. The shortcuts and management interfaces streamlined agent
            workflows, enabling faster, more consistent responses and better
            handling of diverse client cases. Together, these features created a
            flexible, scalable system that better supports Shelter’s mission to
            deliver timely, high-quality housing advice.
          </p>
          <img
            src="/images/project-alpha.jpg"
            alt="Project Shelter - screenshots of final build here"
            width={800}
            height={500}
            className="rounded-lg shadow-lg my-6"
          />
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-bold mt-6 pb-4">
            6. Evaluation and Outcomes:
          </h2>
          <p className="font-light">
            The project is currently in an active Software Development Life
            Cycle (SDLC) phase, with ongoing efforts to resolve bugs and refine
            features. Key issues being addressed include improving chat
            persistence and reconnection functionality, as well as fixing
            transcript delivery problems such as emails not correctly carrying
            client addresses to Shelter’s inbox.
          </p>
          <p className="font-light">
            User feedback from both agents and clients has also inspired several
            desirable UX enhancements. Examples include enabling users to drag
            and resize the web chat window on desktop and tablet devices, and
            the ability to expand messages into modals or separate windows for
            easier reading. These features are part of a growing list of
            improvements planned to make the platform more flexible and
            user-friendly.
          </p>
          <p className="font-light">
            Looking ahead, further projects are planned to roll out the web chat
            system to Shelter Scotland, requiring additional customisation of
            Twilio Flex, particularly around conversation labels. Additionally,
            integration with Shelter’s Dynamics 365 CRM is underway, aiming to
            unify web chat and voice interactions within a single platform to
            provide agents with richer context and improve overall case
            handling.
          </p>
          <p className="font-light">
            This iterative approach underscores a commitment to continuous
            improvement and user-centred design, ensuring the platform evolves
            in step with Shelter’s operational needs and user expectations.
          </p>
          <p className="font-light">
            From a metrics perspective, web chat handling has increased by 80%
            since launch. This has led to more emergency calls being handled and
            more urgent situations referred to local health and police services
            for timely intervention. Call handling has also increased similarly,
            alongside a reduction in unwanted traffic, achieved through the use
            of the Twilio Flex Studio product.
          </p>
          <p className="font-light">
            Waiting times have significantly decreased — the previous average of
            around 2 hours has been cut to 30 minutes. This improvement is the
            result of the Flow Builder, which delivers triage, in-queue
            messaging to advise users of wait times and queue position, and
            directs users to other resources when the queue is over capacity.
          </p>
          <p className="font-light">
            Users have reported higher satisfaction with the new service,
            largely due to the ability to answer triage questions that ensure
            clients are directed to the correct team. This also provides agents
            with advanced knowledge of a client’s situation, thanks to labels
            assigned during the triage flow based on client responses, along
            with free-text inputs submitted before the chat connection that
            summarise the client’s issues.
          </p>
          <p className="font-light">
            Additionally, in-queue messaging and clear notifications when the
            queue is over capacity help manage client expectations and reduce
            frustration or negative feelings during wait times.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-bold mt-6 pb-4">7. Lessons Learned:</h2>
          <h3 className="pb-2">Collaboration is Key:</h3>
          <p className="font-light pb-4">
            Close communication and collaboration between design, engineering,
            and Shelter stakeholders were essential to navigating technical
            constraints while delivering a user-centred solution. Regular
            cross-functional check-ins ensured design decisions were feasible
            and aligned with Shelter’s operational needs.
          </p>
          <h3 className="pb-2">Iterative Improvement:</h3>
          <p className="font-light pb-4">
            Continuous feedback loops with agents and end users proved
            invaluable. Early usability testing and ongoing input during rollout
            helped uncover real-world pain points and prioritise improvements.
            This iterative approach enabled the team to adapt quickly and
            deliver meaningful enhancements over time.
          </p>
          <h3 className="pb-2">Transferable Skills:</h3>
          <p className="font-light pb-4">
            This project strengthened my ability to balance technical
            implementation with UX principles within complex platforms like
            Twilio Flex. I gained experience in modular development, integrating
            UX research insights, and managing stakeholder collaboration—skills
            I look forward to applying in future projects.
          </p>
          <h3 className="pb-2">Reflection:</h3>
          <p className="font-light pb-4">
            A key takeaway was the importance of designing for flexibility and
            scalability from the outset. While addressing immediate pain points
            such as triage flows and multitasking, anticipating future needs
            like multi-language support and CRM integration proved crucial. The
            dynamic flow builder empowered Shelter to independently adapt
            workflows, boosting operational efficiency.
          </p>
          <p className="font-light">
            Challenges with persistent bugs and edge cases—such as chat
            reconnection and transcript delivery—reinforced the need for
            rigorous testing and phased rollouts. The project highlighted that
            UX and engineering improvements are never truly “done,” requiring
            sustained iteration based on real user feedback. Additionally, I
            learned that even when clients state all key stakeholders were
            involved from the start, new functional and visual requirements can
            emerge later from previously uninvolved parties. This underscores
            the importance of ongoing stakeholder engagement throughout the
            project lifecycle.
          </p>
        </section>
      </main>
    </main>
  );
};

export default CaseStudyShelter;
