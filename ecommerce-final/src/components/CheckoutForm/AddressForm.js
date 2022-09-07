import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function AddressForm() {

    const objeto1 = {
      name:"",
      surname:"",
      address1:'',
      address2:'',
      city:'',
      state:'',
      zip:'',
      country:'',
    }

    function setFirstName(e){
      objeto1.name=e.value;
      localStorage.setItem('items', JSON.stringify(objeto1));
    }
    function setLastName(e){
      objeto1.surname=e.value;
      localStorage.setItem('items', JSON.stringify(objeto1));
    }
    function setAddress1(e){
      objeto1.address1=e.value;
      localStorage.setItem('items', JSON.stringify(objeto1));
    }
    function setAddress2(e){
      objeto1.address2=e.value;
      localStorage.setItem('items', JSON.stringify(objeto1));
    }
    function setCity(e){
      objeto1.city=e.value;
      localStorage.setItem('items', JSON.stringify(objeto1));
    }
    function setState(e){
      objeto1.state=e.value;
      localStorage.setItem('items', JSON.stringify(objeto1));
    }
    function setZip(e){
      objeto1.zip=e.value;
      window.localStorage.setItem('items', JSON.stringify(objeto1));
    }
    function setCountry(e){
      objeto1.country=e.value;
      window.localStorage.setItem('items', JSON.stringify(objeto1));
    }
  
    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid   container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField  onChange={(e)=>setFirstName(e.target)}
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="person-name"
          variant="standard"
           />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField onChange={(e)=>setLastName(e.target)}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField onChange={(e)=>setAddress1(e.target)}
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField onChange={(e)=>setAddress2(e.target)}
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField onChange={(e)=>setCity(e.target)}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField onChange={(e)=>setState(e.target)}
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField onChange={(e)=>setZip(e.target)}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField onChange={(e)=>setCountry(e.target)}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}