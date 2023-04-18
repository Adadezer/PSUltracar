import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(105, 156, 214)' }}>
      <Toolbar>
        <StyledAvatar alt="Avatar" src="/cabecalho.png" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '10px' }}>
          Ultracar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
