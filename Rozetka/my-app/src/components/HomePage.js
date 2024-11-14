import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { products } from '../components/products'; // Переконайтесь, що шлях правильний

function HomePage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Головна сторінка
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;