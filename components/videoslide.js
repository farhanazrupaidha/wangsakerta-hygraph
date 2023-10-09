import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import ReactPlayer from 'react-player/youtube';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Galeri () {

  return (
 <Box sx={{mb:10, m:5}}>
<Typography variant="h5" sx={{m:5, mb:2}}>Angkatan ke-3</Typography>
<Splide aria-label="Angkatan ke-1">
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/djNhtYZ8O3E' />
    </section>
  </SplideSlide>   
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/Bc3haa1E1Bg' />
    </section>
  </SplideSlide>  
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/jvgh1hTJ1pM' />
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/3bga3-CVpMc' />
    </section>
  </SplideSlide>
</Splide>

<Typography variant="h5" sx={{m:5, mb:2}}>Angkatan ke-2</Typography>
<Splide aria-label="Angkatan ke-1">
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/2y2cj7P0SDA' />
    </section>
  </SplideSlide>  
  <SplideSlide>
    <section className="d-share">
    <ReactPlayer url='https://youtu.be/ZBDX1fDy_E8' />
    </section>
  </SplideSlide>
</Splide>

<Typography variant="h5" sx={{m:5, mb:2}}>Angkatan ke-1</Typography>
<Splide aria-label="Angkatan ke-1">
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/zyfsxZ93od4' />
    </section>
  </SplideSlide>  
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/RvEFLpkR8hY' />
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/G2G2Nqp0k0A' />
    </section>
  </SplideSlide>
</Splide>

</Box>
  )
}


