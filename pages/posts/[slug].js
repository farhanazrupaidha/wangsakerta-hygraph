import { useRouter } from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms'

const ErrorPage = dynamic(() => import('components/errorpage'), {
  ssr: false,
});
const Container = dynamic(() => import('components/container'));
const PostBody = dynamic(() => import('components/post-body'));
const MoreStories = dynamic(() => import('components/more-stories'), {
  ssr: false,
});
const Header = dynamic(() => import('components/header'), {
  ssr: false,
});
const PostHeader = dynamic(() => import('components/post-header'));
const PostTitle = dynamic(() => import('components/post-title'));
const SectionSeparator = dynamic(() => import('components/section-separator'), {
  ssr: false,
});
const Layout = dynamic(() => import('components/layout'));
const ShareButton = dynamic(() => import('components/socialsharebutton'), {
  ssr: false,
});


const { motion,useScroll } = require("framer-motion");
import { DiscussionEmbed } from 'disqus-react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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
                     defaultTitle="Yayasan Wangsakerta"
                   >
                     <title>{post.title}</title>
                     <meta name="description" content={post.excerpt} />
                     <meta name="keywords" content={post.keywords} />
                     <meta property="image" content={post.coverImage.url} />
                     <meta name="author" content={post.author} /> 
                     <meta property="og:title" content={post.title} />
                     <meta property="og:description" content={post.excerpt} />
                     <meta property="og:site_name" content="Yayasan Wangsakerta" />
                     <meta property="og:image" content={post.coverImage.url} />
                      <meta name="og:url" content={`https://yayasanwangsakerta.org/posts/${post.slug}`}/>
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content={post.title} />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content={post.coverImage.url} />
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
