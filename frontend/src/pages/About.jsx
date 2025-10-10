import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "react-feather";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <Header />
            <div className="">
                {/* Hero Section */}
                <section className="gradient-bg text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About FAST-C
                        </h1>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Empowering Fernandinos with skills and opportunities
                            through innovative training and digital
                            certification.
                        </p>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="md:flex items-center gap-12 mb-16">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <img
                                    src="picA.png"
                                    alt="Training session"
                                    className="rounded-xl shadow-lg object-cover w-full h-96"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    Our Story
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    The Fernandino Assessment and Skills
                                    Training Center (FAST-C), established by the
                                    City of San Fernando, Pampanga through its
                                    Public Employment Services Office (PESO),
                                    provides accessible technical and vocational
                                    training to empower local workers,
                                    particularly returning Overseas Filipino
                                    Workers (OFWs) and low-income job seekers.
                                </p>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Offering courses in Dressmaking, Massage
                                    Therapy, Welding, IT, and more, FAST-C
                                    equips trainees with verified digital
                                    certificates to enhance employability. Our
                                    mission is to bridge the gap between
                                    training and employment with a modern
                                    digital platform.
                                </p>
                                <Link
                                    to="/register"
                                    className="inline-flex items-center py-3 px-6 border border-gray-300 rounded-lg text-lg font-medium text-gray-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-50"
                                >
                                    Join Now{" "}
                                    <ArrowRight size={20} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-16 bg-zinc-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                            Mission & Vision
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-200 p-8 rounded-xl shadow-sm transform hover:scale-105 transition duration-50">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Mission
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We commit to improve the quality of life of
                                    Fernandinos, regardless of their gender,
                                    age, or physical ability, through the
                                    judicious use of government resources, in
                                    partnership with the private sector and the
                                    active participation of the citizenry.
                                </p>
                            </div>
                            <div className="bg-gray-200 p-8 rounded-xl shadow-sm transform hover:scale-105 transition duration-50">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Vision
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The City of San Fernando (P) will be a model
                                    city in social development where citizens
                                    live in a healthy, safe, and sustainable
                                    environment with sufficient economic
                                    opportunities and rich cultural heritage;
                                    with stronger public governance
                                    institutions, responsible citizenry, and a
                                    smart sustainable city.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-16 bg-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                            How It Works
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "Register",
                                    desc: "Create your account and profile.",
                                },
                                {
                                    step: "Verify",
                                    desc: "Complete verification for secure access.",
                                },
                                {
                                    step: "Enroll Course",
                                    desc: "Choose from a variety of vocational courses.",
                                },
                                {
                                    step: "Get Certificate",
                                    desc: "Earn a verified digital certificate upon completion.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:scale-105 transition duration-50"
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        {item.step}
                                    </h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Us Section */}
                <section className="py-16 bg-zinc-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                            Contact Us
                        </h2>
                        <div className="md:flex gap-12">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <div className="bg-gray-200 p-8 rounded-xl shadow-sm">
                                    <div className="flex items-center mb-6">
                                        <MapPin
                                            size={24}
                                            className="text-blue-600 mr-3 min-w-[24px]"
                                        />
                                        <p className="text-gray-600">
                                            City College Building, Magdalena
                                            Street, San Juan, City of San
                                            Fernando, Pampanga
                                        </p>
                                    </div>
                                    <div className="flex items-center mb-6">
                                        <Phone
                                            size={24}
                                            className="text-blue-600 mr-3 min-w-[24px]"
                                        />
                                        <p className="text-gray-600">
                                            0905-404-2950
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail
                                            size={24}
                                            className="text-blue-600 mr-3 min-w-[24px]"
                                        />
                                        <p className="text-gray-600">
                                            cpesocsfp2023@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.0422953762286!2d120.68331541478368!3d15.028441189463673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2e6e5e7b5d9%3A0x6b8b6b7e7f7b7b7b!2sCity%20College%20of%20San%20Fernando!5e0!3m2!1sen!2sph!4v1695701234567!5m2!1sen!2sph"
                                    className="w-full h-96 rounded-xl shadow-lg"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;
