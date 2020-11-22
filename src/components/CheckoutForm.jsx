import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "20px"
  }
}));



function CheckoutForm({ getFieldProps }) {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.header} variant={"h6"}>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label={"Firstname"} name="firstname" {...getFieldProps('firstname')}></TextField>
          {/* <ErrorMessage name="email" component="div" /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label={"Lastname"} name="lastname" {...getFieldProps('lastname')}></TextField>
          {/* <ErrorMessage name="email" component="div" /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label={"Email"} name="email" {...getFieldProps('email')}></TextField>
          {/* <ErrorMessage name="email" component="div" /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label={"Phone Number"} name="phone" {...getFieldProps('phone')}></TextField>
          {/* <ErrorMessage name="email" component="div" /> */}
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField fullWidth label={"Address"} name="address" {...getFieldProps('address')}></TextField>
          {/* <ErrorMessage name="email" component="div" /> */}
        </Grid>

      </Grid>
    </div>
  )
}

CheckoutForm.propTypes = {
  getFieldProps: PropTypes.func.isRequired,
}

export default CheckoutForm
