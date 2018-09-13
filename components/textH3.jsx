import React from 'react'
import PropTypes from 'prop-types'

const funcStyles = props => ({
	global: {
		fontFamily: 'Roboto, sans-serif',
		fontWeight: props.bold ? 'bold' : 'normal',
		fontStyle: props.italic ? 'italic' : 'normal',
		color: props.color ? props.color : 'black',
		textAlign: props.center ? 'center' : props.right ? 'right' : 'left',
		width: '100%',
		display: 'inline-block',
		margin: 0
	},
	h1: {
		fontSize: props.size || 23
	},
	h2: {
		fontWeight: 100,
		fontSize: props.size || 20
	},
	h3: {
		fontSize: props.size || 18
	},
	h4: {
		fontSize: props.size || 16
	},
	h5: {
		fontSize: props.size || 16
	},
	h6: {
		fontSize: props.size || 14
	},
	p: {
		fontSize: props.size || 14,
		fontWeight: 'lighter',
		lineHeight: '20px'
	},
	textLineThrough: {
		textDecoration: props.lineThrough ? 'line-through' : 'none'
	}
})

const defaultProps = {
	size: 14,
	center: false,
	bold: false,
	italic: false,
	color: '',
	right: false,
	lineThrough: false
}

/* eslint-disable */
const propTypes = {
	content: PropTypes.node.isRequired,
	size: PropTypes.number,
	center: PropTypes.bool,
	bold: PropTypes.bool,
	italic: PropTypes.bool,
	right: PropTypes.bool,
	color: PropTypes.string,
	lineThrough: PropTypes.bool
}
/* eslint-enable */

const TitlePrimary = props => {
	const titleStyles = funcStyles(props)
	return (
		<h1
			style={{
				...titleStyles.h1,
				...titleStyles.global
			}}
		>
			{props.content}
		</h1>
	)
}
TitlePrimary.defaultProps = defaultProps
TitlePrimary.propTypes = propTypes

const TitleSecondary = props => {
	const titleStyles = funcStyles(props)
	return (
		<h2
			style={{
				...titleStyles.h2,
				...titleStyles.global
			}}
		>
			{props.content}
		</h2>
	)
}
TitleSecondary.defaultProps = defaultProps
TitleSecondary.propTypes = propTypes

const TitleH3 = props => {
	const titleStyles = funcStyles(props)
	return (
		<h3
			style={{
				...titleStyles.h3,
				...titleStyles.global
			}}
		>
			{props.content}
		</h3>
	)
}
TitleH3.defaultProps = defaultProps
TitleH3.propTypes = propTypes

const TitleH4 = props => {
	const titleStyles = funcStyles(props)
	return (
		<h4
			style={{
				...titleStyles.h3,
				...titleStyles.global
			}}
		>
			{props.content}
		</h4>
	)
}
TitleH4.defaultProps = defaultProps
TitleH4.propTypes = propTypes

const TitleH5 = props => {
	const titleStyles = funcStyles(props)
	return (
		<h5
			style={{
				...titleStyles.h3,
				...titleStyles.global
			}}
		>
			{props.content}
		</h5>
	)
}
TitleH5.defaultProps = defaultProps
TitleH5.propTypes = propTypes

const TitleH6 = props => {
	const titleStyles = funcStyles(props)
	return (
		<h6
			style={{
				...titleStyles.h3,
				...titleStyles.global
			}}
		>
			{props.content}
		</h6>
	)
}
TitleH6.defaultProps = defaultProps
TitleH6.propTypes = propTypes

const Text = props => {
	const titleStyles = funcStyles(props)
	return (
		<p
			style={{
				...titleStyles.p,
				...titleStyles.textLineThrough,
				...titleStyles.global,
				...props.style,
				...props.weight
			}}
		>
			{props.content}
		</p>
	)
}
Text.defaultProps = defaultProps
Text.propTypes = propTypes

export { TitlePrimary, TitleSecondary, TitleH3, TitleH4, TitleH5, TitleH6, Text }

