import React,{Component} from 'react';
import style from './Ada.module.css'

export default class Ada extends Component{
	render(){
		return(
			<div>
				<div className={style.yi}>
					<img src = "" className={style.imgs}/>
					<span className={style.xiang}>详情</span>
					<span className={style.qian}>￥ </span>
					<div className={style.qiang}>立即抢购</div>
				
				</div>
				<div className={style.yi}></div>
				<div className={style.yi}></div>
				<div className={style.yi}></div>
				<div className={style.er}>
					<img src="https://img5.uzaicdn.com/uz/preferential/column/ATT0001126255.jpg"/>
				</div>
			</div>
		)
	}
}