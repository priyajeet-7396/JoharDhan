import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logoImage22 from '../../assets/Johar Dhan.svg';
import logo22 from '../../assets/synergy-logo.png';
import {Link} from 'react-router-dom';
import './Navbar.css';


const pages = ['Agenda', 'Delegates', 'SPONSORSHIP','ABOUT ORGANIZER '];
// , 'Outcome', 'Participants', 'Speakers' add this when pages are ready 




function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="fixed" sx={{ bgcolor: 'white' }}>

      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
          <Typography   
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0rem',
              color: 'green',
              textDecoration: 'none',
            }}
          >
            Johar Dhan
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="green"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page.toLowerCase()}`}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar
  alt="Logo"
  src={logoImage22}
  className="custom-avatar"
  sx={{
    display: { xs: 'flex', md: 'flex' },
    width: 150,
    height: 120,
    marginRight: 1,
    cursor: 'pointer',
  }}
  component="a" // Use the 'component' prop to render as an anchor tag
  href="https://www.synergytechnofin.com/" // Set the external link URL
  target="_blank" // Open the link in a new tab/window
  rel="noopener noreferrer" // Security and performance attributes
/>


          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'green',
              textDecoration: 'none',
            }}
          >
            Johar Dhan
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'green', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
          <a href="https://www.synergytechnofin.com/" target="_blank" rel="noopener noreferrer">
          <Avatar
  alt="Logo"
  src={logo22}
  className="custom-avatar"
  sx={{
    display: { xs: 'flex', md: 'flex' },
    width: 200, // Adjust the width value as desired
    height: 160, // Adjust the height value as desired
    marginRight: 1,
    cursor: 'pointer',
  }}
/>
          </a>
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
