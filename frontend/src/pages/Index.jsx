import { Link } from "react-router-dom";
import {
    ArrowRight,
    UserPlus,
    Eye,
    FileText,
    Shield,
    Search,
    Cpu,
} from "react-feather";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <>
            <Header />
            <div className="">
                {/* Hero Section */}
                <section className="gradient-bg text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Fernandino Assessment & Skills Training
                        </h1>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                            Empowering Fernandinos with modern digital access,
                            verified certificates, and smarter job
                            opportunities.
                        </p>
                        <Link
                            to="/register"
                            className="inline-flex items-center py-3 px-6 border border-gray-300 rounded-lg text-lg font-medium text-gray-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        >
                            Get Started{" "}
                            <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="md:flex items-center gap-12 bg-white rounded-xl shadow-sm p-8">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <img
                                    src="pic.png"
                                    alt="Training session"
                                    className="rounded-xl shadow-lg object-cover w-full h-96"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    About FAST-C
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    FAST-C (Fernandino Assessment and Skills
                                    Training Center) provides accessible,
                                    community-based training in fields like
                                    Dressmaking, Welding, Pastry, IT, and more.
                                    Every course completed earns a verified
                                    digital certificate — a gateway for
                                    employment and career growth.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    A City of San Fernando initiative via PESO,
                                    we support returning OFWs, low-income job
                                    seekers, and local trainees with skills
                                    development and certificates as proof of
                                    competence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                            Core Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <UserPlus size={24} />,
                                    title: "Digital Registration & Profiling",
                                    desc: "Streamlined online registration and comprehensive digital profiles for trainees.",
                                },
                                {
                                    icon: <Eye size={24} />,
                                    title: "Facial Recognition Attendance",
                                    desc: "Secure and automated attendance tracking using facial recognition technology.",
                                },
                                {
                                    icon: <FileText size={24} />,
                                    title: "Automated Certificate Generation",
                                    desc: "Instant digital certificates upon course completion with verification capabilities.",
                                },
                                {
                                    icon: <Shield size={24} />,
                                    title: "Role-Based Access",
                                    desc: "Secure access for Admins, Companies, and Trainees with appropriate permissions.",
                                },
                                {
                                    icon: <Search size={24} />,
                                    title: "Searchable Trainee Profiles",
                                    desc: "Comprehensive profiles with skills, certifications, and training history for employers.",
                                },
                                {
                                    icon: <Cpu size={24} />,
                                    title: "AI-Powered Job Matching",
                                    desc: "Intelligent matching of trainees with relevant job opportunities based on skills.",
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition duration-50"
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6">
                                Our Vision
                            </h2>
                            <p className="text-xl opacity-90 mb-8">
                                Bridging the gap between training and
                                employment, giving every Fernandino trainee a
                                digital identity and connecting them with job
                                opportunities through AI.
                            </p>
                            <Link
                                to="/register"
                                className="inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium bg-white text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                            >
                                Join Now <UserPlus size={20} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Index;
