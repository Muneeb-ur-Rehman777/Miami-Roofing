import Image from "next/image";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Services | Miami Roofing",
  description:
    "Professional roof repair, replacement, inspections, commercial roofing, and storm damage restoration throughout Miami.",
};

const services = [
  {
    title: "Roof Repair",
    desc: "Fast repairs for leaks, damaged shingles, and aging roofs.",
  },
  {
    title: "Roof Replacement",
    desc: "Complete roof replacement using premium roofing materials.",
  },
  {
    title: "Commercial Roofing",
    desc: "Durable roofing systems for offices, warehouses, and businesses.",
  },
  {
    title: "Storm Damage",
    desc: "Emergency roofing and insurance claim assistance.",
  },
  {
    title: "Roof Inspection",
    desc: "Professional inspections for buyers, sellers, and homeowners.",
  },
  {
    title: "Roof Maintenance",
    desc: "Prevent costly repairs with routine roof maintenance.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}

      <section className="relative h-[420px] flex items-center justify-center">

        <Image
          src="/images/services/services-hero.jpg"
          alt="Roofing Services"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 text-center text-white px-6">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Our Services
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Complete Roofing Solutions
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-slate-300 leading-8">
            Residential and commercial roofing services delivered with quality,
            integrity, and years of experience.
          </p>

        </div>

      </section>

      {/* Intro */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-slate-50 rounded-3xl p-8 shadow hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      <Services />

      <CTA />

      <Contact />
    </>
  );
}