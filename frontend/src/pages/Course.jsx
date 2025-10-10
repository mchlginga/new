import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Courses = () => {
    const courses = [
        {
            title: "Dressmaking",
            desc: "Learn to create stylish garments with expert sewing techniques and pattern design, tailored for aspiring fashion creators.",
        },
        {
            title: "Welding",
            desc: "Master metal fabrication and welding skills, preparing you for high-demand industrial and construction roles.",
        },
        {
            title: "Massage Therapy",
            desc: "Develop therapeutic massage techniques to promote wellness and build a career in the growing spa and healthcare industry.",
        },
        {
            title: "Information Technology",
            desc: "Gain essential IT skills, from coding to system administration, to thrive in the digital economy.",
        },
        {
            title: "Pastry and Baking",
            desc: "Craft delicious pastries and baked goods with hands-on training, perfect for culinary entrepreneurs.",
        },
        {
            title: "Electrical Installation",
            desc: "Acquire skills in electrical systems and safety standards, opening doors to opportunities in construction and maintenance.",
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
                            Our Courses
                        </h1>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                            Discover a variety of technical and vocational
                            courses designed to equip you with in-demand skills
                            and verified digital certificates.
                        </p>
                        <Link
                            to="/register"
                            className="inline-flex items-center py-3 px-6 border border-gray-300 rounded-lg text-lg font-medium text-gray-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-50"
                        >
                            Enroll Now <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </section>

                {/* Courses Section */}
                <section className="py-16 bg-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                            Explore Our Courses
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.map((course, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-6 rounded-xl shadow-sm transform hover:scale-105 transition duration-50"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {course.desc}
                                    </p>
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition duration-200"
                                    >
                                        Learn More{" "}
                                        <ArrowRight
                                            size={16}
                                            className="ml-2"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call-to-Action Section */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Join FAST-C today and unlock your potential with our
                            industry-relevant courses and digital
                            certifications.
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

export default Courses;
