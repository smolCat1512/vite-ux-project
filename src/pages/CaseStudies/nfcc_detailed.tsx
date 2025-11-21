import Main from "../../utils/Main";

const CaseStudyNFCC = () => {
  return (
    <Main className="p-8 max-w-3xl mx-auto mt-32 md:mt-24">
      <h1 className="text-4xl font-bold">NFCC</h1>
      <p className="text-gray-300">
        A redesign of a major e-commerce platform to improve UX and conversion
        rates.
      </p>
      <p className="text-gray-400 mt-2">2024</p>

      <img
        src="/images/project-alpha.jpg"
        alt="Project NFCC"
        width={800}
        height={500}
        className="rounded-lg shadow-lg my-6"
      />

      <h2 className="text-2xl font-bold mt-6">Project Overview</h2>
      <p className="text-lg">
        This project focused on enhancing the user experience by conducting
        in-depth research, iterating designs, and improving conversion rates.
      </p>

      <h2 className="text-2xl font-bold mt-6">Personas & User Research</h2>
      <p className="text-lg">
        We created detailed personas to understand user pain points and
        expectations.
      </p>
      <img
        src="/images/persona-alpha.jpg"
        alt="Persona Example"
        width={600}
        height={400}
        className="rounded-lg shadow-lg my-6"
      />

      <h2 className="text-2xl font-bold mt-6">Final Designs</h2>
      <p className="text-lg">Here is a showcase of the final UI designs.</p>
    </Main>
  );
};

export default CaseStudyNFCC;
