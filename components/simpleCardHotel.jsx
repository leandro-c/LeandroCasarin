import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
};

function SimpleCardHotel(props) {
  const { classes , hotel} = props;
  console.log('hotel', hotel.name)
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={hotel.image}
          title="Hotel"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            <span>{hotel.name}</span>
          </Typography>
          <Typography component="p">
            Precio por noche por habitacion
            <p>{hotel.price}</p> 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Ver hotel
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCardHotel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCardHotel);
