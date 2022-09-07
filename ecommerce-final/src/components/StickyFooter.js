import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Fede Robotti '}
      <Link color="inherit" href="https://mui.com/">
        Ecommerce Functional
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: 'flex',
        flexDirection: 'column',
        minHeight: '55vh',
      }}
    >
      <CssBaseline />
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey["#4fc3f7"]
              : theme.palette.grey["#4fc3f7"],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Created By: Federico Robotti Design in React
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}