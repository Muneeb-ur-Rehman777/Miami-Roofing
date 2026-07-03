import Link from "next/link";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl overflow-hidden">

          <div className="px-8 py-16 md:px-16 text-center">

            <p className="uppercase tracking-[5px] text-orange-100 font-semibold">
              Free Roofing Estimate
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-white mt-5">
              Need a New Roof?
            </h2>

            <p className="max-w-2xl mx-auto text-orange-100 mt-6 text-lg leading-8">
              Whether you need roof repair, replacement, or a full inspection,
              our experienced roofing specialists are here to help. Contact us
              today for a free, no-obligation estimate.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <Link
                href="/contact"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-slate-100 transition"
              >
                Get Free Estimate
                <FaArrowRight />
              </Link>

              <a
                href="tel:+13055551234"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-white hover:text-slate-900 transition"
              >
                <FaPhoneAlt />
                (305) 555-1234
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}