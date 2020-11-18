import React , {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { fetchProducts } from '../services/api'
import {config} from '../services/config'
import ProductCard from '../components/ProductCard';

const useStyles = makeStyles(() => ({
    container: {
        padding: '20px',

    }
}));

function Home() {

    const [products , setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProducts();

        }
    }, [])


    const classes = useStyles();
    return (

        <Grid container className={classes.container} spacing={3}>
          
    
            <Grid xs={12} sm={6} md={4} item>
                <ProductCard></ProductCard>
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
                <ProductCard></ProductCard>
            </Grid>

            <Grid xs={12} sm={6} md={4} item>
                <ProductCard></ProductCard>
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
                <ProductCard></ProductCard>
            </Grid>

            <Grid xs={12} sm={6} md={4} item>
                <ProductCard></ProductCard>
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
                <ProductCard></ProductCard>
            </Grid>
        </Grid>

    )
}

export default Home
