import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

const NavBar = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: 'rgb(105, 156, 214)'}}>
      <Toolbar>
        <Link to={'/'}>
          <StyledAvatar alt='Avatar' src='/cabecalho.png' />
        </Link>
        <Typography
          variant='h5'
          component='div'
          sx={{ flexGrow: 1, marginLeft: '10px', fontWeight: '500'}}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Ultracar</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
