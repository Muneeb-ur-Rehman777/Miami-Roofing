import {
  FaAward,
  FaShield,
  FaClock,
  FaUsers,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaAward />,
    title: "Quality Workmanship",
    desc: "Premium materials and expert installation on every project.",
  },
  {
    icon: <FaShield />,
    title: "Licensed & Insured",
    desc: "Your property is protected throughout the entire project.",
  },
  {
    icon: <FaClock />,
    title: "Fast Response",
    desc: "Quick inspections, repairs, and emergency roofing services.",
  },
  {
    icon: <FaUsers />,
    title: "Trusted Team",
    desc: "Hundreds of satisfied homeowners across South Florida.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Roofing Done Right
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            We combine experience, quality materials, and exceptional customer
            service to deliver roofing solutions you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 rounded-3xl p-8 hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 text-slate-400 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}