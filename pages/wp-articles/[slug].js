import * as React from 'react';
import Head from "next/head";

import Layout from "/components/layout";
import postStyles from '/components/post-styles.module.css'

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';



export default function CatatanLama ({post, slug}) {
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
    <Box sx={{m:5}}>
      <Typography variant="h6" color="#E50808" gutterBottom sx={{fontWeight: 'bold', textAlign: 'left', mb:1}}>
         {post.title}
              </Typography>
        <Box sx={{ whiteSpace: 'nowrap', overflowX: 'auto', }}>
                 <Typography variant="h4" color="secondary" gutterBottom sx={{fontWeight: 'bold', textAlign: 'left', lineHeight: 1}}>
                        <a href={`/wp-articles/${slug}`}>
                            {post.title}
                        </a>
                    </Typography>
                    </Box>
            <div
              className={`max-w-4xl mx-auto post ${postStyles.post}`}
              dangerouslySetInnerHTML={{__html:[post.content] }}
            />
  </Box>
  <Divider sx={{ width: '100%', m:'auto' }}/>
  <Box sx={{m:5}}>
  <Button>
    <Link href='/catatanlapangan-lama'>
        - Kembali ke Arsip Catatan Lapangan 2017 - 2021
    </Link>
  </Button>
  </Box>
  </Layout>
  );
}


export const getServerSideProps = async ({ params }) => {
  const postRes = await fetch(
    `${process.env.API_ROOT}/api/staticdata`
  );
  const post = await postRes.json();
  return {
    props: {
      post,
    },
  };
};
