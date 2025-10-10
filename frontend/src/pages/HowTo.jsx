import { Link } from "react-router-dom";
import { UserPlus, LogIn, Book, FileText, ArrowRight } from "react-feather";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HowTo = () => {
    const steps = [
        {
            icon: <UserPlus size={24} />,
            title: "Register for an Account",
            desc: "Sign up to create your digital profile and explore our range of vocational courses tailored for your career goals.",
        },
        {
            icon: <LogIn size={24} />,
            title: "Log In to Your Dashboard",
            desc: "Access your trainee dashboard to manage courses, track progress, and view your digital certificates.",
        },
        {
            icon: <Book size={24} />,
            title: "Enroll in a Course",
            desc: "Choose from hands-on courses like Welding, IT, or Dressmaking to gain practical skills for employment.",
        },
        {
            icon: <FileText size={24} />,
            title: "Earn Your Certificate",
            desc: "Complete your course and receive a verified digital certificate to boost your employability.",
        },
    ];

    return (
        <>
            <Header />
            <div className="bg-gray-50">
                {/* Hero Section */}
                <section className="gradient-bg text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            How to Get Started
                        </h1>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                            Follow these simple steps to join FAST-C, enroll in
                            courses, and earn verified digital certificates to
                            kickstart your career.
                        </p>
                        <Link
                            to="/register"
                            className="inline-flex items-center py-3 px-6 border border-gray-300 rounded-lg text-lg font-medium text-gray-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-50"
                        >
                            Start Now <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-16 bg-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                            Your Path to Success
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-6 rounded-xl shadow-sm text-center transform hover:scale-105 transition duration-50"
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call-to-Action Section */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Ready to Take the First Step?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Join FAST-C today and start your journey toward new
                            skills and career opportunities with our seamless
                            digital platform.
                        </p>
                        <Link
                            to="/register"
                            className="inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium bg-white text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-50"
                        >
                            Get Started{" "}
                            <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default HowTo;
