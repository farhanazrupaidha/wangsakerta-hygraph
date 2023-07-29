import React, { useEffect } from 'react'
import Head from 'next/head';

import "../styles/index.css";
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { teal, deepOrange, grey, blueGrey, green, cyan, indigo, red } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const { motion,useScroll } = require("framer-motion");

export const white = "#fafafa";
export const black = "#111111";

const getDesignTokens = (mode) => ({
palette: {
            mode,
             ...(mode === 'light'
                  ? {
                      // palette values for light mode
                      primary: {
                              main: '#51A761',
                              primary: blueGrey [200]
                            },
                      secondary: {
                              main: '#690707',
                              primary: cyan [400],
                            },
                      background: {
                              default: teal [900],
                              paper: '#690707',
                              chip: cyan [50],
                              Box: cyan [300]
                            },
                      color: white
                    }
                  : {
                      // palette values for dark mode
                     primary: {
                            main: deepOrange [500],
                            primary: blueGrey [200],
                           },
                     secondary: {
                            main: red [500],
                            primary: '#011C3E',
                           },
                     background: {
                            default: teal [900],
                            paper: teal [800],
                            chip: cyan [50],
                            Box: teal [700],
                           },
                     color: '#4C6AB0'
                    }),
          },
        })



function MyApp({ Component, pageProps }) {
    const theme = useTheme();
    const darkModeTheme = createTheme(getDesignTokens('dark'));


  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;