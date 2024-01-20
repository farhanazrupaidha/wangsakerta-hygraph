import { getAllPostsWithSlug } from 'lib/graphcms'
import Posts from "../posts";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const posts = await getAllPostsWithSlug()  
  const wparticles = Posts;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.yayasanwangsakerta.org</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://www.yayasanwangsakerta.org</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>  
    <url>
        <loc>https://www.yayasanwangsakerta.org/catatanlapangan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url> 
    <url>
        <loc>https://www.yayasanwangsakerta.org/donasi</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>   
    <url>
        <loc>https://www.yayasanwangsakerta.org/ngenger</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url> 
    <url>
        <loc>https://www.yayasanwangsakerta.org/strategi</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>   
    <url>
        <loc>https://www.yayasanwangsakerta.org/catatanlapangan-lama</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>                         
    ${posts.map(({ slug }) => `
    <url>
        <loc>https://www.yayasanwangsakerta.org/posts/${slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    `)
    .join('\n')}    
    ${wparticles.map( post => `     
          <url>
            <loc>https://www.yayasanwangsakerta.org/wparticles/${post.slug}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>  
    `)
    .join('\n')} 
             
</urlset>
`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: { wparticles }} ;
}

export default Sitemap;