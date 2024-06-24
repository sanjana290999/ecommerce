import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <FaPhone className="text-2xl text-teal-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Phone Support</h2>
          <p className="text-gray-700">Call us at: +1 123 456 7890</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadowlg">
          <FaEnvelope className="text-2xl text-teal-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Email Support</h2>
          <p className="text-gray-700">Email us at: osam29.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadowlg">
          <FaMapMarkerAlt className="text-2xl text-teal-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Location</h2>
          <p className="text-gray-700">
            2 floor amnora mall hadpsar, pune, maharashtra
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your Message"
              rows="6"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Support Links */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Need More Help?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <a href="#" className="text-teal-600 hover:underline">
              Visit our Help Center
            </a>
          </li>
          <li>
            <a href="#" className="text-teal-600 hover:underline">
              Read our FAQs
            </a>
          </li>
          <li>
            <a href="#" className="text-teal-600 hover:underline">
              Chat with us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
