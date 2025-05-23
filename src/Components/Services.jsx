import React from 'react';
import { Link } from 'react-router-dom'; 
import weddingImg from '../assets/services/wedding.png';
import corporateImg from '../assets/services/corporate.png';
import birthdayImg from '../assets/services/birthday.png';
import collegeImg from '../assets/services/college.png';
import liveImg from '../assets/services/live.png';
import corporate2Img from '../assets/services/corporate2.png';
import heroimage from '../assets/services/bg.jpg';

function Services() {
  const services = [
    { title: "Wedding Events", image: weddingImg, color: "from-pink-200 to-pink-300", link: "/services/wedding" },
    { title: "Corporate Events", image: corporateImg, color: "from-green-100 to-green-300", link: "/services/corporate" },
    { title: "Birthday Parties", image: birthdayImg, color: "from-blue-100 to-blue-300", link: "/services/birthday" },
    { title: "College Fests", image: collegeImg, color: "from-indigo-100 to-indigo-300", link: "/services/college" },
    { title: "Live Shows", image: liveImg, color: "from-cyan-100 to-cyan-300", link: "/services/live" },
    { title: "Corporate Events", image: corporate2Img, color: "from-red-100 to-red-300", link: "/services/corporate2" },
  ];

  return (
    <section
      id="services"
      className="text-center py-20 text-black bg-cover bg-center"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <div className="bg-white/0 py-10 px-6 rounded-3xl backdrop-blur-sm max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <p className="text-md text-gray-700 mb-12 max-w-2xl mx-auto">
          We offer comprehensive event solutions tailored to your needs.
          From concept to execution — we make it happen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden bg-gradient-to-br ${service.color} shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
              <div className="p-6 text-gray-800">
                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                <Link
                  to={service.link}
                  className="inline-block mt-2 px-5 py-2 bg-white text-sm font-medium text-indigo-600 rounded-full shadow hover:bg-indigo-100 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
