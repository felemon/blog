import React, { Component } from 'react';
import './index.css';

class Gallery extends Component {

	render() {
		return (
            <div className="P-gallery">   
                <div>
                    <button className="up-btn">上传图片</button>
                    <span>拖动图片到页面上，就可以上传喽~</span>
                </div>
                <ul className="gl-list">
                    <li className="gl-item">
                        <img src="" alt=""/>
                        <span>新建相册</span>
                    </li>
                    <li className="gl-item">
                        <img src="" alt=""/>
                        <span>艾伦</span>
                    </li>
                </ul>
            </div>
		);
	}
}

export default Gallery;
