import {
  FaHouse,
  FaHammer,
  FaBuilding,
  FaCloudBolt,
  FaMagnifyingGlass,
  FaShield,
} from "react-icons/fa6";

const services = [
  {
    icon: <FaHammer />,
    title: "Roof Repair",
    desc: "Fast and reliable roof repairs for leaks and damaged shingles.",
  },
  {
    icon: <FaHouse />,
    title: "Roof Replacement",
    desc: "Complete roof replacement using premium materials.",
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Roofing",
    desc: "Professional roofing solutions for commercial properties.",
  },
  {
    icon: <FaCloudBolt />,
    title: "Storm Damage",
    desc: "Emergency roofing services after storms and hurricanes.",
  },
  {
    icon: <FaMagnifyingGlass />,
    title: "Roof Inspection",
    desc: "Detailed roof inspections with honest recommendations.",
  },
  {
    icon: <FaShield />,
    title: "Preventive Maintenance",
    desc: "Protect your roof with scheduled maintenance plans.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
            Complete Roofing Solutions
          </h2>

          <p className="text-slate-600 mt-6 leading-8">
            We provide dependable residential and commercial roofing
            services throughout Miami with quality workmanship and
            exceptional customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-slate-50 rounded-3xl p-8 hover:bg-slate-900 transition duration-300 shadow-md hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white text-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600 group-hover:text-slate-300 leading-7 transition">
                {service.desc}
              </p>

              <button className="mt-6 text-orange-500 font-semibold">
                Learn More →
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}