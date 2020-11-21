import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { CartContext } from '../contexts/cartContext'
import { useHistory } from 'react-router-dom'
import CartDetails from '../components/CartDetails';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    button: {
        marginTop: "25px"
    }

});


export default function Cart() {
    const { cart } = useContext(CartContext);
    const classes = useStyles();
    const history = useHistory();
    console.log(cart);

    return (
        <div>
            { cart.cartTotal !== 0 ? <CartDetails /> : <Typography className={classes.button} variant={"h5"}>Your Cart is Empty</Typography>}

            { cart.cartTotal !== 0 && <Button onClick={() => { history.push('/checkout') }} className={classes.button} fullWidth variant="contained" color="primary"> Checkout</Button>}
        </div>
    );
}
