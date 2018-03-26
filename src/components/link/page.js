import React from 'react';
import "../../styles/page.css";
import Foots from '../client/foots.js';
import Carousel from './apartment/Carousel'

import fastone from "../../images/index-img-list1.jpg";
import fasttwo from "../../images/index-img-list2.jpg";
import fastthree from "../../images/index-img-list3.jpg";
import fastfour from "../../images/index-img-list4.jpg";

import img1 from '../../images/lun1.gif';
import img2 from '../../images/lun2.gif';
import img3 from '../../images/lun3.gif';
import img4 from '../../images/lun4.gif';

class Page extends React.Component{
	constructor(props){
        super(props);
   	}
	render(){
     let pics = [img1,img2,img3,img4]
	   return(
           <div className="page">
           	  <Carousel />
              <ul className="fast">
                  <li>
                    <img src={fastone} />
                    <div className="fa"></div>
                  </li>
                  <li>
                    <img src={fasttwo} />
                    <div className="fa"></div>
                  </li>
                  <li>
                     <img src={fastthree} />
                     <div className="fa"></div>
                  </li>
                  <li>
                     <img src={fastfour} />
                     <div className="fa"></div>
                  </li>
              </ul>
           </div>
	   	)
	}
}

export default Page;