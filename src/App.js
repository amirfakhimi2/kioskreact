import React from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/home';
import Video from './components/video';
import Sport from './components/sport';
import Sport1 from './components/sport1';
import Sport2 from './components/sport2';
import Sport3 from './components/sport3';
import Sport4 from './components/sport4';







const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/video" element={<Video />} />
           <Route path="/sport" element={<Sport />} />
           <Route path="/sport1" element={<Sport1 />} />
           <Route path="/sport2" element={<Sport2 />} />
           <Route path="/sport3" element={<Sport3 />} />
           <Route path="/sport4" element={<Sport4 />} />
        </Routes>
     </>
  );
 };

export default App;