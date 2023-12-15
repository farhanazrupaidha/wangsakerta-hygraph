import Head from 'next/head'
import dynamic from 'next/dynamic'
import { getAllPostsForHomeIndex } from '../lib/graphcms'

const Container = dynamic(() => import('components/container'));
const MoreStories = dynamic(() => import('components/more-stories'), {
  ssr: false,
});
const Layout = dynamic(() => import('components/layout'));

const Hero = dynamic(() => import('components/hero'), {
  ssr: false,
});
const SiapaKami = dynamic(() => import('components/siapakami'), {
  ssr: false,
});
const StrategiPencapaian = dynamic(() => import('components/strategipencapaian'), {
  ssr: false,
});
const Ngenger = dynamic(() => import('components/ngengerhero'), {
  ssr: false,
});
const Galeri = dynamic(() => import('components/galeri'), {
  ssr: false,
});

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Index({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(0)
  return (
    <>
      <Layout preview={preview}>
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
        <Hero />
        <SiapaKami />
        <StrategiPencapaian />
        <Ngenger />
        <Galeri />
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
           <Button variant="contained" endIcon={<ArrowForwardIcon />} href="/catatanlapangan" color="secondary" sx={{borderRadius: 5, mr:1, mb:10}}>Catatan Lapangan selengkapnya</Button>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHomeIndex(preview)) || []
  return {
    props: { posts, preview },
  }
}
