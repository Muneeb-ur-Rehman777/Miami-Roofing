import Image from "next/image";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Contact | Miami Roofing",
  description:
    "Contact Miami Roofing for roof repairs, replacements, inspections, commercial roofing, and free estimates.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}

      <section className="relative h-[420px] flex items-center justify-center">

        <Image
          src="/images/contact/contact-hero.jpg"
          alt="Contact Miami Roofing"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 text-center text-white px-6">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Get Your Free Roofing Estimate
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-slate-300 leading-8">
            Whether you need a roof repair, replacement, inspection, or
            emergency service, our experienced team is ready to help.
          </p>

        </div>

      </section>

      {/* Quick Contact */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-slate-50 rounded-3xl p-8 text-center shadow">

            <h3 className="text-2xl font-bold text-slate-900">
              Call Us
            </h3>

            <p className="mt-4 text-slate-600">
              +1 (305) 555-1234
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl p-8 text-center shadow">

            <h3 className="text-2xl font-bold text-slate-900">
              Email
            </h3>

            <p className="mt-4 text-slate-600">
              info@miamiroofing.com
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl p-8 text-center shadow">

            <h3 className="text-2xl font-bold text-slate-900">
              Office
            </h3>

            <p className="mt-4 text-slate-600">
              123 Miami Ave
              <br />
              Miami, FL 33101
            </p>

          </div>

        </div>

      </section>

      <Contact />

      <CTA />
    </>
  );
}