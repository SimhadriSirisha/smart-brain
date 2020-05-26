import React from 'react';
import Tilt from 'react-tilt';
import brain from './icon.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className="ma4 nt0">
			<Tilt className="Tilt br3 shadow-3" options={{ max : 55 }} style={{ height: 130, width: 130 }} >
				<div className="Tilt-inner pa3"> <img alt='logo' src={brain}/> </div>
			</Tilt>
		</div>
	);
}

export default Logo;