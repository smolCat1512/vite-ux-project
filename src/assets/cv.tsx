export default function CV() {
  return (
    <div className="mx-auto p-16">
      <div className="display-flex flex-col">
        <h1 className="text-3xl font-bold mb-2 !text-teal-700">
          Shaun Halliday
        </h1>
        <p className="!text-gray-600 font-semibold mb-2">
          Front End Software Engineer (UX/Usability Engineer)
        </p>
        <div className="flex space-x-6 !text-gray-500 flex-wrap">
          <p>Coates, Cambridgeshire</p>
          <p>•</p>
          <p>shaunuxuidev@gmail.com</p>
          <p>•</p>
          <p>•</p>
          <p>
            <a
              href="https://www.linkedin.com/in/shaun-halliday-5001a6b2"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      {/* Add your CV content here */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-3 !text-teal-700">Work Experience</h2>
        <div className="border border-gray-300 rounded-lg">
          {/* Your experience content */}
        </div>
      </section>

      {/* More sections... */}
    </div>
  );
}
