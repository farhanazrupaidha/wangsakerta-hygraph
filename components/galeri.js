import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/sea-green';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CollectionsIcon from '@mui/icons-material/Collections';

export default function Galeri () {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
 <section id="galeri" data-stellar-background-ratio="0.5">
 <Box sx={{mb:5, mt:5}}>
 <Typography variant="h4" sx={{textAlign: 'center', mb:2}}><CollectionsIcon sx={{mr:1, mb:1}} />Galeri</Typography>
 <Splide aria-label="Galeri">
  <SplideSlide>
    <section className="d-share">
      <Card sx={{ maxWidth: 650, m:'auto', mb:5, textAlign: 'center' }}>
        <CardMedia
            component="img"
            height="140"
            image="/images/Wangsakerta - 9.jpg"
            alt="Yayasan Wangsakerta"
          />
      </Card>
    </section>
  </SplideSlide>   
  <SplideSlide>
    <section className="d-share">
      <Card sx={{ maxWidth: 650, m:'auto', mb:5, textAlign: 'center' }}>
        <CardMedia
            component="img"
            height="140"
            image="/images/Wangsakerta - 1.jpg"
            alt="Yayasan Wangsakerta"
          />
      </Card>
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <Card sx={{ maxWidth: 650, m:'auto', mb:5, textAlign: 'center' }}>
        <CardMedia
            component="img"
            height="140"
            image="/images/Wangsakerta - 2.jpg"
            alt="Yayasan Wangsakerta"
          />
      </Card>
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <Card sx={{ maxWidth: 650, m:'auto', mb:5, textAlign: 'center' }}>
        <CardMedia
            component="img"
            height="140"
            image="/images/Wangsakerta - 3.jpg"
            alt="Yayasan Wangsakerta"
          />
      </Card>
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <Card sx={{ maxWidth: 650, m:'auto', mb:5, textAlign: 'center' }}>
        <CardMedia
            component="img"
            height="140"
            image="/images/Wangsakerta - 4.jpg"
            alt="Yayasan Wangsakerta"
          />
      </Card>
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <Card sx={{ maxWidth: 650, m:'auto', mb:5, textAlign: 'center' }}>
        <CardMedia
            component="img"
            height="140"
            image="/images/Wangsakerta - 5.jpg"
            alt="Yayasan Wangsakerta"
          />
      </Card>
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <Card sx={{ maxWidth: 650, m:'auto', mb:5, textAlign: 'center' }}>
        <CardMedia
            component="img"
            height="140"
            image="/images/Wangsakerta - 6.jpg"
            alt="Yayasan Wangsakerta"
          />
      </Card>
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <Card sx={{ maxWidth: 650, m:'auto', mb:5, textAlign: 'center' }}>
        <CardMedia
            component="img"
            height="140"
            image="/images/Wangsakerta - 7.jpg"
            alt="Yayasan Wangsakerta"
          />
      </Card>
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <Card sx={{ maxWidth: 650, m:'auto', mb:5, textAlign: 'center' }}>
        <CardMedia
            component="img"
            height="140"
            image="/images/Wangsakerta - 8.jpg"
            alt="Yayasan Wangsakerta"
          />
      </Card>
    </section>
  </SplideSlide>
  <SplideSlide>
    <section className="d-share">
      <Card sx={{ maxWidth: 650, m:'auto', mb:5, textAlign: 'center' }}>
        <CardMedia
            component="img"
            height="140"
            image="/images/Wangsakerta - 10.jpg"
            alt="Yayasan Wangsakerta"
          />
      </Card>
    </section>
  </SplideSlide>  
</Splide>
</Box>
</section>
  )
}