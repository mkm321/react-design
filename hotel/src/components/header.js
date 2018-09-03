import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
	return (
		<header className="header" >
			<img className="logo" src="../images/WebLogo.png" alt="hotel logo"/>
			<div className="middle"></div>
			<Link to="/documentation" className="description">Documentation</Link>
		</header>
	);
}

export default Header;

// <Link to="parent" className="description">Description</Link>