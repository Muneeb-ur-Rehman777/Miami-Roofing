import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";

const projects = [
    {
        id: 1,
        image: "/images/projects/project1.jpg",
        title: "Modern Tile Roof",
        location: "Miami Beach",
        type: "Residential",
    },
    {
        id: 2,
        image: "/images/projects/project2.jpg",
        title: "Luxury Home Roofing",
        location: "Coral Gables",
        type: "Replacement",
    },
    {
        id: 3,
        image: "/images/projects/project3.jpg",
        title: "Commercial Flat Roof",
        location: "Downtown Miami",
        type: "Commercial",
    },
    {
        id: 4,
        image: "/images/projects/project4.jpg",
        title: "Storm Damage Repair",
        location: "Hialeah",
        type: "Repair",
    },
    {
        id: 5,
        image: "/images/projects/project5.jpg",
        title: "Metal Roofing",
        location: "Miami Gardens",
        type: "Installation",
    },
    {
        id: 6,
        image: "/images/projects/project6.jpg",
        title: "Luxury Villa",
        location: "Key Biscayne",
        type: "Residential",
    },
];

export default function Projects() {
    return (
        <section className="py-24 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-16">

                    <div>

                        <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
                            Our Projects
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
                            Roofing Projects We're Proud Of
                        </h2>

                        <p className="text-slate-600 mt-6 max-w-2xl leading-8">
                            Every roofing project is completed with precision,
                            premium materials, and unmatched craftsmanship.
                            Browse some of our recent work across South Florida.
                        </p>

                    </div>

                    <Link
                        href="/projects"
                        className="flex items-center gap-3 text-orange-500 font-semibold hover:gap-4 transition-all"
                    >
                        View All Projects

                        <FaArrowRight />
                    </Link>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project) => (

                        <div
                            key={project.id}
                            className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition duration-500"
                        >

                            <div className="relative h-[330px] overflow-hidden">

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />

                                {/* Overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                {/* Badge */}

                                <span className="absolute top-5 left-5 bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                                    Completed
                                </span>

                            </div>

                            <div className="p-8">

                                <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                                    {project.type}
                                </span>

                                <h3 className="text-2xl font-bold mt-5 text-slate-900">
                                    {project.title}
                                </h3>

                                <div className="flex items-center gap-2 mt-4 text-slate-500">

                                    <FaLocationDot className="text-orange-500" />

                                    {project.location}

                                </div>

                                <button className="mt-8 font-semibold text-orange-500 flex items-center gap-3 hover:gap-4 transition-all">

                                    View Details

                                    <FaArrowRight />

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
            {/* Before & After */}

            <div className="mt-28">

                <div className="text-center max-w-3xl mx-auto">

                    <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
                        Before & After
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
                        Transforming Roofs Across Miami
                    </h2>

                    <p className="text-slate-600 leading-8 mt-6">
                        Every roof tells a story. Our experienced team transforms
                        damaged and aging roofs into beautiful, durable roofing
                        systems built to withstand Florida's climate.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-10 mt-16">

                    {/* Before */}

                    <div className="relative rounded-3xl overflow-hidden shadow-xl group">

                        <Image
                            src="/images/projects/before.png"
                            alt="Before Roof Replacement"
                            width={800}
                            height={550}
                            className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-700"
                        />

                        <span className="absolute top-6 left-6 bg-red-500 text-white px-5 py-2 rounded-full font-semibold">
                            BEFORE
                        </span>

                    </div>

                    {/* After */}

                    <div className="relative rounded-3xl overflow-hidden shadow-xl group">

                        <Image
                            src="/images/projects/after.pnggit init"
                            alt="After Roof Replacement"
                            width={800}
                            height={550}
                            className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-700"
                        />

                        <span className="absolute top-6 left-6 bg-green-600 text-white px-5 py-2 rounded-full font-semibold">
                            AFTER
                        </span>

                    </div>

                </div>

            </div>

            {/* Why Our Work Stands Out */}

            <div className="mt-28 bg-slate-900 rounded-3xl p-10 md:p-16">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
                            Why Choose Miami Roofing
                        </p>

                        <h2 className="text-4xl font-black text-white mt-4">
                            Built With Quality. Backed By Experience.
                        </h2>

                        <p className="text-slate-300 leading-8 mt-6">
                            We use premium roofing materials, experienced installers,
                            and industry best practices to ensure every roof lasts for
                            years. From residential homes to commercial buildings,
                            quality is never compromised.
                        </p>

                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">

                        <div className="bg-slate-800 rounded-2xl p-6">

                            <h3 className="text-3xl font-black text-orange-500">
                                20+
                            </h3>

                            <p className="text-white mt-2">
                                Years Experience
                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-6">

                            <h3 className="text-3xl font-black text-orange-500">
                                1500+
                            </h3>

                            <p className="text-white mt-2">
                                Roofs Completed
                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-6">

                            <h3 className="text-3xl font-black text-orange-500">
                                4.9★
                            </h3>

                            <p className="text-white mt-2">
                                Customer Rating
                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-6">

                            <h3 className="text-3xl font-black text-orange-500">
                                100%
                            </h3>

                            <p className="text-white mt-2">
                                Satisfaction Guaranteed
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}