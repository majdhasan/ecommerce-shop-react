import React, { useContext, useEffect, useState } from 'react'
import CartDetails from '../components/CartDetails'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { getOrder, setOrderAsPaid } from '../services/api'
import PayButton from '../components/PayButton'
import { Typography } from '@material-ui/core'
import { CartContext } from '../contexts/cartContext'

const useStyles = makeStyles({
    button: {
        marginTop: "25px"
    },
    paypal: {
        marginTop: "40px"
    }
});

function Order() {
    const [refresh, setRefresh] = useState(0)
    const [oderDetails, setOrderDetails] = useState(null)
    const { id } = useParams();
    const { emptyCart } = useContext(CartContext)

    const fetchData = async () => {
        try {
            const order = await getOrder(id)
            setOrderDetails(order)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchData();
    }, [id, refresh])

    const handleSuccess = async () => {
        try {
            const result = await setOrderAsPaid(oderDetails._id)
            emptyCart();
            setRefresh(refresh + 1)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            { (oderDetails && oderDetails.status !== "paid") && <CartDetails />}

            <br />
            { (oderDetails && oderDetails.status === "paid") && <Typography variant={"h4"}> Your Order has been paid </Typography>}
            {(oderDetails && oderDetails.status === "pending") && <PayButton total={oderDetails.total.toString()} onSuccess={handleSuccess} fullWidth></PayButton>}
        </div>
    )
}

export default Order
