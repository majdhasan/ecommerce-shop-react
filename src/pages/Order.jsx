import React, { useContext, useEffect, useState } from 'react'
import CartDetails from '../components/CartDetails'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { getOrder, setOrderAsPaid } from '../services/api'
import PayButton from '../components/PayButton'

const useStyles = makeStyles({
    button: {
        marginTop: "25px"
    },
    paypal: {
        marginTop: "40px"
    }
});

function Order() {
    const [oderDetails, setOrderDetails] = useState(null)
    const { id } = useParams();
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const order = await getOrder(id)
                setOrderDetails(order)
                console.log(order);
            } catch (e) {
                console.error(e)
            }
        }
        fetchData();
    }, [])

    const handleSuccess = async () => {
        try {
            const result = await setOrderAsPaid(oderDetails._id)
            console.log(result);
        } catch (e) {
            console.error(e)
        }



    }

    return (
        <div>
            <CartDetails />

            <br />
            {oderDetails && <PayButton total={oderDetails.total.toString()} onSuccess={handleSuccess} fullWidth></PayButton>}
        </div>
    )
}

export default Order
