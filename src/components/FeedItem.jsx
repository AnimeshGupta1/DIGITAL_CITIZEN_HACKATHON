// FeedItem.js

import React from 'react';

const FeedItem = ({ user, content, timestamp, upvotes, comments }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4">
      <div className="flex items-center mb-2">
        <img src={user.profilePicture} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
        <span className="font-semibold">{user.name}</span>
        <span className="text-gray-500 text-sm ml-2">{timestamp}</span>
      </div>
      <p className="text-gray-800">{content}</p>
      <div className="flex items-center mt-2">
        <button className="flex items-center text-gray-500 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7 1a1 1 0 011 1v10l-2 2H3a1 1 0 01-1-1V2a1 1 0 011-1h3zM6 14l3 3 3-3V2H6v12z" clipRule="evenodd" />
          </svg>
          {upvotes} Upvotes
        </button>
        <button className="flex items-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 011 1v4h1V3a1 1 0 112 0v4a1 1 0 01-1 1h-3a1 1 0 01-1-1V3a1 1 0 011-1zM4 9a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M5.707 15.293a1 1 0 011.414 0L10 17.586l2.879-2.88a1 1 0 111.415 1.415l-3.5 3.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 010-1.415z" clipRule="evenodd" />
          </svg>
          {comments} Comments
        </button>
      </div>
    </div>
  );
};

export default FeedItem;
