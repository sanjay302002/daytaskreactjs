import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import heroimage from '../assets/services/bg.jpg'

const ContactUs = () => {
  return (
    <div 
       id='ContactUs'
    className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 min-h-screen flex flex-col justify-between">
    {/* //  className="text-center py-20 text-black bg-cover bg-center"
    //          style={{ backgroundImage: `url(${heroimage})` }}> */}

     
     <div className="text-center mt-16 px-4">
  <h2 className="text-4xl font-extrabold mb-8 text-indigo-700 tracking-wide">Get in Touch</h2>

  <div className="bg-white rounded-3xl shadow-xl max-w-3xl mx-auto p-10 border border-indigo-100">
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className="flex flex-col text-left">
        <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
      </div>

      <div className="flex flex-col text-left">
        <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
      </div>

      <div className="flex flex-col text-left md:col-span-2">
        <label htmlFor="number" className="text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
        <input
          type="text"
          id="number"
          placeholder="e.g. +91 98765 43210"
          className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
      </div>

      <div className="md:col-span-2 text-center">
        <button
          type="submit"
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-3 rounded-full shadow-md transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>


      {/* Footer */}
      <footer className="bg-purple-200 mt-20 px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-4">Social Media</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><MdEmail size={20} /> Email</li>
            <li className="flex items-center gap-2"><FaInstagram size={20} /> Instagram</li>
            <li className="flex items-center gap-2"><FaYoutube size={20} /> Youtube</li>
          </ul>
        </div>

        {/* Site Map */}
       <div>
  <h3 className="font-bold mb-4">Site Map</h3>
  <ul className="space-y-2 text-black">
    <li><a href="#home" className="hover:underline">→ Home</a></li>
    <li><a href="#about" className="hover:underline">→ About us</a></li>
    <li><a href="#services" className="hover:underline">→ Services</a></li>
    <li><a href="#ContactUs" className="hover:underline">→ Contact us</a></li>
  </ul>
</div>


        {/* Copyright */}
        <div className="flex items-center justify-center md:col-span-1">
          <p>@2025 copyright</p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold mb-2">About us :</h3>
          <p>
            Eventify is a full-service event management agency specializing in crafting
            personalized, stress-free, and memorable experiences for every occasion.
            From intimate gatherings to grand-scale events, we bring creativity,
            professionalism, and passion to every celebration.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
