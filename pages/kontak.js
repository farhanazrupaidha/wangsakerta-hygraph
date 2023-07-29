import Head from "next/head";
import Layout from "../components/layout";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ResponsiveStack() {
  return (
    <Layout>
    <Head>
        <link rel="icon" href="https://www.datocms-assets.com/84327/1668762503-logo-wangsakerta-2.png" />
        <title>Yayasan Wangsakerta</title>
        <meta name="robots" content="noindex, follow" />
    </Head>
    <Box sx={{ maxWidth: 800, m:'auto', mb:10, mt:10, overflow: 'hidden' }}>
    <iframe
             src="https://tally.so/embed/wvXkW0?alignLeft=1&transparentBackground=1&dynamicHeight=1"
             width="100%"
             height="850"
             frameBorder="0"
             marginHeight="0"
             marginWidth="0"
             margin="auto"
             title="Contact">
    </iframe>
    </Box>
    </Layout>
  );
}