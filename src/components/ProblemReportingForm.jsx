import React, { useState } from 'react';

const ProblemReportingForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        evidence: null,
        contactInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            evidence: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend API
        console.log(formData);
        // Reset form after submission
        setFormData({
            title: '',
            description: '',
            evidence: null,
            contactInfo: ''
        });
    };

    return (
        <div className="max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Report a Civic Problem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block font-semibold">Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" required />
                </div>
                <div>
                    <label htmlFor="description" className="block font-semibold">Description</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" required></textarea>
                </div>
                <div>
                    <label htmlFor="evidence" className="block font-semibold">Supporting Evidence</label>
                    <input type="file" id="evidence" name="evidence" onChange={handleFileChange} className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
                </div>
                <div>
                    <label htmlFor="contactInfo" className="block font-semibold">Contact Information</label>
                    <input type="text" id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
};

export default ProblemReportingForm;
