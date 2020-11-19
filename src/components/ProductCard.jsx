import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { appConfig } from '../services/config';
import { CartContext } from '../contexts/cartContext'
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    maxWidth: "90%",
    margin: "auto",
    paddingTop: '56.25%', // 16:9
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function ProductCard({ product }) {
  const classes = useStyles();
  const { photo } = product;
  const { addToCart } = useContext(CartContext)

  return (
    <Card className={classes.root}>
      <CardHeader
        title={product && product.name}
        subheader={product && (product.price + "€")}
      />
      <CardMedia
        className={classes.media}
        image={`${appConfig.apiURL + photo.url}`}
        title={product && product.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => {addToCart(product) }} aria-label="add to Cart">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>
    </Card>
  );
}
