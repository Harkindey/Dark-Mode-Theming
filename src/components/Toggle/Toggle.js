import React from 'react';
import { func, string } from 'prop-types';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import ToggleContainer from './Toggle.styled';

const Toggle = ({ theme, toggleTheme }) => {
	const isLight = theme === 'light';
	return (
		<ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
			<SunIcon />
			<MoonIcon />
		</ToggleContainer>
	);
};

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};

export default Toggle;
