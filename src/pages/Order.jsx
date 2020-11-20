import React, { useContext, useEffect, useState } from 'react'
import CartDetails from '../components/CartDetails'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { getOrder, setOrderAsPaid } from '../services/api'
import PayButton from '../components/PayButton'
import { Typography } from '@material-ui/core'

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
            setRefresh(refresh + 1)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <CartDetails />
            <br />
            { (oderDetails && oderDetails.status === "paid") && <Typography> Your Order has been paid </Typography>}
            {(oderDetails && oderDetails.status === "pending") && <PayButton total={oderDetails.total.toString()} onSuccess={handleSuccess} fullWidth></PayButton>}
        </div>
    )
}

export default Order
