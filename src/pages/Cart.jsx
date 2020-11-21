import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { CartContext } from '../contexts/cartContext'
import { useHistory } from 'react-router-dom'
import CartDetails from '../components/CartDetails';

const useStyles = makeStyles({
    button: {
        marginTop: "25px"
    }

});


export default function Cart() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <CartDetails />
            <Button onClick={() => { history.push('/checkout') }} className={classes.button} fullWidth variant="contained" color="primary"> Checkout</Button>
        </div>
    );
}
