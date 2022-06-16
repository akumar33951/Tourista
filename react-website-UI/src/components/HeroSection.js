import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {  Input } from './Input';
import { CustomizedInputBase } from './CustomizedInputBase';

function HeroSection({onChildClick}) {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>Enter city to search destinations!</p>
      <CustomizedInputBase onChildClick={(event)=>onChildClick(event)}>
      </CustomizedInputBase>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
