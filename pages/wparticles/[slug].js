import * as React from 'react';
import Head from "next/head";

import Layout from "/components/layout";
import postStyles from '/components/post-styles.module.css'
import ShareButton from "components/socialsharebutton";
import Posts from "../../posts";
import { getDenormalizedPosts } from "../../utils";

const { motion,useScroll } = require("framer-motion");
import { DiscussionEmbed } from 'disqus-react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from 'next-share'

export default function Post ({ post }) {
  return (
    <Layout>
               <Head
                     defaultTitle="Yayasan Wangsakerta"
                   >
                     <title>{post.title}</title>
                     <meta name="description" content="Mewujudkan masyarakat yang cukup pangan, cukup energi, cukup informasi, dan mampu menentukan diri sendiri." />
                     <meta name="keywords" content="wangsakerta, yayasan wangsakerta, setu patok, konservasi danau setu patok, perkebunan, pertanian" />
                     <meta name="author" content="Yayasan Wangsakerta | https://wangsakerta.org/" />
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
    <Box sx={{m:5}}>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
         {post.title}
              </h1>
            <div
              className={`max-w-4xl mx-auto post ${postStyles.post}`}
              dangerouslySetInnerHTML={{__html:[post.content] }}
            />
  </Box>
<Box sx={{mt:7, m:5}}>
        <center>
        <Divider sx={{mt:5, mb:5, maxWidth:300, width:'95%' }} />
        <Typography variant='h5'>Bagikan</Typography>
        <Box sx={{mb:5, mt:2}}>
        <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{mt:2, mb:4}}
        >
            <ShareButton />
            <TwitterShareButton
                url={`https://yayasanwangsakerta.org/wp-articles/${post.slug}`}
                title={post.title}
            >
            <IconButton size="small">
                <TwitterIcon color="primary" />
            </IconButton>
            </TwitterShareButton>
            <FacebookShareButton
                url={`https://yayasanwangsakerta.org/wp-articles/${post.slug}`}
                quote={post.title}
                hashtag={'#yayasanwangsakerta'}
            >
            <IconButton size="small">
                <FacebookIcon color="primary" />
            </IconButton>
            </FacebookShareButton>
            <WhatsappShareButton
                url={`https://yayasanwangsakerta.org/wp-articles/${post.slug}`}
                title={post.title}
                separator="->"
            >
            <IconButton size="small">
                <WhatsAppIcon color="primary" />
            </IconButton>
            </WhatsappShareButton>
        </Stack>
        </Box>
        <Box sx={{width:'100%', maxWidth:700}}>
        <DiscussionEmbed
            shortname='https-www-wangsakerta-org'
            config={
            {
                url: post.url,
                identifier: post.id,
                title: post.title,
                }
            }
        />
        </Box>
        </center>
        </Box>
  <Divider sx={{ m:5 }}/>
  <Box sx={{m:5}}>
  <Button variant="contained" href="/catatanlapangan-lama" sx={{borderRadius:5}}>
        - Kembali ke Arsip Catatan Lapangan 2017 - 2021
  </Button>
  </Box>
  </Layout>
  );
}


export async function getStaticPaths() {
  const posts = Posts;
  const paths = posts.map((post) => ({
    params: { slug: post.slug.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = getDenormalizedPosts();
  const post = posts.find((p) => p.slug === slug);

  return {
    props: { post }
  };
}