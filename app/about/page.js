import Image from "next/image";
import {
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "About Us | Miami Roofing",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}

      <section className="relative h-[420px]">
        <Image
          src="/images/about/about-hero.jpg"
          alt="Miami Roofing"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="uppercase tracking-[6px] text-orange-500 mb-4">
              About Us
            </p>

            <h1 className="text-5xl md:text-6xl font-black">
              Miami Roofing
            </h1>

            <p className="mt-6 text-slate-200 max-w-xl mx-auto">
              Protecting homes and businesses throughout Miami with premium
              roofing solutions built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Company */}

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Who We Are
          </p>

          <h2 className="text-5xl font-black mt-3 mb-8">
            Miami's Trusted Roofing Experts
          </h2>

          <p className="text-slate-600 leading-8 mb-6">
            Miami Roofing has been helping homeowners and businesses protect
            their properties with dependable roofing solutions. Our experienced
            team specializes in roof repairs, replacements, inspections, and
            commercial roofing projects.
          </p>

          <p className="text-slate-600 leading-8">
            We believe every customer deserves honest pricing, exceptional
            workmanship, and long-lasting results. From small repairs to
            complete roof installations, we treat every project with the same
            level of care and professionalism.
          </p>

        </div>

        <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">

          <Image
            src="/images/about/team.jpg"
            alt="Roofing Team"
            fill
            className="object-cover"
          />

        </div>

      </section>

      {/* Features */}

      <section className="bg-slate-950 py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-slate-900 rounded-3xl p-8 text-center text-white">

            <FaAward className="text-5xl text-orange-500 mx-auto mb-6" />

            <h3 className="font-bold text-xl mb-3">
              Licensed & Insured
            </h3>

            <p className="text-slate-400">
              Certified professionals delivering safe and reliable roofing
              services.
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center text-white">

            <FaUsers className="text-5xl text-orange-500 mx-auto mb-6" />

            <h3 className="font-bold text-xl mb-3">
              Experienced Team
            </h3>

            <p className="text-slate-400">
              Skilled roofers with years of experience across residential and
              commercial projects.
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center text-white">

            <FaShieldAlt className="text-5xl text-orange-500 mx-auto mb-6" />

            <h3 className="font-bold text-xl mb-3">
              Quality Materials
            </h3>

            <p className="text-slate-400">
              We use premium roofing materials designed for durability and
              weather resistance.
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center text-white">

            <FaCheckCircle className="text-5xl text-orange-500 mx-auto mb-6" />

            <h3 className="font-bold text-xl mb-3">
              Customer Satisfaction
            </h3>

            <p className="text-slate-400">
              Hundreds of satisfied homeowners trust Miami Roofing for quality
              craftsmanship.
            </p>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-black text-orange-500">1500+</h2>
            <p className="mt-3 text-slate-600">Projects Completed</p>
          </div>

          <div>
            <h2 className="text-5xl font-black text-orange-500">20+</h2>
            <p className="mt-3 text-slate-600">Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-black text-orange-500">500+</h2>
            <p className="mt-3 text-slate-600">Happy Clients</p>
          </div>

          <div>
            <h2 className="text-5xl font-black text-orange-500">100%</h2>
            <p className="mt-3 text-slate-600">Satisfaction Guaranteed</p>
          </div>

        </div>

      </section>
    </>
  );
}