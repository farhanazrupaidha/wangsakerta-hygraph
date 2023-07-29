import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ReactPlayer from 'react-player/youtube';

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
 <Box sx={{mb:10, m:5}}>
 <Typography variant="h5" sx={{m:5, mb:2}}>Angkatan ke-3</Typography>
      <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
                <section className="d-share">
                    <ReactPlayer url='https://youtu.be/djNhtYZ8O3E' />
                </section>
        </div>
        <div className="embla__slide">
                <section className="d-share">
                    <ReactPlayer url='https://youtu.be/Bc3haa1E1Bg' />
                </section>
        </div>
         <div className="embla__slide">
                <section className="d-share">
                    <ReactPlayer url='https://youtu.be/jvgh1hTJ1pM' />
                </section>
         </div>
        <div className="embla__slide">
                <section className="d-share">
                    <ReactPlayer url='https://youtu.be/3bga3-CVpMc' />
                </section>
         </div>
      </div>
    </div>

 <Typography variant="h5" sx={{m:5, mb:2}}>Angkatan ke-2</Typography>
      <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
                <section className="d-share">
                    <ReactPlayer url='https://youtu.be/2y2cj7P0SDA' />
                </section>
        </div>
        <div className="embla__slide">
                <section className="d-share">
                    <ReactPlayer url='https://youtu.be/ZBDX1fDy_E8' />
                </section>
        </div>
      </div>
    </div>

 <Typography variant="h5" sx={{m:5, mb:2}}>Angkatan ke-1</Typography>
      <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
                <section className="d-share">
                    <ReactPlayer url='https://youtu.be/zyfsxZ93od4' />
                </section>
        </div>
        <div className="embla__slide">
                <section className="d-share">
                    <ReactPlayer url='https://youtu.be/RvEFLpkR8hY' />
                </section>
        </div>
         <div className="embla__slide">
                <section className="d-share">
                    <ReactPlayer url='https://youtu.be/G2G2Nqp0k0A' />
                </section>
         </div>
      </div>
    </div>
</Box>
  )
}


