import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa6";

const testimonials = [
  {
    name: "Michael Johnson",
    city: "Miami",
    text: "Outstanding service! The crew replaced our roof in two days and left everything spotless.",
  },
  {
    name: "Sarah Williams",
    city: "Coral Gables",
    text: "Professional, honest, and reliable. Our new roof looks amazing and the process was stress-free.",
  },
  {
    name: "David Martinez",
    city: "Miami Beach",
    text: "Highly recommend Miami Roofing. Great communication, fair pricing, and excellent workmanship.",
  },
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <FaQuoteLeft className="text-4xl text-orange-500 mb-6" />

              <p className="text-slate-600 leading-8">
                "{item.text}"
              </p>

              <div className="flex gap-1 text-orange-500 mt-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <div className="mt-6">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-slate-500">
                  {item.city}, FL
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}