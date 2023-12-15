import React from 'react';
import { useQuery, gql } from '@apollo/client';
import withApollo from "../config";
import Head from 'next/head'
import Link from 'next/link'

import Layout from "components/layout";
import CoverImage from 'components/cover-image'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const FLORA = gql`
  query {
      posts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        tags
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit:crop,
                width:2000,
                height:1000
              }
            }
          })
        }
      }
  postsConnection {
    aggregate {
      count
    }
  }
  }
`;

const ErrorPage = ({posts, postsConnection}) => {
const { data, loading, error } = useQuery(FLORA);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
<Layout>
                <Head
                     defaultTitle="Yayasan Wangsakerta"
                   >
                     <title>Yayasan Wangsakerta</title>
                     <meta name="description" content="Halaman tidak ditemukan" />
                     <meta name="keywords" content="yayasan wangsakerta, sekolah alam cirebon, setu patok mundu, danau setu patok, konservasi danau" />
                     <meta name="author" content="Yayasan Wangsakerta | https://yayasanwangsakerta.org/" />
                     <meta property="image" content="/images/Wangsakerta - 2.jpg" />
                     <meta property="og:url" content="https://yayasanwangsakerta.org/" />
                     <meta property="og:title" content="Yayasan Wangsakerta" />
                     <meta property="og:description" content="Halaman tidak ditemukan" />
                     <meta property="og:site_name" content="Yayasan Wangsakerta" />
                     <meta property="og:image" content="/images/Wangsakerta - 2.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Yayasan Wangsakerta" />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content="/images/Wangsakerta - 2.jpg" />
                    <link rel="icon" href="/favicon/logo-wangsakerta.png" />
               </Head>

<section id="hero" data-stellar-background-ratio="0.5">
        <center>
            <Box sx={{mt:20, height:'250px'}}>
            <Typography variant='h3' color="#BFCC03" sx={{fontWeight:"bold", height:'100px'}}>
                Halaman tidak ditemukan
            </Typography>
            </Box>
        </center>
</section>


<Stack spacing={{ xs: 2, sm: 3 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center" sx={{m:5}}>
    {data &&
      data.posts.map((item) => (
        <Box sx={{maxWidth:250}} key={item.id}>
          <div className="mb-5">
            <CoverImage slug={item.slug} title={item.title} url={item.coverImage.url} />
          </div>
            <Typography variant="h5" color="secondary" sx={{mb:1}}>
                <Link href={`/posts/${item.slug}`} className="hover:underline">
                    {item.title}
                </Link>
            </Typography>
        </Box>
            ))}
    </Stack>
</Layout>
  )
}

export default withApollo(ErrorPage);