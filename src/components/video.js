import React from 'react'
import './video.css';
import teaser from './img/Teaser.mp4'
import { FaRunning, } from "react-icons/fa";
import {AiFillPlayCircle , AiFillCamera}from 'react-icons/ai'
import Fab from "./FAB";



function Video () {
 
  const actions = [
    { label: "sport" ,icon: <FaRunning />, onClick:()=> window.location.replace('./sport')  },
    { label: "sport" ,icon: <FaRunning />, onClick:()=> window.location.replace('./sport1')  },
    { label: "sport" ,icon: <FaRunning />, onClick:()=> window.location.replace('./sport2')  },
    { label: "sport" ,icon: <FaRunning />, onClick:()=> window.location.replace('./sport3')  },
    { label: "sport" ,icon: <FaRunning />, onClick:()=> window.location.replace('./sport4')  },
  ];

      return (
        <div className='back'>
        <video controls loop className='video' preload="auto" autoPlay={true}>
          <source src={teaser} type="video/mp4" />
        </video>
        <Fab actions={actions} />
        </div>
      );
    }
 
  
  export default Video