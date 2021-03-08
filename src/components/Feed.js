import React from 'react';
import './Feed.css';

import Tweetbox from './TweetBox';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
    </div>
  );
};

export default Feed;
