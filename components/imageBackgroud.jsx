import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'


class ImageBackground extends React.PureComponent {
	_isMounted = false

	constructor(props) {
		super(props)
		this.state = { clase: false }
	}

	loadImage = src => {
		if (this._isMounted && !this.state.loaded) {
			const imageObj = new Image()
			imageObj.src = src

			imageObj.onload = () => {
				this.setState({ clase: true, loaded: true })
			}
		}
	}

	componentWillUnmount() {
		this._isMounted = false
		// delete this.imageObj
	}

	componentDidMount() {
		this._isMounted = true
		this.loadImage(this.props.backgroundImage)
	}

	render() {
		const { classes, radiusTr, radiusBr, backgroundImage, minHeight, imageSize, elevation, alt } = this.props

		const imageStyles = {
			globalImageBckground: {
				borderTopRightRadius: radiusTr,
				borderBottomRightRadius: radiusBr,
				width: '100%'
			},
			backgroundImage: {
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: imageSize,
				backgroundPosition: 'center'
			},
			minHeight: {
				minHeight
			},
			elevation: {
				boxShadow: `0 ${elevation}px 4px rgba(0,0,0,0.3)`
			},
			displayFlex: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}
		}

		return (
			<div>
				<div
					alt={alt}
					className={classNames({ [`${classes.image}`]: this.state.clase })}
					style={{
						...imageStyles.globalImageBckground,
						...imageStyles.minHeight,
						...imageStyles.backgroundImage,
						...imageStyles.elevation
					}}
				/>
			</div>
		)
	}
}

ImageBackground.defaultProps = {
	radiusBr: 0,
	radiusTr: 0,
	elevation: 0,
	backgroundImage: null,
	alt: null
}

ImageBackground.propTypes = {
	radiusBr: PropTypes.number,
	radiusTr: PropTypes.number,
	elevation: PropTypes.number,
	alt: PropTypes.string,
	backgroundImage: PropTypes.string,
	minHeight: PropTypes.number.isRequired,
	imageSize: PropTypes.node.isRequired
}

const withStylesProps = styles => Component => props => {
	const Comp = withStyles(styles(props))(Component)
	return <Comp {...props} />
}

const styles = props => ({
	image: {
		backgroundImage: `url(${props.backgroundImage})!important`
	}
})

// export default withStyles(styles)(ImageBackground)
export default withStylesProps(styles)(ImageBackground)

