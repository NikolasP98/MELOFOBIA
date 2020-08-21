/*jshint esversion:9*/

import React,{useState} from 'react';
import {Typography,Fade} from '@material-ui/core'
import './posts-scroller-post-style.scss';

function PostsScrollerPost(){

  const [hover,setHover]=useState(false);

  return(
    <div data-content='Hello there!' className='post-container' onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}}>
    <img src='https://images.unsplash.com/photo-1462774603919-1d8087e62cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='img' className='image' />
    </div>
  )
}

export default PostsScrollerPost;
//  <Fade in={hover} className='post-description'><Typography variant='h6' style={{color:'white'}} >Hello there!</Typography></Fade>
