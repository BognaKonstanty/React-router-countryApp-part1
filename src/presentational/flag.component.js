import React from 'react';
import '../country.css';

const CountryFlag = (props) => (
	<div className="country-logo-wraper">
		<img className="country-logo" src={props.country.imageUrl} alt ="country photo" />
	</div>
)


export default CountryFlag;