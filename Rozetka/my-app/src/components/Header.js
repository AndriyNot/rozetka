import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Box } from '@mui/material';
import { Search, ShoppingCart, Person } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useFavorites } from './FavoritesContext'; // Імпортуй свій контекст
import FavoriteIcon from '@mui/icons-material/Favorite';

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
}));

function Header() {
  const { favorites } = useFavorites(); // Отримуємо кількість обраних товарів

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#00a046' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            <img src="https://content.rozetka.com.ua/mb_logo/image_site_light_theme/original/458307143.svg" alt="Rozetka Logo" style={{ height: '40px' }} />
          </Typography>
          <SearchBar>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Пошук товарів…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchBar>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="large" color="inherit">
            <Person />
          </IconButton>
          <IconButton size="large" aria-label="cart" color="inherit">
            <Badge badgeContent={favorites.length} color="error"> {/* Використовуємо кількість обраних товарів */}
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton color="inherit" component={Link} to="/favorites">
          <Badge badgeContent={favorites.length} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        </Toolbar>
      </AppBar>

      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src="https://content.rozetka.com.ua/banner_category/image_ua/original/462251372.jpg" alt="Banner 1" />
        </div>
        <div>
          <img src="https://content1.rozetka.com.ua/banner_category/image_ua/original/462164325.jpg" alt="Banner 2" />
        </div>
        <div>
          <img src="https://content2.rozetka.com.ua/banner_category/image_ua/original/462169770.jpg" alt="Banner 3" />
        </div>
        <div>
          <img src="https://content2.rozetka.com.ua/banner_category/image_ua/original/461827422.jpg" alt="Banner 4" />
        </div>
        <div>
          <img src="https://content.rozetka.com.ua/banner_category/image_ua/original/372894824.jpg" alt="Banner 5" />
        </div>
      </Carousel>
    </>
  );
}

export default Header;