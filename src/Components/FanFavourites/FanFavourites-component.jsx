/*jshint esversion:9*/

import React,{useState} from 'react';
import {Typography,IconButton} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './FanFavourites-style.scss';

const images=['https://images.unsplash.com/photo-1464800959563-472c0567132f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1597117489038-bba57da6c58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
'https://images.unsplash.com/photo-1476687754667-c144fc3f924d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1137&q=80'
];

function FanFavourites(){
  const [startIndex,setStartIndex] = useState(0);
  const [endIndex,setEndIndex] = useState(1);

  const handleBack = ()=>{
    if(startIndex!==0){
      setStartIndex(prevValue => prevValue-1);
      setEndIndex(prevValue => prevValue-1);
    }
  };

  const handleNext = ()=>{
    if(endIndex!==images.length){
      setStartIndex(prevValue => prevValue+1);
      setEndIndex(prevValue => prevValue+1);
    }
  };

  const changePage = index => {
    setStartIndex(index);
    setEndIndex(index+1);
  };

  return(
    <div className='fan-favourites-container'>
      <div className='fan-favourites-info'>
        <Typography variant='h5' style={{textDecoration:'underline',color:'white'}}>Fan Favourites</Typography>
      </div>
    <div className='fan-favourites-carousel'>
      <IconButton className='arrow-btn' button onClick={handleBack}>
        <ArrowBackIosIcon/>
      </IconButton>
        {images.slice(startIndex,endIndex).map(item =><img className='image1' alt='img1' width='800' height='480' src={item}/> )}
      <IconButton className='arrow-btn' button onClick={handleNext}>
        <ArrowForwardIosIcon/>
      </IconButton>
    </div>
    <div className='fan-favourites-info'>
      <div className='author-info'>
        <Typography variant='h3'>ARTICLE TITLE</Typography>
        <Typography variant='h6'>Author: author name</Typography>
      </div>
      <div style={{width:'30%'}}>
      {images.map((item,index) =>
        <FiberManualRecordIcon onClick={()=>changePage(index)} style={{width:endIndex===index+1?'20px':'10px',cursor:'pointer',marginRight:'10px'}}/>
      )}
      </div>
      <Typography  variant='subtitle2' ><span className='post-category'>News</span></Typography>
    </div>
    </div>
  )
}

export default FanFavourites;
