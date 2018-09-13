import React from 'react'
import PropTypes from 'prop-types'
/* import IconsFont from './IconsFont' */

const Stars = ({ stars, iconSize, color }) => {
	const selected = Array.from(Array(stars).keys())
	const unselected = Array.from(Array(5 - selected.length).keys())

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				width: '100%'
			}}
		>
			{/* {selected.map(item => <IconsFont color="yellow" key={item} iconSize={iconSize} icon="flaticon-favourite" />)}
			{unselected.map(item => <IconsFont color="yellow" key={item} iconSize={iconSize} icon="flaticon-star-3" />)} */}
		</div>
	)
}

Stars.defaultProps = {
	iconSize: null,
	stars: 3,
	color: 'orange'
}

Stars.propTypes = {
	iconSize: PropTypes.number,
	stars: PropTypes.number,
	color: PropTypes.string
}
export default Stars

