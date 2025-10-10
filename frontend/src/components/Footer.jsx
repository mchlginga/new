import { NavLink, Link } from "react-router-dom";
import { Facebook, Mail, Phone, ArrowUp } from "react-feather";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-800 text-white py-8 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-sm opacity-80">
                        Developed for Fernandino Assessment and Skills Training
                        Center (FAST-C), City of San Fernando, Pampanga.
                    </p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a
                            href="mailto:cpesocsfp2023@gmail.com"
                            className="text-gray-400 hover:text-white transition duration-200"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href="tel:0905-404-2950"
                            className="text-gray-400 hover:text-white transition duration-200"
                        >
                            <Phone size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 cursor-pointer"
                aria-label="Back to Top"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    );
};

export default Footer;
