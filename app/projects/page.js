import Image from "next/image";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Projects | Miami Roofing",
  description: "Browse our completed roofing projects across South Florida.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}

      <section className="relative h-[420px] flex items-center justify-center">

        <Image
          src="/images/projects/projects-hero.jpg"
          alt="Roofing Projects"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 text-center text-white px-6">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Our Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Recent Roofing Projects
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-slate-300 leading-8">
            Explore some of our recent residential and commercial roofing
            projects completed throughout Miami and the surrounding areas.
          </p>

        </div>

      </section>

      {/* Intro */}

      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-black text-slate-900">
            Quality You Can See
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Every roof is installed using premium materials and expert
            craftsmanship. Whether it's a simple repair or a complete roof
            replacement, we take pride in delivering results that last.
          </p>

        </div>

      </section>

      <Projects />

      <CTA />

      <Contact />
    </>
  );
}