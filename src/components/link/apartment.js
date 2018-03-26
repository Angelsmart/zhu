import React from 'react';
import Carousel from './apartment/Carousel'
import '../../styles/apartment.css'

import select1 from "../../images/partner1.jpg"
import select2 from "../../images/partner2.jpg"
import select3 from "../../images/partner3.jpg"
import select4 from "../../images/partner4.jpg"
import select5 from "../../images/partner5.jpg"
import select6 from "../../images/partner6.jpg"
import select7 from "../../images/partner7.jpg"
import select8 from "../../images/partner8.jpg"
import select9 from "../../images/partner9.jpg"
import select10 from "../../images/partner10.jpg"
import select11 from "../../images/partner11.jpg"
import select12 from "../../images/partner12.jpg"

import zhu1 from "../../images/zhudd-code.png"


class Three extends React.Component{
	constructor(props){
        super(props);
        
   	}
	render(){
		let loop = [
		   {"sel":select1},
		   {"sel":select2},
		   {"sel":select3},
		   {"sel":select4},
		   {"sel":select5},
		   {"sel":select6},
		   {"sel":select7},
		   {"sel":select8},
		   {"sel":select9},
		   {"sel":select10},
		   {"sel":select11},
		   {"sel":select12}
		]
	   return(
           <div>
           	 <Carousel />
           	 <div className="selectReason">
                  <h4 className="title-s1">选择住多多的理由</h4>
                  <h5 className="title-en">SELECT REASON</h5>
                  <ul className="select-reason-list">
		            <li>
		                <div className="list-box">
		                    <i className="select-reason-item item1"></i>
		                    <p className="text">品质公寓，全线进驻</p>
		                </div>
		            </li>
		            <li>
		                <div className="list-box">
		                    <i className="select-reason-item item2"></i>
		                    <p className="text">认证实拍，实时更新</p>
		                </div>
		            </li>
		            <li>
		                <div className="list-box">
		                    <i className="select-reason-item item3"></i>
		                    <p className="text">精致装修，配套服务</p>
		                </div>
		            </li>
		            <li>
		                <div className="list-box">
		                    <i className="select-reason-item item4"></i>
		                    <p className="text">促销秒杀，优惠多多</p>
		                </div>
		            </li>
		          </ul>
           	 </div>
             <div className="facilities">
                 <div className="section">
                    <ul>
                    	<li>
                    		<i className="section_icon se1"></i>
                    		<i className="section_line"></i>
                    	</li>
                    	<li>
                    		<i className="section_icon se2"></i>
                    		<i className="section_line"></i>
                    	</li>
                    	<li> 
                    		<i className="section_icon se3"></i>
                    		<i className="section_line"></i>
                    	</li>
                    	<li> 
                    		<i className="section_icon se4"></i>
                    		<i className="section_line"></i>
                    	</li>
                    	<li>
                    		<i className="section_icon se5"></i>
                    		<i className="section_line"></i>
                    	</li>
                    	<li>
                    		<i className="section_icon se6"></i>
                    		<i className="section_line"></i>
                    	</li>
                    	<li>
                    		<i className="section_icon se7"></i>
                    		<i className="section_line"></i>
                    	</li>
                    	<li>
                    		<i className="section_icon se8"></i>
                    	</li>
                    </ul>
                 </div>
             </div>
             <div className="selectReason">
             	 <h4 className="title-s1">合作品牌</h4>
                 <h5 className="title-en">COOPERATION BRAND</h5>
                 <ul className="selectReason_ul">
                    {
                    	loop.map((item,index)=>{
                    		return(
                               <li key={index}><img src={item.sel} /></li>
                    			)
                    	})
                    }
                 </ul>
             </div>
             <div className="industry">
             	 <h4 className="title-s1">行业倡议</h4>
                 <h5 className="title-en">INDUSTRY INITIATIVE</h5>
                 <ul className="industry_ul">
                     <li className="quality1">房屋质量问题无责换租</li>
                     <li className="quality2">退租押金3个工作日返还</li>
                     <li className="quality3">3天不满意退款</li>
                 </ul>
             </div>
             <div className="zhubaCode">
             	 <div className="zhu_center">
                      <img className="app-code" src={zhu1} alt="" />
                      <div className="icon">
			              <a href="/app/zhudduser.apk" className="appdowmload index-android">
			                  <i className="icon-v4 android-icon"></i>
			              </a>
			              <span className="split"> &nbsp;&nbsp;&nbsp;</span>

			              <a className="appdowmload index-ios" href="https://itunes.apple.com/us/app/zhu-duo-duo/id1138606224?l=zh&amp;ls=1&amp;mt=8" target="_blank">
			                  <i className="icon-v4 ios-icon"></i>
			              </a>
		            </div>
             	 </div>
             </div>
           </div>
	   	)
	}
}

export default Three;