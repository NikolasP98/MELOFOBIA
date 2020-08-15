/*jshint esversion :9*/

import React from 'react';
import {Typography} from '@material-ui/core';
import FanFavourites from '../../Components/FanFavourites/FanFavourites-component';
import PostsScroller from '../../Components/Posts-scroller/Posts-scroller-component';
import './Home-style.scss';

function HomePage(){
  return(
    <div className='home-container'>
      <div className='fan-favourites-section'>
        <FanFavourites/>
      </div>
      <div className='latest-posts-section'>
        <Typography variant='h3' style={{width:'100%',fontWeight:'600'}}>Latest Posts</Typography>
        <div className='latest-post-container'>
        <Typography variant='h4' style={{fontWeight:'600'}}>NEWS</Typography>
        <PostsScroller/>
        </div>
        <div className='latest-post-container'>
        <Typography variant='h4' style={{fontWeight:'600'}}>SUMMARIES</Typography>
        <PostsScroller/>
        </div>
        <div className='latest-post-container'>
        <Typography variant='h4' style={{fontWeight:'600'}}>CHRONICLES</Typography>
        <PostsScroller/>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
