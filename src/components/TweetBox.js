import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn.pixabay.com/photo/2017/10/30/18/44/hacking-2903156_960_720.jpg" />
          <input type="text" placeholder="What's happening?" />
          <input
            className="tweetBox__imgInput"
            type="text"
            placeholder="Enter image URL "
          />
        </div>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
