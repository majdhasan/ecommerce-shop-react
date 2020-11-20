import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PayButton({ total, onSuccess }) {

  const createOrder = async (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    console.log(data);
    await actions.order.capture();
    onSuccess();
  };

  const onUserCancel = () => {
    console.log("User cancelled the transaction");
  }


  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      onCancel={onUserCancel}
    />
  )
}

PayButton.propTypes = {
  total: PropTypes.string.isRequired
}

export default PayButton

