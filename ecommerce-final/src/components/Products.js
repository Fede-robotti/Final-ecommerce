import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import products from "../product-data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        { 
         products.map(product =>{
          return ( 
            <Grid   key={product.id} item xs={12} sm={6} md={4} lg={3}>
               <Product product={product}/>
            </Grid>
         )})
        }
      </Grid>
    </div>
  );
}
