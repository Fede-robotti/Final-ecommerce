import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/logo.png';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import {useStateValue} from "../StateProvider";
import { auth } from '../firebase';
import { actionTypes } from '../reducer';



const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
    marginBottom: "7rem",  
  },
  appBar:{
    backgroundColor: "#4fc3f7",
    boxShadow:"none",
  },
  grow:{
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
    boxShadow: 'none',
    textTransform: 'none',
    textdecoration: 'inherit',
  },
  image:{
    marginRight:"10px",
    height: "3rem",
  },
  link:{
    textDecoration:'none',
     },
 
}));


export default function Navbar() {
  const classes = useStyles();
  const [{basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();
 
  const handleAuth = () =>{
    if (user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user:null,
      });
      navigate("/")
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to ="/">
          <IconButton>
            <img src={logo}
                alt ="comemerce.js"
                height='25px'
             className={classes.image}/>
          </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h6" color='textPrimary' component ="p">
            Hello {user? user.email : "Guest"}
          </Typography>
          <div  className={classes.button}>
           <Link to="/signin" className={classes.link}>
              <Button   variant="outlined" onClick={handleAuth}>
              <strong>{user ? "Sign Out" : "Sign In"}</strong>
              </Button>
            </Link>
            <Link to="/checkout-page">
              <IconButton aria-label='show cart items' color="inherit">
                <Badge  overlap="rectangular" badgeContent={basket?.length} color='secondary'>
                <ShoppingCart fontSize='large' color='primary' /> 
                </Badge>            
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
