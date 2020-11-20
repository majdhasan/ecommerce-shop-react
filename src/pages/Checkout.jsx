import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import CheckoutForm from '../components/CheckoutForm'
import CartDetails from '../components/CartDetails'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { CartContext } from '../contexts/cartContext'
import { fetchProducts, createOrder } from '../services/api'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    button: {
        marginTop: "25px"
    }

});

function Checkout() {

    const { cart } = useContext(CartContext);
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: ""
        },
        validationSchema: Yup.object().shape({
            firstname: Yup.string().required(),
            lastname: Yup.string().required(),
            email: Yup.string().email().required(),
            phone: Yup.string().required(),
            address: Yup.string().required(),
        }),
        onSubmit: async (values) => {
            const { items = [] } = cart;
            const productsId = items.map(item => `id_in=${item.id}`);
            const query = productsId.join("&")
            console.log(query);

            try {
                const products = await fetchProducts(query)
                let total = 0;
                items.forEach(element => {
                    const product = products.find(p => p.id === element.id)
                    total += element.qty * product.price;
                });
                const order = await createOrder({
                    ...values,
                    total
                });
                history.push(`/orders/${order.id}`)
                console.log("order", order);
            } catch (e) {
                console.error(e)
            }

        }
    })
    const { getFieldProps } = formik;
    const history = useHistory();

    return (
        <div>
            <CartDetails>-</CartDetails>
            <CheckoutForm getFieldProps={getFieldProps}></CheckoutForm>

            <Button onClick={formik.handleSubmit}
                className={classes.button}
                fullWidth variant="contained" color="primary"> Continue to Payment</Button>

        </div>
    )
}

export default Checkout
