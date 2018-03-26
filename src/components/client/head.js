import React from 'react';
import '../../styles/head.css';
import img1 from "../../images/logo.png";
import {NavLink} from 'react-router-dom';



class Head extends React.Component {
	render(){
		let left=[{'text1':'首页',"path":""},
		{'text1':'了解APP',"path":"App"},
		{'text1':'长租公寓',"path":"apartment"},
		{'text1':'短租民宿',"path":"Short"},
		{'text1':'招募房东',"path":"Recruit"},
		{'text1':'品牌商入口',"path":"Brand"}]

		
		return (
			<div className="hh">
				<div className="head clearfix">
		           <div className="head_left clearfix">
		                  <img src={img1} />
		           </div>
	               <ul className="head_right clearfix">
	                   {
				        left.map((item,index)=>{
				            return(
				                  <li key={index}>
				                    <NavLink to={item.path} activeStyle={{ color: '#e95456' }}>
				                  		{item.text1}
				                    </NavLink>
				                  </li>
				                )
				            })
				        }
	               </ul>
	                <div className="hong"></div>
	            </div>

			</div>
           
			)
	}
}

export default Head;