import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Dummy data for citizen's complaints
const dummyComplaints = [
    {
        id: 1,
        title: "Pothole on Main Street",
        description: "There is a large pothole on Main Street near the intersection with Elm Street. It's causing damage to vehicles.",
        status: "Pending",
        dateSubmitted: "2024-04-15",
        actions: [
            { id: 1, action: "Assigned to maintenance team", date: "2024-04-16", color: "#FFCE56" }
        ]
    },
    {
        id: 2,
        title: "Street Light Not Working",
        description: "The street light at the corner of Maple Avenue and Oak Street is not working. It's causing safety concerns at night.",
        status: "In Progress",
        dateSubmitted: "2024-04-12",
        actions: [
            { id: 2, action: "Received", date: "2024-04-12", color: "#82ca9d" },
            { id: 3, action: "Assigned to maintenance team", date: "2024-04-13", color: "#8884d8" }
        ]
    },
    {
        id: 3,
        title: "Garbage Dumped in Park",
        description: "Someone has dumped a large amount of garbage in the park near Green Avenue. It's causing environmental pollution.",
        status: "Resolved",
        dateSubmitted: "2024-04-10",
        actions: [
            { id: 4, action: "Received", date: "2024-04-10", color: "#FF6384" },
            { id: 5, action: "Assigned to cleaning team", date: "2024-04-11", color: "#4BC0C0" },
            { id: 6, action: "Cleaned up", date: "2024-04-12", color: "#36A2EB" }
        ]
    }
];

const StatusGraph = () => {
    const [complaints, setComplaints] = useState(dummyComplaints);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const handleComplaintSubmit = (formData) => {
        console.log("Submitted complaint:", formData);
    };

    // Function to calculate complaint status count
    const calculateStatusCount = (status) => {
        return complaints.filter(complaint => complaint.status === status).length;
    };

    // Data for the complaint status graph
    const data = [
        { name: 'Pending', count: calculateStatusCount('Pending'), fill: "#FFCE56" },
        { name: 'In Progress', count: calculateStatusCount('In Progress'), fill: "#82ca9d" },
        { name: 'Resolved', count: calculateStatusCount('Resolved'), fill: "#FF6384" }
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Complaint Status Graph</h2>
                <BarChart width={400} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count">
                        {data.map((entry, index) => (
                            <Bar key={`bar-${index}`} fill={entry.fill} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default StatusGraph;
