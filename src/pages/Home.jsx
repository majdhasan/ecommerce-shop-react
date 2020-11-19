import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { fetchProducts } from '../services/api'
import ProductCard from '../components/ProductCard';

const useStyles = makeStyles(() => ({
    container: {
        padding: '20px',

    }
}));

function Home() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])


    const classes = useStyles();
    return (

        <Grid container className={classes.container} spacing={3}>
            {products.map(product => {
                return (
                    <Grid key={product.id} xs={6} md={4} item>
                        <ProductCard product={product}></ProductCard>
                    </Grid>
                )
            })}
        </Grid>

    )
}

export default Home
