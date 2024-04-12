import FeedList from './FeedList';
import { feedItems } from './data';

import React from 'react'

function Feed() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Users & Officials Feed</h1>
      <FeedList feedItems={feedItems} />
    </div>
  )
}

export default Feed