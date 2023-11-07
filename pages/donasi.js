import React, { Component, useRouter } from 'react';
import Head from 'next/head'
import { useLazyQuery, useQuery, gql } from '@apollo/client';
import withApollo from "../config";
import postStyles from '/components/post-styles.module.css'
import Layout from '/components/layout'
import FormulirDonasi from '/components/form-donasi'

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const DONASI = gql`
  query {
  page(where: {slug: "donasi"}) {
    content {
      html
    }
    title
    subtitle
    slug
    seo {
      description
      keywords
      title
      image {
              url
            }
    }
  }
 }
`;


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const Donasi = ({page}) => {
const { data, loading, error } = useQuery(DONASI);

  if (loading) return null;
  if (error) return `Error! ${error}`;


  return (
<Layout>
                <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>{data.page.seo.title}</title>
                     <meta name="description" content={data.page.seo.description} />
                     <meta name="keywords" content={data.page.seo.keywords} />
                     <meta property="image" content={data.page.seo.image.url} />
                     <meta property="og:title" content={data.page.seo.title} />
                     <meta property="og:description" content={data.page.seo.description} />
                     <meta property="og:site_name" content="Studiofru | Green Project - Tentang" />
                     <meta property="og:image" content={data.page.seo.image.url} />
                      <meta name="og:url" content={`https://yayasanwangsakerta.org/donasi`}/>
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content={data.page.seo.title} />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content={data.page.seo.image.url} />
                </Head>
<section id="about" data-stellar-background-ratio="0.5">
<Box sx={{m:'auto', mt:5}}>
    <Box sx={{mb:10}}>
        <center>
            <Typography variant='h1' color="secondary" sx={{fontWeight:"bold"}}>
                Donasi
            </Typography>
        </center>
    </Box>
  </Box>
</section>
<Box sx={{m:5, mb:10}}>
    <div
      className={`max-w-3xl mx-auto post ${postStyles.post}`}
      dangerouslySetInnerHTML={{ __html: data.page.content?.html }}
    />
    <center>
        <Typography variant="h6" sx={{mb:5, mt:10}}>Silahkan klik link di bawah ini untuk ikut berdonasi</Typography>
        <FormulirDonasi />
    </center>
</Box>
</Layout>
  );
}

export default withApollo(Donasi);