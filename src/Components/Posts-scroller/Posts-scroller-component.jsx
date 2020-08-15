/*jshint esversion:9*/

import React from 'react';
import PostScrollerPost from '../SubComponents/posts-scroller-post/posts-scroller-post';
import {IconButton} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Posts-scroller-style.scss';

function PostsScroller(){
  return(
    <div className='post-scroller-container'>
    <IconButton className='arrow-btn'>
      <ArrowBackIosIcon/>
    </IconButton>
      <PostScrollerPost/>
      <PostScrollerPost/>
      <PostScrollerPost/>
      <PostScrollerPost/>
      <PostScrollerPost/>
    <IconButton className='arrow-btn'>
      <ArrowForwardIosIcon/>
    </IconButton>
    </div>
  )
}

export default PostsScroller;
