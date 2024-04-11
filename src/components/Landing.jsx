import React from 'react';
import Footer from './Footer';
import ProblemReportingForm from './ProblemReportingForm';
import CitizenProfile from './CitizenProfile';
import Feed from './Feed';

function Landing() {
  return (
    <div>
      <div className="flex items-center justify-center bg-slate-50">
        <img className="w-20 my-5 rounded-lg" src="https://randomuser.me/api/portraits/men/1.jpg" alt="user" />
        <div className="ml-8  ">
          <h2 className="font-bold mb-1 text-3xl font-semibold">Welcome Back!</h2>
          <h2 className=" text-lg">Type of User</h2>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-12 px-6 my-2.5">
              <div className="max-w-3xl mx-auto">
                  <h1 className="text-4xl font-bold mb-4">Project Vihaan: Empowering Civic Engagement</h1>
                  <p className="text-lg mb-6">Project Vihaan is an innovative platform designed to address civic issues in a streamlined and effective manner, bridging the gap between citizens and government officials. Our mission is to provide a user-friendly interface that enables citizens to report problems, analyze data, predict future trends, and track progress, ultimately fostering positive change in our communities.</p>
                  <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-400 hover:text-white transition duration-300">Learn More</button>
              </div>
      </div>
      <Feed/>
      <Footer />
      
    </div> 
  );
}

export default Landing;
