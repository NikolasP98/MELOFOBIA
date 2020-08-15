/*jshint esversion:9*/

import React from 'react';
import { makeStyles,Typography,Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './article-type-modal-style.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    outline:'none',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign:'center'
  },
}));

export default function ArticleTypeModal({Open,handleSelect,selection}) {
  const classes = useStyles();


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={Open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={Open}>
          <div className={classes.paper}>
            <Typography variant='h5' style={{fontWeight:'bold'}}>What type of article you wanna write?</Typography>
            <Typography variant='subtitle1'>Please select one</Typography>
            <br/>
            <Typography className='option-container'><span className='option' style={{backgroundColor:selection==='News'&&'#E71D36',color:selection==='News'&&'white'}} onClick={()=>handleSelect('News')}>News</span></Typography>
            <Typography className='option-container'><span className='option'  style={{backgroundColor:selection==='Summary'&&'#E71D36',color:selection==='Summary'&&'white'}} onClick={()=>handleSelect('Summary')}>Summary</span></Typography>
            <Typography className='option-container'><span className='option'  style={{backgroundColor:selection==='Chronicle'&&'#E71D36',color:selection==='Chronicle'&&'white'}} onClick={()=>handleSelect('Chronicle')}>Chronicle</span></Typography>
            <Button variant='contained' style={{display:!selection&&'none',backgroundColor:'black',color:'white'}}>Proceed</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
