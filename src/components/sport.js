import React from "react";
import Iframe from 'react-iframe'
import './sport.css';

function Sport() {
    return(
        <div>
           <a href='./video'>
          <button className="btn">Back</button>
          </a>
            <Iframe url="http://192.168.200.1:8090/"className="iframe" /> 
        </div>
    )
    
}
export default Sport