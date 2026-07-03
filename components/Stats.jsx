import {
  FaHouse,
  FaUsers,
  FaAward,
  FaShieldHeart,
} from "react-icons/fa6";

const stats = [
  {
    icon: <FaHouse />,
    number: "1,500+",
    title: "Roofs Completed",
  },
  {
    icon: <FaUsers />,
    number: "500+",
    title: "Happy Clients",
  },
  {
    icon: <FaAward />,
    number: "20+",
    title: "Years Experience",
  },
  {
    icon: <FaShieldHeart />,
    number: "100%",
    title: "Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="-mt-20 relative z-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl grid grid-cols-2 lg:grid-cols-4 overflow-hidden">

          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 border border-slate-100 hover:bg-slate-50 transition"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h2 className="text-4xl font-black text-slate-900">
                {item.number}
              </h2>

              <p className="mt-3 text-slate-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}