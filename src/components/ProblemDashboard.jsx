import React, { useState, useEffect } from 'react';

const ProblemDashboard = () => {
    // Sample data for demonstration
    const [problems, setProblems] = useState([
        { id: 1, title: 'Pothole on Main Street', status: 'Pending', updates: [] },
        { id: 2, title: 'Street Light Not Working', status: 'In Progress', updates: ['Assigned to maintenance team'] },
        { id: 3, title: 'Garbage Overflowing in Park', status: 'Resolved', updates: ['Cleaned up by sanitation department'] }
    ]);

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Problem Dashboard</h2>
            {problems.map(problem => (
                <div key={problem.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p>Status: <span className={`text-${problem.status === 'Pending' ? 'red' : problem.status === 'Resolved' ? 'green' : 'blue'}-500 font-semibold`}>{problem.status}</span></p>
                    <ul className="list-disc pl-6 mt-2">
                        {problem.updates.map((update, index) => (
                            <li key={index}>{update}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default ProblemDashboard;
