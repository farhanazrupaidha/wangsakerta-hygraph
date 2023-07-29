import Head from "next/head";
import Layout from "../components/layout";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

export default function ResponsiveStack() {
  return (
<Layout>
               <Head
                     defaultTitle="Yayasan Wangsakerta"
                   >
                     <title>Yayasan Wangsakerta</title>
                     <meta name="description" content="Mewujudkan masyarakat yang cukup pangan, cukup energi, cukup informasi, dan mampu menentukan diri sendiri." />
                     <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian" />
                     <meta name="author" content="Yayasan Wangsakerta | https://wangsakerta.org/" />
                     <meta property="image" content="/images/Wangsakerta - 2.jpg" />
                     <meta property="og:url" content="https://wangsakerta.org/" />
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
    <section id="section" data-stellar-background-ratio="0.5">
    <Typography variant="h4" sx={{m:5, mb:2}}> <AllInclusiveIcon sx={{mr:1, mb:1}} />Strategi</Typography>
     <Box sx={{m:5, mb:8}}>
     <Box>
     <Typography variant="h6">Membuat baseline data dan informasi kawasan Ciayumajakuning terutama terkait:</Typography>
                <Typography variant="body1" gutterBottom sx={{m:1, ml:5, mb:5}}>
                    <ul>
                        <ol style={{ listStyleType: 'circle' }}>
                            <li>Pangan dan sumber-sumber pangan</li>
                            <li>Energi dan sumber-sumber energi</li>
                            <li>Air dan sumber-sumber air</li>
                            <li>Situs-situs sejarah dan budaya lokal</li>
                            <li>Pranata kelembagaan lokal dan jaringan komunitas Adat</li>
                        </ol>
                    </ul>
                </Typography>
     </Box>
     <Box>
     <Typography variant="h6">Merintis kegiatan-kegiatan percontohan untuk meningkatkan penghidupan melalui kelompok anak-anak muda:</Typography>
                <Typography variant="body1" gutterBottom sx={{m:1, ml:5, mb:5}}>
                    <ul>
                        <ol style={{ listStyleType: 'circle' }}>
                            <li>Pertanian</li>
                            <li>Energi alternatif</li>
                            <li>Peternakan</li>
                            <li>Pengelolaan sanitasi dan kesehatan lingkungan</li>
                            <li>Pengelolaan sumber-sumber daya air</li>
                        </ol>
                    </ul>
                </Typography>
     </Box>
     <Box>
     <Typography variant="h6">Menggiatkan gerakan pendidikan transformatif dari kalangan kelompok anak-anak muda terkait:</Typography>
                <Typography variant="body1" gutterBottom sx={{m:1, ml:5, mb:5}}>
                    <ul>
                        <ol style={{ listStyleType: 'circle' }}>
                            <li>Teknologi tepat guna</li>
                            <li>Kesadaran lingkungan</li>
                            <li>Organisasi dan kepemimpinan</li>
                        </ol>
                    </ul>
                </Typography>
     </Box>
     <Box>
     <Typography variant="h6">Menata kembali tata ruang Desa, kepemerintahan desa, dan Kawasan:</Typography>
                <Typography variant="body1" gutterBottom sx={{m:1, ml:5, mb:5}}>
                    <ul>
                        <ol style={{ listStyleType: 'circle' }}>
                            <li>Sistem Informasi Desa</li>
                            <li>Koperasi Desa</li>
                            <li>Kerjasama antar kawasan (desa-desa)</li>
                        </ol>
                    </ul>
                </Typography>
     </Box>
     </Box>
    </section>
    </Layout>
  );
}