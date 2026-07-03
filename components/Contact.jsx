"use client";

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa6";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Demo Form Submitted!");

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
            Request Your Free Roofing Estimate
          </h2>

          <p className="text-slate-600 mt-6 max-w-2xl mx-auto leading-8">
            Have questions about your roof? Need an inspection or emergency
            repair? Contact our experienced team today.
          </p>

        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left Side */}

          <div className="lg:col-span-2 bg-slate-900 text-white rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
                  <FaPhone />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Call Us
                  </h4>

                  <p className="text-slate-300 mt-1">
                    +1 (305) 555-1234
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>

                  <p className="text-slate-300 mt-1">
                    info@miamiroofing.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
                  <FaLocationDot />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Office
                  </h4>

                  <p className="text-slate-300 mt-1">
                    123 Miami Ave,
                    <br />
                    Miami, FL 33101
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
                  <FaClock />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Working Hours
                  </h4>

                  <p className="text-slate-300 mt-1">
                    Monday - Friday
                    <br />
                    8:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-14 p-6 rounded-2xl bg-slate-800">

              <h4 className="text-xl font-bold mb-3">
                Emergency Roofing?
              </h4>

              <p className="text-slate-300 leading-7">
                Storm damage or roof leak? Our emergency team is available to
                respond quickly and protect your home.
              </p>

            </div>

          </div>

          {/* Right Side */}

          <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg p-10">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="border rounded-xl px-5 py-4 outline-none focus:border-orange-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="border rounded-xl px-5 py-4 outline-none focus:border-orange-500"
                />

              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              >
                <option value="">Select Service</option>
                <option>Roof Repair</option>
                <option>Roof Replacement</option>
                <option>Roof Inspection</option>
                <option>Commercial Roofing</option>
                <option>Storm Damage Repair</option>
              </select>

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-5 py-4 outline-none resize-none focus:border-orange-500"
              />

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}

        <div className="mt-20 rounded-3xl overflow-hidden shadow-lg">

          <iframe
            title="Miami Roofing Location"
            src="https://www.google.com/maps?q=Miami,Florida&output=embed"
            className="w-full h-[450px]"
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
}