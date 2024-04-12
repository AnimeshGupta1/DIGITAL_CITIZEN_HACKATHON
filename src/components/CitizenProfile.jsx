import React, { useState } from 'react';

// Dummy data for citizen's complaints
const dummyComplaints = [
    {
        id: 1,
        title: "Pothole on Main Street",
        description: "There is a large pothole on Main Street near the intersection with Elm Street. It's causing damage to vehicles.",
        status: "Pending",
        dateSubmitted: "2024-04-15",
        actions: [
            { id: 1, action: "Assigned to maintenance team", date: "2024-04-16" }
        ]
    },
    {
        id: 2,
        title: "Street Light Not Working",
        description: "The street light at the corner of Maple Avenue and Oak Street is not working. It's causing safety concerns at night.",
        status: "In Progress",
        dateSubmitted: "2024-04-12",
        actions: [
            { id: 2, action: "Received", date: "2024-04-12" },
            { id: 3, action: "Assigned to maintenance team", date: "2024-04-13" }
        ]
    },
    {
        id: 3,
        title: "Garbage Dumped in Park",
        description: "Someone has dumped a large amount of garbage in the park near Green Avenue. It's causing environmental pollution.",
        status: "Resolved",
        dateSubmitted: "2024-04-10",
        actions: [
            { id: 4, action: "Received", date: "2024-04-10" },
            { id: 5, action: "Assigned to cleaning team", date: "2024-04-11" },
            { id: 6, action: "Cleaned up", date: "2024-04-12" }
        ]
    }
];

const CitizenProfile = () => {
    const [complaints, setComplaints] = useState(dummyComplaints);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const handleComplaintSubmit = (formData) => {
        console.log("Submitted complaint:", formData);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Citizen Profile</h1>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-4">Submitted Complaints</h2>
                    <ul className="divide-y divide-gray-200">
                        {complaints.map(complaint => (
                            <li key={complaint.id} onClick={() => setSelectedComplaint(complaint)} className="cursor-pointer p-4 hover:bg-gray-100 shadow-md rounded-md">
                                <h3 className="text-lg font-semibold">{complaint.title}</h3>
                                <p className="text-sm text-gray-500">Status: {complaint.status}</p>
                                <p className="text-sm text-gray-500">Date Submitted: {complaint.dateSubmitted}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {selectedComplaint ? (
                        <>
                            <h2 className="text-xl font-bold mb-4">Complaint Details</h2>
                            <div className="border border-gray-200 rounded-md p-4 shadow-md">
                                <h3 className="text-lg font-semibold">{selectedComplaint.title}</h3>
                                <p className="text-sm text-gray-500">Status: {selectedComplaint.status}</p>
                                <p className="text-sm text-gray-500">Date Submitted: {selectedComplaint.dateSubmitted}</p>
                                <p className="text-sm text-gray-500">Description: {selectedComplaint.description}</p>
                                <h4 className="text-sm font-semibold">Actions:</h4>
                                <ul className="divide-y divide-gray-200">
                                    {selectedComplaint.actions.map(action => (
                                        <li key={action.id} className="cursor-pointer p-4 hover:bg-gray-100 shadow-md rounded-md">{action.action} - {action.date}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div className="flex justify-center items-center h-full">
                            <p className="text-gray-500">Select a complaint to view details</p>
                        </div>
                    )}
                </div>
            </div>
            {/* Placeholder for Graph component */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Complaint Status Graph</h2>
                <p>Graph component will go here</p>
            </div>
            {/* Placeholder for ActionsList component */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Actions Taken on Your Complaints</h2>
                <p>ActionsList component will go here</p>
            </div>
            {/* Placeholder for ComplaintForm component */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Submit a New Complaint</h2>
                <p>ComplaintForm component will go here</p>
            </div>
        </div>
    );
};

export default CitizenProfile;
