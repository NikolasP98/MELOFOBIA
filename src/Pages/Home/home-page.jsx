/*jshint esversion :9*/

import React,{useState,useEffect} from 'react';
import {Typography,TextField} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FanFavourites from '../../Components/FanFavourites/FanFavourites-component';
import DetailView from '../../Components/home-detail-view/home-detail-view';
import MosaicView from '../../Components/home-mosaic-view/home-mosaic-view';
import './Home-style.scss';

function HomePage(){
  const [view,setView] = useState('');

  useEffect(()=>{
    if(view===''){
      setView('detail');
    }
  },[view]);

  return(
    <div className='home-container'>
      <div className='fan-favourites-section'>
        <FanFavourites/>
      </div>
      <div className='latest-posts-section'>
        <div className='latest-post-main-container'>
        <div className='latest-post-title'>
        <Typography variant='h3' style={{width:'100%',fontWeight:'600'}}>Latest Posts</Typography>
        <FormControl style={{width:'150px'}}>
                <Select
                value={view}
                onChange={(e)=>setView(e.target.value)}
                defaultValue=''
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    Select View
                  </MenuItem>
                  <MenuItem value='detail'>Detail View</MenuItem>
                  <MenuItem value='mosaic'>Mosaic View</MenuItem>
                </Select>
              </FormControl>
        </div>
        {
          view==='detail'?
          <DetailView/>
          :
          <MosaicView/>
        }
        </div>
      </div>
    </div>
  )
}

export default HomePage;
