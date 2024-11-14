import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Box, Button, Stack, Divider } from '@mui/material';
import { products } from '../components/products';  // Імпортуємо продукти

function ProductPage() {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <Typography variant="h5" align="center">Продукт не знайдено</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {/* Ліва частина - зображення продукту */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            sx={{ width: '100%', objectFit: 'contain', borderRadius: 2, boxShadow: 2 }}
            image={product.imageUrl}
            alt={product.name}
          />
        </Grid>
        
        {/* Права частина - інформація про продукт */}
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              {product.name}
            </Typography>
            
            {/* Додаткова інформація про продукт */}
            <Stack spacing={2} sx={{ mb: 3 }}>
              <Card sx={{ maxWidth: 500, minHeight: 100, display: 'flex', alignItems: 'center', boxShadow: 2, borderRadius: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 2, width: '100%' }}>
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'bold' }}>
                    Продавець: 
                  </Typography>
                  <img
                    src="https://content1.rozetka.com.ua/sellers/logo_svg/original/187326382.svg"
                    alt="Продавець"
                    style={{ width: 100, height: 100, borderRadius: 2 }}
                  />
                </Stack>
              </Card>
              
              <Card sx={{ maxWidth: 500, boxShadow: 2, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="body2" color={product.isRunningOut ? 'error.main' : 'success.main'} sx={{ fontWeight: 'bold' }}>
                    {product.isRunningOut ? 'Закінчується' : 'В наявності'}
                  </Typography>
                  <Typography variant="h6" color="text.primary" sx={{ mt: 1 }}>
                    {product.price} грн
                  </Typography>

                  {/* Опції покупки */}
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      sx={{ flexGrow: 1, backgroundColor: 'green', color: 'white', borderRadius: 2, '&:hover': { backgroundColor: 'darkgreen' } }}
                    >
                      Купити
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ flexGrow: 1, borderColor: 'green', color: 'green', borderRadius: 2, '&:hover': { borderColor: 'darkgreen', color: 'darkgreen' } }}
                    >
                      Купити в кредит
                    </Button>
                  </Stack>

                  {/* Іконки банків для кредиту */}
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <img
                      src="https://content1.rozetka.com.ua/payments_methods/logo/original/369396776.jpg"
                      alt="Visa"
                      style={{ width: 24, height: 24 }}
                    />
                    <img
                      src="https://content.rozetka.com.ua/payments_methods/logo/original/440740022.jpg"
                      alt="MasterCard"
                      style={{ width: 24, height: 24 }}
                    />
                    <img
                      src="https://content.rozetka.com.ua/payments_methods/logo/original/254248446.jpg"
                      alt="American Express"
                      style={{ width: 24, height: 24 }}
                    />
                    {/* Додайте більше іконок банківських карток за потреби */}
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </CardContent>
          
          {/* Розділ з доставкою */}
          <Card sx={{ maxWidth: 500, boxShadow: 2, borderRadius: 2, mt: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Доставка
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2" color="text.primary">
                <strong>Перевізник:</strong> Нова пошта
              </Typography>
              <Typography variant="body2" color="text.primary">
                <strong>Вартість доставки:</strong> Визначається залежно від адреси
              </Typography>
              <Typography variant="body2" color="text.primary">
                <strong>Термін доставки:</strong> 1-3 дні
              </Typography>
              <Typography variant="body2" color="text.primary">
                <strong>Додаткові умови:</strong> Безкоштовна доставка при покупці від 1000 грн
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Опис продукту */}
      <Typography variant="body1" color="text.secondary" sx={{ mt: 4, p: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
        {product.description || 'Опис не доступний'}
      </Typography>

      {/* Додаткові зображення з рамкою */}
      <Box sx={{ mt: 4, border: '2px solid #ddd', padding: 2, borderRadius: 2 }}>
        <img
          src= {product.photos.photo1}
          alt=""
          style={{ width: '100%', height: 'auto', marginBottom: 16, borderRadius: 2 }}
        />
        <img
          src= {product.photos.photo2}
          alt=""
          style={{ width: '100%', height: 'auto', marginBottom: 16, borderRadius: 2 }}
        />
        <img
          src={product.photos.photo3}
          alt=""
          style={{ width: '100%', height: 'auto', marginBottom: 16, borderRadius: 2 }}
        />
        <img
          src={product.photos.photo4}
          alt=""
          style={{ width: '100%', height: 'auto', marginBottom: 16, borderRadius: 2 }}
        />
        <img
          src={product.photos.photo5}
          alt=""
          style={{ width: '100%', height: 'auto', marginBottom: 16, borderRadius: 2 }}
        />
        <img
          src={product.photos.photo6}
          alt=""
          style={{ width: '100%', height: 'auto', borderRadius: 2 }}
        />
      </Box>
    </Container>
  );
}

export default ProductPage;