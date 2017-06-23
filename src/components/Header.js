import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

	render() {
		return (
			<nav className="Nav">
                <h1 className="title">多肉记</h1>
                <ul className="list">
                    <li><a href="###">动态</a></li>
                    <li><a href="###">文章</a></li>
                    <li><a className="current" href="###">相册</a></li>
                    <li><a href="###">问答</a></li>
                    <li><a href="###">图鉴</a></li>
                </ul>
            </nav>
		);
	}
}

export default Header;
