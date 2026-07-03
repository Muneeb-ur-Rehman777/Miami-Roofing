import Image from "next/image";
import Link from "next/link";
import {
    FaArrowRight,
    FaPhone,
    FaShield,
    FaStar,
} from "react-icons/fa6";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background Image */}

            <Image
                src="/images/hero/hero.jpg"
                alt="Miami Roofing"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-slate-950/75" />

            {/* Gradient */}

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

            {/* Content */}

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

                <div className="max-w-3xl">

                    {/* Small Label */}

                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/10">

                        <FaShield className="text-orange-500" />

                        <span className="text-white font-medium">
                            Licensed • Insured • Trusted Across Miami
                        </span>

                    </div>

                    {/* Heading */}

                    <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">

                        Protect Your Home

                        <span className="block text-orange-500">
                            With Miami's Best Roofing Team
                        </span>

                    </h1>

                    {/* Description */}

                    <p className="mt-8 text-slate-300 text-lg leading-8 max-w-2xl">

                        From roof repairs to complete roof replacements,
                        Miami Roofing delivers premium craftsmanship,
                        fast turnaround times, and dependable service
                        for homes and businesses throughout South Florida.

                    </p>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-wrap gap-5">

                        <Link
                            href="/contact"
                            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3"
                        >
                            Free Estimate

                            <FaArrowRight />
                        </Link>

                        <a
                            href="tel:+13055551234"
                            className="border border-white/20 backdrop-blur-md hover:bg-white hover:text-slate-900 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3"
                        >
                            <FaPhone />

                            (305) 555-1234
                        </a>

                    </div>

                    {/* Trust Badges */}

                    <div className="mt-14 flex flex-wrap gap-8">

                        <div className="flex items-center gap-3">

                            <FaStar className="text-orange-400 text-xl" />

                            <div>

                                <h3 className="text-white font-bold">
                                    4.9/5 Rating
                                </h3>

                                <p className="text-slate-400 text-sm">
                                    500+ Happy Clients
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3">

                            <FaShield className="text-orange-400 text-xl" />

                            <div>

                                <h3 className="text-white font-bold">
                                    Licensed & Insured
                                </h3>

                                <p className="text-slate-400 text-sm">
                                    Professional Roofing Experts
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {/* Floating Stats */}

            <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 z-20">

                <div className="space-y-6">

                    {/* Card 1 */}

                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-72 shadow-2xl">

                        <p className="text-slate-300 uppercase tracking-widest text-sm">
                            Projects Completed
                        </p>

                        <h2 className="text-5xl font-black text-white mt-3">
                            1,500+
                        </h2>

                        <p className="text-orange-400 mt-3">
                            Residential & Commercial Roofs
                        </p>

                    </div>

                    {/* Card 2 */}

                    <div className="bg-white rounded-3xl p-6 w-72 shadow-2xl">

                        <p className="uppercase tracking-widest text-slate-500 text-sm">
                            Experience
                        </p>

                        <h2 className="text-5xl font-black text-slate-900 mt-3">
                            20+
                        </h2>

                        <p className="text-orange-500 mt-3">
                            Years Serving Miami
                        </p>

                    </div>

                    {/* Card 3 */}

                    <div className="bg-orange-500 rounded-3xl p-6 w-72 shadow-2xl">

                        <p className="uppercase tracking-widest text-orange-100 text-sm">
                            Customer Rating
                        </p>

                        <h2 className="text-5xl font-black text-white mt-3">
                            4.9★
                        </h2>

                        <p className="text-orange-100 mt-3">
                            Based on Hundreds of Reviews
                        </p>

                    </div>

                </div>

            </div>

            {/* Bottom Statistics */}

            <div className="absolute bottom-0 left-0 w-full z-20">

                <div className="max-w-7xl mx-auto px-6 pb-10">

                    <div className="grid grid-cols-2 lg:grid-cols-4 bg-white rounded-3xl shadow-2xl overflow-hidden">

                        <div className="text-center p-8 border-b lg:border-b-0 lg:border-r">

                            <h3 className="text-4xl font-black text-orange-500">
                                20+
                            </h3>

                            <p className="text-slate-600 mt-2">
                                Years Experience
                            </p>

                        </div>

                        <div className="text-center p-8 border-b lg:border-b-0 lg:border-r">

                            <h3 className="text-4xl font-black text-orange-500">
                                1,500+
                            </h3>

                            <p className="text-slate-600 mt-2">
                                Roofs Installed
                            </p>

                        </div>

                        <div className="text-center p-8 lg:border-r">

                            <h3 className="text-4xl font-black text-orange-500">
                                500+
                            </h3>

                            <p className="text-slate-600 mt-2">
                                Happy Customers
                            </p>

                        </div>

                        <div className="text-center p-8">

                            <h3 className="text-4xl font-black text-orange-500">
                                24/7
                            </h3>

                            <p className="text-slate-600 mt-2">
                                Emergency Service
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* Decorative Blur */}

            <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[160px]" />

            {/* Scroll Indicator */}

            <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex-col items-center">

                <span className="text-white text-sm tracking-[4px] uppercase">
                    Scroll
                </span>

                <div className="mt-3 w-7 h-12 rounded-full border-2 border-white flex justify-center">

                    <div className="w-2 h-2 bg-white rounded-full mt-2 animate-bounce" />

                </div>

            </div>
        </section>

    );
}