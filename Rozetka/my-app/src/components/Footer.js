import React from 'react';
import { Toolbar, Button } from '@mui/material';

function Footer() {
  return (
    <Toolbar
      sx={{
        backgroundColor: '#004d40',
        justifyContent: 'center',
        position: 'relative', // Панель залишається на своєму місці в DOM
        height: '60px',
      }}
    >
      <Button sx={{ color: 'white' }}>Послуги</Button>
      <Button sx={{ color: 'white' }}>Контакти</Button>
      <Button sx={{ color: 'white' }}>Акції</Button>
    </Toolbar>
  );
}

export default Footer;