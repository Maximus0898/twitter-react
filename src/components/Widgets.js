import React from 'react';
import './Widgets.css';

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={'1391426290239029249'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="jack"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://twitter.com/elonmusk'}
          options={{ text: 'reactjs is amazing', via: 'jack' }}
        />
      </div>
    </div>
  );
};

export default Widgets;
