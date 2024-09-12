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

<Typography variant="h5" sx={{m:5, mb:2}}>Angkatan ke-5</Typography>
<Splide aria-label="Angkatan ke-5">
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/fIhBcjZlah0?si=t4HFaHiHxP4RFBVe' />
    </section>
  </SplideSlide>   
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/BUFcXCvSb_U?si=ko51EuL2PXE6c5Ao' />
    </section>
  </SplideSlide>  
</Splide>

<Typography variant="h5" sx={{m:5, mb:2}}>Angkatan ke-4</Typography>
<Splide aria-label="Angkatan ke-1">
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/Z9bCnI42wpQ?si=bsxSYZd_5m_oEqYr' />
    </section>
  </SplideSlide>   
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/LF1UPqlO93k?si=QMGIX-2EnaH3B-3J' />
    </section>
  </SplideSlide>  
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/0SiSq3hRopA?si=4YyEo85ZQvTL_w_W' />
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/crToASadPi8?si=OWn1zwoj8U_6-AI9' />
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <ReactPlayer url='https://youtu.be/mHtUDEfcNsY?si=YsM520UcPjMuKOT_' />
    </section>
  </SplideSlide>  
</Splide>

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


