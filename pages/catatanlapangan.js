import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { getAllPostsForHome } from '../lib/graphcms'

const Container = dynamic(() => import('components/container'));
const PostPreview = dynamic(() => import('components/post-preview'));
const Layout = dynamic(() => import('components/layout'));
const Paginate = dynamic(() => import('components/paginate'), {
  ssr: false,
});
const Intro = dynamic(() => import('components/intro'), {
  ssr: false,
});
const HeroPost = dynamic(() => import('components/hero-post'));

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Index({ posts, preview }) {

	const [blogPosts, setBlogPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPosts, setTotalPosts] = useState();
	const [postsPerPage] = useState(10);

  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  
	useEffect(() => {
		const fetchBlogPosts = async () => {
			const { posts, postsConnection } = await request(
				'https://api-ap-southeast-2.hygraph.com/v2/clknbgxdh0r7u01t62h320963/master',
				`
			{
				posts (orderBy: date_DESC, first: ${postsPerPage}, skip: ${
					currentPage * postsPerPage - postsPerPage
				}) {
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
                            author {
                              name
                            }
                            seo {
                                  title
                                  description
                                  keywords
                                  image {
                                    url
                                  }
                                }
                          }
				 postsConnection {
					pageInfo {
					  pageSize
					}
				 }
			}
		 `
			);

			setBlogPosts(posts);
			setTotalPosts(postsConnection.pageInfo.pageSize);
		};

		fetchBlogPosts();
	}, [currentPage, postsPerPage]);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage !== Math.ceil(totalPosts / postsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

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
        <Container> 
        <Intro />   
        {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}                      
			{blogPosts ? (
			<Box>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
				{blogPosts.map((blogPost) => (
                   <PostPreview
                     key={blogPost.slug}
                     title={blogPost.title}
                     coverImage={blogPost.coverImage}
                     date={blogPost.date}
                     tags={blogPost.tags}
                     author={blogPost.author}
                     slug={blogPost.slug}
                     excerpt={blogPost.excerpt}
                   />
                   ))}
                 </div>
                 <center>
                 <Paginate
                 postsPerPage={postsPerPage}
                   totalPosts={totalPosts}
                   currentPage={currentPage}
                   paginate={paginate}
                   previousPage={previousPage}
                   nextPage={nextPage}
                  />
               </center>
       </Box>       
			) : (
				<div className="loading">Loading...</div>
			)}
      <Button variant="contained" endIcon={<ArrowForwardIcon />} href="/catatanlapangan-lama" color="secondary"  size="large" sx={{borderRadius: 5, mb:10}}>Arsip Catatan 2017 - 2021</Button>
        </Container>
      </Layout>
    </>
)
};

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || []
  return {
    props: { posts, preview },
  }
}