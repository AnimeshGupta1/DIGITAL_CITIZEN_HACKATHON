import React from 'react';

function RoutingFeatures() {
  return (
    <div className="text-white py-12 px-6 my-2.5">
      <div className="max-w-3xl mx-auto">
        <div className='flex flex-col md:flex-row items-center justify-evenly space-y-4 md:space-y-0 md:space-x-11'>

          <div className="flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-full mt-4 w-24 h-24" alt="" />
            <hr className="w-1/2 border-gray-300 my-4" />
            <p className="text-lg">Feed</p>
            <button onClick={() => handleFeedClick()} className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-400 hover:text-white transition duration-300">Feed</button>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-full mt-4 w-24 h-24" alt="" />
            <hr className="w-1/2 border-gray-300 my-4" />
            <p className="text-lg">Developments</p>
            <button onClick={() => handleDevelopmentsClick()} className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-400 hover:text-white transition duration-300">Developments</button>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-full mt-4 w-24 h-24" alt="" />
            <hr className="w-1/2 border-gray-300 my-4" />
            <p className="text-lg">Complaint</p>
            <button onClick={() => handleComplaintClick()} className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-400 hover:text-white transition duration-300">Complaint</button>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-full mt-4 w-24 h-24" alt="" />
            <hr className="w-1/2 border-gray-300 my-4" />
            <p className="text-lg">Dashboard</p>
            <button onClick={() => handleDashboardClick()} className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-400 hover:text-white transition duration-300">Dashboard</button>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-full mt-4 w-24 h-24" alt="" />
            <hr className="w-1/2 border-gray-300 my-4" />
            <p className="text-lg">Stats</p>
            <button onClick={() => handleStatsClick()} className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-400 hover:text-white transition duration-300">Stats</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RoutingFeatures;
