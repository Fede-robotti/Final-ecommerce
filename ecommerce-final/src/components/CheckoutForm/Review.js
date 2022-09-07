import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useStateValue } from '../../StateProvider';
import accounting from 'accounting';
import { getBasketTotal } from '../../reducer';
 
let addresses = null;
let payments = null;
const items =  JSON.parse(localStorage.getItem('items'));
const items2 = JSON.parse(localStorage.getItem('items2'));

if(items !=null)
  addresses = [items.address1,items.city, items.state, items.zip, items.country];

  if(items2 != null)
  {
    payments = [
      { name: 'Card holder', detail: items2.titular},
      { name: 'Card number', detail: items2.card},
      { name: 'Expiry date', detail: items2.date},
    ];
  }
  

export default function Review() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basket.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.productType} />
            <Typography variant="body2">{accounting.formatMoney(product.price, "$")}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {accounting.formatMoney(getBasketTotal(basket),"$")}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{items.name + ' ' + items.surname}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}