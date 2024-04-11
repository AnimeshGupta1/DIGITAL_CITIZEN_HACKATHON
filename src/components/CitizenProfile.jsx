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

    // Function to handle complaint submission (dummy function for demo purposes)
    const handleComplaintSubmit = (formData) => {
        // For demo purposes, we'll just console log the submitted data
        console.log("Submitted complaint:", formData);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Citizen Profile</h1>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-4">Submitted Complaints</h2>
                    <ul>
                        {complaints.map(complaint => (
                            <li key={complaint.id} onClick={() => setSelectedComplaint(complaint)}>
                                <h3>{complaint.title}</h3>
                                <p>Status: {complaint.status}</p>
                                <p>Date Submitted: {complaint.dateSubmitted}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {selectedComplaint ? (
                        <>
                            <h2 className="text-xl font-bold mb-4">Complaint Details</h2>
                            <div>
                                <h3>{selectedComplaint.title}</h3>
                                <p>Status: {selectedComplaint.status}</p>
                                <p>Date Submitted: {selectedComplaint.dateSubmitted}</p>
                                <p>Description: {selectedComplaint.description}</p>
                                <h4>Actions:</h4>
                                <ul>
                                    {selectedComplaint.actions.map(action => (
                                        <li key={action.id}>
                                            {action.action} - {action.date}
                                        </li>
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
