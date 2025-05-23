import React from 'react';
import handshake from '../assets/About/handshake.png';
import goal from '../assets/About/gola.png';

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-gradient-to-r from-purple-50 via-blue-50 to-blue-100 py-20 px-6"
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
        About Us
      </h2>

      <div className="flex flex-col lg:flex-col justify-center items-stretch gap-10 max-w-6xl mx-auto">
        {/* Handshake Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center lg:text-left hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl text-center font-semibold mb-3 text-indigo-600">Who We Are</h3>
          <div className="flex justify-center lg:justify-start mb-6">
            <img src={handshake} alt="Handshake" className="w-28 h-28 object-contain" />
            <p className="text-gray-700 text-md pl-7 pt-8 leading-relaxed">
            Eventify is a full-service event management agency specializing in crafting
            personalized, stress-free, and memorable experiences for every occasion.
            From intimate gatherings to grand-scale events, we bring creativity,
            professionalism, and passion to every celebration.
          </p>
          </div>
        </div>
        

        {/* Goal Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center lg:text-left hover:shadow-2xl transition-shadow duration-300">
         <h3 className="text-xl font-semibold text-center mb-3 text-indigo-600">Our Mission</h3>
          <div className="flex justify-center lg:justify-start mb-6">
            
            <p className="text-gray-700 text-md pl-5 pt-12 pr-10 leading-relaxed">
                        To turn your vision into reality by delivering innovative, seamless, and
                        unforgettable events that exceed expectations.
                    </p>
          <img src={goal} alt="Goal" className="w-28  h-28 pb-10 h-40 object-contain" />
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default About;
