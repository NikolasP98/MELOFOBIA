/*jshint esversion:9*/

import React from 'react';
import {Typography} from '@material-ui/core';
import PostsScroller from '../../Components/Posts-scroller/Posts-scroller-component';

export default function DetailView(){
  return (
    <div>
    <div className='latest-post-container'>
    <Typography variant='h4' style={{fontWeight:'600'}}>NEWS</Typography>
    <PostsScroller view='detail'/>
    </div>
    <div className='latest-post-container'>
    <Typography variant='h4' style={{fontWeight:'600'}}>SUMMARIES</Typography>
    <PostsScroller view='detail'/>
    </div>
    <div className='latest-post-container'>
    <Typography variant='h4' style={{fontWeight:'600'}}>CHRONICLES</Typography>
    <PostsScroller view='detail'/>
    </div>
    </div>
  )
}
