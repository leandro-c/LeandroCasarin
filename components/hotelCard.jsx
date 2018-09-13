import React from 'react'
import PropTypes from 'prop-types'
/* import { MdCreate, MdScreenShare } from 'react-icons/lib/md' */
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
/* import DeleteIcon from '@material-ui/icons/Delete' */
/* import TiPencil from 'react-icons/lib/ti/pencil' */
/* import DeleteIcon from 'react-icons/lib/ti/trash' */
import { withStyles, withStylesPropTypes } from '@material-ui/core/styles'; 
import classNames from 'classnames'
import Button from '@material-ui/core/Button';
import { TitleSecondary, TitleH3, Text } from './textH3'
import ImageBackground from './imageBackgroud'
import Popup from "reactjs-popup";
import SimpleCardHotel from './simpleCardHotel'
import Stars from './stars.jsx'

const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };


class ListCard extends React.Component {
	render() {
		const { classes, useDefaultCursor , hotel} = this.props
		return (
			<div className={classNames(classes.global, classes.flexRow, classes.radius)}>
				<div className={classNames(classes.imgHotel)} style={{ width: '100%', maxWidth: 100, overflow: 'hidden' }}>
					<ImageBackground
						minHeight={110}
						elevation={0}
						imageSize="cover"
						alt="Nombre del hotel"
						backgroundImage={hotel.image}
						radius={6}
					/> 
				</div>

				<div className={classNames(classes.displayFlex, { width: '100%' })}>
					<div style={{ padding: 5 }}>
						<Stars />
                        <h3>{hotel.name}</h3>
						<TitleH3 size={14} content={this.props.title} />
						<Text size={11} content={this.props.ciudad} color={'black'} />
						<Text size={11} content={this.props.fecha} color={'gray'} />
                        <TitleSecondary content={'$' + hotel.price} left /> 
                        
					</div>
					<div className={classNames(classes.options)}>
                            <div>
                                <span>Precio por noche por habitacion</span>
                                <h3>{'$' + hotel.price}</h3>
                            </div>
                            <div>
                                <Popup trigger={<Button color="blue">Ver hotel</Button>}  modal contentStyle={contentStyle}>
                                    <div><SimpleCardHotel hotel={hotel}/></div>
                                </Popup>
                            </div>
					</div>
				</div>
			</div>
		)
	}
}
ListCard.defaultProps = {
	title: 'Hotel de ejemplo Buenos Aires',
	ciudad: 'Buenos Aires',
	fecha: 'del: 7/8 al 15/8',
	precio: '1410',
	imageUrl: 'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
}

ListCard.propTypes = {
	title: PropTypes.string,
	ciudad: PropTypes.string,
	fecha: PropTypes.string,
	precio: PropTypes.string,
	imageUrl: PropTypes.string
}

export default withStyles(() => ({
	global: {
		backgroundColor: 'white',
		position: 'relative',
		border: '0.5px solid silver',
		height: 'auto'
	},
	imgHotel: {
		'@media (max-width: 600px)': {
			display: 'none'
		}
	},
	radius: {
		borderRadius: 6,
		overflow: 'hidden'
	},
	flexRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	options: {
		position: 'absolute',
		top: 10,
		right: 10
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'flex-end',
		justifyContent: 'space-between'
	}
}))(ListCard)

