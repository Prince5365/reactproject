import React from "react";
import Navbar from "../components/Navbar";
const About = () => {
  return (
 <>
  
  <Navbar/>

    <div className="min-h-screen bg-linear-to-r from-sky-500 via-indigo-600 to-purple-700 flex items-center justify-center px-6">
      
      <div className="max-w-5xl bg-white rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">
            About DoctorApp
          </h1>

          <p className="text-gray-700 text-lg mb-4">
            DoctorApp is a modern healthcare appointment booking platform
            designed to make your life easier. We help patients connect with
            trusted and experienced doctors in just a few clicks.
          </p>

          <p className="text-gray-700 mb-4">
            Our goal is to provide a smooth, fast and reliable way to book
            doctor appointments without waiting in long queues. Whether you
            need a cardiologist, dermatologist or orthopedic specialist,
            DoctorApp is here for you.
          </p>

          <p className="text-gray-700">
            We believe healthcare should be simple, accessible and
            stress-free for everyone.
          </p>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Doctor"
              className="w-80 h-80 object-cover rounded-full shadow-xl
              border-8 border-indigo-100 animate-pulse"
            />
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2
              bg-indigo-600 text-white px-6 py-2 rounded-full text-sm shadow-lg"
            >
              Trusted Medical Experts
            </div>
          </div>
        </div>

      </div>
    </div>
     </>
  );
};

export default About;

