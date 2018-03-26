import React,{Component} from 'react';
import "../../../styles/Carousel.css";

import img1 from '../../../images/lun1.gif';
import img2 from '../../../images/lun2.gif';
import img3 from '../../../images/lun3.gif';
import img4 from '../../../images/lun4.gif';

class Carousel extends Component{
	constructor(props){
        super(props);
        this.state = {
          index:0,
          itm:setInterval(()=>{
            this.setState({
              index:this.state.index+1
            })
            if(this.state.index >= 4){
              this.setState({
                index:0
              })
            }
          },3000)
        }
   	}
   	componentWillUnmount(){
        clearInterval(this.state.itm)
    }
	render(){
		 let pics = [img1,img2,img3,img4]
	   return(
	   	 
           <div className="lunbo_top">
                  {
                    pics.map((item,index)=>{
                      return(
                        <div className="bo" style={{backgroundImage:'url('+ item +')',opacity:this.state.index==index?1:0}} key={index}></div>
                      )
                    })
                  }
            </div>
	   	)
	}
}

export default Carousel;