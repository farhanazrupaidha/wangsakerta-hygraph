import * as React from 'react';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import DrawerToggle from "/components/drawer";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };


  return (


<React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Box sx={{ mr:2, display: { xs: 'flex', md: 'none' } }}>
                <DrawerToggle />
            </Box>
            <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                href="/"
                sx={{ mr: 1 }}
            >
                <Avatar
                    alt="Yayasan Wangsakerta"
                    src="/favicon/logo-wangsakerta.png"
                    sx={{width:32, height:32}}
                />
            </IconButton>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    flexGrow: 1
                }}
            >
                Yayasan Wangsakerta
            </Typography>
            <Box sx={{ flexGrow: 0, mr:3, display: { xs: 'none', md: 'flex' } }}>
                <Button
                    onClick={handleCloseNavMenu}
                    href="/strategi"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Strategi Umum
                </Button>
                <Button
                    onClick={handleCloseNavMenu}
                    href="/catatanlapangan"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Catatan Lapangan
                </Button>
                <Button
                    onClick={handleCloseNavMenu}
                    href="/ngenger"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Ngenger
                </Button>
                <Button
                    onClick={handleCloseNavMenu}
                    href="https://studiofrugreenproject.com/lokasi/setu-patok" target="_blank"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Jelajah Ensiklopedia 
                </Button>
                <Button
                    onClick={handleCloseNavMenu}
                    href="/donasi"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Donasi
                </Button>
          </Box>
          <Button variant="contained" href="/kontak" color="secondary" sx={{borderRadius: 5, mr:1}}>kontak</Button>
          </Toolbar>

        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
export default ResponsiveAppBar;