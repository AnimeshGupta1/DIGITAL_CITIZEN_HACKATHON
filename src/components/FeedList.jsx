// FeedList.js

import React from 'react';
import FeedItem from './FeedItem'; // Assuming both components are in the same directory

const FeedList = ({ feedItems }) => {
  return (
    <div>
      {feedItems.map((item, index) => (
        <FeedItem key={index} {...item} />
      ))}
    </div>
  );
};

export default FeedList;
