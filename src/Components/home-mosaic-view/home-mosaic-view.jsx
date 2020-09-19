/*jshint esversion:9*/

import React from 'react';
import './home-mosaic-view-style.scss';
import PostScrollerPost from '../SubComponents/posts-scroller-post/posts-scroller-post';

export default function MosaicView(){
  const array = [1,2,3,4,5,6,7,8];
  return(
    <div className='mosaic-container'>
      {array.map(item =>
        <PostScrollerPost view='mosaic'/>
      )
      }
    </div>
  )
}
