import Head from "next/head";
import Layout from "../components/layout";
import * as React from 'react';

import VideoSlide from '/components/videoslide';

import Typography from '@mui/material/Typography';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export default function NgengerSA () {
return (
<Layout>
               <Head
                     defaultTitle="Yayasan Wangsakerta"
                   >
                     <title>Yayasan Wangsakerta</title>
                     <meta name="description" content="Mewujudkan masyarakat yang cukup pangan, cukup energi, cukup informasi, dan mampu menentukan diri sendiri." />
                     <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian" />
                     <meta name="author" content="Yayasan Wangsakerta | https://yayasanwangsakerta.org/" />
                     <meta property="image" content="/images/Wangsakerta - 2.jpg" />
                     <meta property="og:url" content="https://yayasanwangsakerta.org/" />
                     <meta property="og:title" content="Yayasan Wangsakerta" />
                     <meta property="og:description" content="Mewujudkan masyarakat yang cukup pangan, cukup energi, cukup informasi, dan mampu menentukan diri sendiri." />
                     <meta property="og:site_name" content="Yayasan Wangsakerta" />
                     <meta property="og:image" content="/images/Wangsakerta - 2.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Yayasan Wangsakerta" />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content="/images/Wangsakerta - 2.jpg" />
                    <link rel="icon" href="/favicon/logo-wangsakerta.png" />
               </Head>
     <Typography variant="h4" sx={{textAlign: 'center', mb:2, mt:5}}> <AccessibilityNewIcon sx={{mr:1, mb:1}} />Ngenger Sekolah Alam Wangsakerta</Typography>
    <VideoSlide />
</Layout>
)
}