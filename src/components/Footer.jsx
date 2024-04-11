import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white py-1.5 my-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-lg font-semibold">Project Vihaan</p>
                        <p className="text-sm">Empowering Civic Engagement</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Contact Us</p>
                        <ul className="mt-2">
                            <li>Email: contact@projectvihaan.com</li>
                            <li>Phone: +123-456-7890</li>
                            <li>Address: 123 Main Street, City, Country</li>
                        </ul>
                    </div>
                </div>
                <hr className="border-gray-700 my-4" />
                <div className="text-center">
                    <p className="text-sm mb-2">Visit us:</p>
                    {/* Embed Google Maps iframe */}
                    <div className="flex justify-center">
                        <iframe
                            title="Project Vihaan Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.1278951137477!2d-0.12775878422949702!3d51.50735099820547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce0627b17b%3A0xc3d40aeb9d695796!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1634554677586!5m2!1sen!2suk"
                            width="300"
                            height="200"
                            allowFullScreen=""
                            loading="lazy"
                            className="border-gray-700 rounded-lg"
                        ></iframe>
                    </div>
                </div>
                <p className="text-center text-sm mt-4">© 2024 Project Vihaan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
