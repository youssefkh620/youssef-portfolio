export default function About() {
  return (
    <>
      <TimeLine />
    </>
  );
}

function TimeLine() {
  const timeline = [
    {
      year: "2022",
      title: "Started University",
      description: "Started studying Information Systems.",
    },
    {
      year: "2025",
      title: "ITI Certificate",
      description: "Earned a certificate in Web Design Using Python from ITI.",
    },
    {
      year: "2026",
      title: "Graduation",
      description: "Graduated with a Bachelor's degree in Information Systems.",
    },
  ];
  return (
    <>
      <section className="py-20 px-5 bg-[#07111F]">
        <h2 className="mb-12  text-[#38BDF8] text-sm font-bold">EDUCATION</h2>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 w-1 h-full bg-linear-180 from-[#38BDF8]  to-transparent md:left-1/2 md:-translate-x-1/2" />
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative mb-12 flex items-start md:even:flex-row-reverse"
            >
              <div className="ml-10 w-full rounded-2xl border border-[#38BDF8]/12 bg-[#0F1D31] p-5 md:ml-0 md:w-[45%]">
                <span className="text-sm font-semibold text-sky-400">
                  {item.year}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
              <div className="absolute left-4 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-[#38BDF8] ring-4 ring-[#38BDF8]/12 md:left-1/2"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
