import React from 'react';

const Banner = ({imgPath, altText}) => {
	return (
		<img src={imgPath} alt={altText} className="banner"/>
	);
};

export default Banner;