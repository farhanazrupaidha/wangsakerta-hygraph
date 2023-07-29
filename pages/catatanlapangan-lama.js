// pages/index.js
import Head from 'next/head'
import Link from 'next/link'

import Layout from '/components/layout'
import postStyles from '/components/post-styles.module.css'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home(props, slug) {
  const posts = props.posts;
  return (
  <Layout>
    <div style={{ padding: 30 }}>
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
      <div>
        {posts.map(post =>
          <div
            key={post.id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-5 text-center md:text-left">
             <Link href={`/wp-articles/${slug}`} className="hover:underline">
                {post.title}
            </Link>
            </h3>
            <Box
                    style={{
                        paddingBottom: "0%",
                        maxHeight: "800px",
                        overflow: "auto"
                    }}
            >
            <div
              className={`max-w-4xl mx-auto post ${postStyles.post}`}
              dangerouslySetInnerHTML={{__html:[post.content] }}
            />
            </Box>
          </div>
        )}
      </div>
    </div>
  </Layout>
  )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'catatanlama.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}