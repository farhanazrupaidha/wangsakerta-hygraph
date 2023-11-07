import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from 'components/container'
import PostBody from 'components/post-body'
import MoreStories from 'components/more-stories'
import Header from 'components/header'
import PostHeader from 'components/post-header'
import SectionSeparator from 'components/section-separator'
import Layout from 'components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms'
import PostTitle from 'components/post-title'
import ShareButton from "components/socialsharebutton";
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'

const { motion,useScroll } = require("framer-motion");
import { DiscussionEmbed } from 'disqus-react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from 'next-share'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const { scrollYProgress } = useScroll();

  return (
    <Layout preview={preview}>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
                <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>{post.seo.title}</title>
                     <meta name="description" content={post.seo.description} />
                     <meta name="keywords" content={post.seo.keywords} />
                     <meta property="image" content={post.seo.image.url} />
                     <meta property="og:title" content={post.title} />
                     <meta property="og:description" content={post.seo.description} />
                     <meta property="og:site_name" content="Studiofru | Green Project" />
                     <meta property="og:image" content={post.seo.image.url} />
                      <meta name="og:url" content={`https://yayasanwangsakerta.org/posts/${post.slug}`}/>
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content={post.seo.title} />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content={post.seo.image.url} />
                </Head>
              <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
              />
              <PostHeader
                title={post.title}
                tags={post.tags}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
        <Box sx={{mt:7}}>
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
                url={`https://yayasanwangsakerta.org/posts/${post.slug}`}
                title={post.title}
            >
            <IconButton size="small">
                <TwitterIcon color="primary" />
            </IconButton>
            </TwitterShareButton>
            <FacebookShareButton
                url={`https://yayasanwangsakerta.org/posts/${post.slug}`}
                quote={post.title}
                hashtag={'#yayasanwangsakerta'}
            >
            <IconButton size="small">
                <FacebookIcon color="primary" />
            </IconButton>
            </FacebookShareButton>
            <WhatsappShareButton
                url={`https://yayasanwangsakerta.org/posts/${post.slug}`}
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
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}
