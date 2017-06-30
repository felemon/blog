import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
	constructor(props){
        super( props );
    }

	render() {
		console.log( this );
		const navs = [
			{
				'path' : '/',
				'name' : '首页'
			},
			// {
			// 	'path' : '/Gallery',
			// 	'name' : '动态'
			// },
			{
				'path' : '/Gallery',
				'name' : '相册'
			},
			// {
			// 	'path' : '/Gallery',
			// 	'name' : '文章'
			// },
			// {
			// 	'path' : '/Gallery',
			// 	'name' : '问答'
			// },
			// {
			// 	'path' : '/Gallery',
			// 	'name' : '图鉴'
			// },
		];

		const navJSX = navs.map( obj => 
			<li key={obj.path}><Link className="current" to={obj.path}>{obj.name}</Link></li>
		);

		return (
			<header className="Nav">
				<h1 className="title">多肉记</h1>
				<nav>
					<ul className="list">
						{navJSX}
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
