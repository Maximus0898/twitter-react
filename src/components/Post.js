import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://cdn.pixabay.com/photo/2017/10/30/18/44/hacking-2903156_960_720.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              John Doe{' '}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @johndoe
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p> This is my first tweet</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/Rng7sDG4dkmyWev2qx/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <ShareIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
