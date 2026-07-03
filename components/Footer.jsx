import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black text-white">
              Miami
              <span className="text-orange-500"> Roofing</span>
            </h2>

            <p className="mt-6 leading-8">
              Miami Roofing delivers dependable residential and commercial
              roofing services. From roof repairs to complete replacements, our
              experienced team is committed to quality workmanship and customer
              satisfaction.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
              ].map(([name, href]) => (

                <li key={name}>

                  <Link
                    href={href}
                    className="flex items-center gap-3 hover:text-orange-500 transition"
                  >
                    <FaArrowRight className="text-sm" />
                    {name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">

              {[
                "Roof Repair",
                "Roof Replacement",
                "Commercial Roofing",
                "Roof Inspection",
                "Storm Damage Repair",
                "Emergency Roofing",
              ].map((service) => (

                <li
                  key={service}
                  className="flex items-center gap-3"
                >
                  <FaArrowRight className="text-orange-500 text-sm" />
                  {service}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <FaPhone className="text-orange-500 mt-1" />

                <div>

                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <p>(305) 555-1234</p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-orange-500 mt-1" />

                <div>

                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <p>info@miamiroofing.com</p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaLocationDot className="text-orange-500 mt-1" />

                <div>

                  <h4 className="text-white font-semibold">
                    Address
                  </h4>

                  <p>
                    123 Miami Avenue
                    <br />
                    Miami, FL 33101
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Miami Roofing. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              href="#"
              className="hover:text-orange-500 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-orange-500 transition"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}