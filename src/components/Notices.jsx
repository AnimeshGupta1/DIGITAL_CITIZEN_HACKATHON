import React, { useState } from 'react';

const NoticeBoard = () => {
    // Dummy data for notices
    const [notices, setNotices] = useState([
        {
            id: 1,
            title: "Public Health Advisory",
            description: "All citizens are advised to follow COVID-19 safety guidelines issued by the health department.",
            datePosted: "2024-04-01"
        },
        {
            id: 2,
            title: "Road Closure",
            description: "Main Street will be closed for maintenance from April 15th to April 20th. Please plan your commute accordingly.",
            datePosted: "2024-04-10"
        },
        {
            id: 3,
            title: "Water Supply Interruption",
            description: "There will be a temporary interruption in water supply on April 12th due to maintenance work.",
            datePosted: "2024-04-05"
        }
    ]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Notice Board</h2>
            <div className="divide-y divide-gray-200">
                {notices.map(notice => (
                    <div key={notice.id} className="py-4">
                        <h3 className="text-lg font-semibold">{notice.title}</h3>
                        <p className="text-sm text-gray-500">Date Posted: {notice.datePosted}</p>
                        <p className="mt-2">{notice.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticeBoard;
