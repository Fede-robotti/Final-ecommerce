import React from 'react';
import accounting from 'accounting';
import { Button , makeStyles } from '@material-ui/core';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
root: {
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    height:"20vh",
},
button: { 
    marginTop:"2rem",
},
link:{
    textDecoration:'none',
     },

}))
const Total = () => {
    const classes= useStyles()
    const [{basket}, dispatch] = useStateValue();
    
    return(
        <div className={classes.root}>
            <h3 >Total Products :{basket?.length}</h3>
            <h3>{accounting.formatMoney(getBasketTotal(basket),"$")}</h3>
            <Link to="/checkout" className={classes.link}>
            <Button className={classes.button} variant="contained" color ="secondary"> Check out</Button>
            </Link>
        </div>
    )
}

export default Total