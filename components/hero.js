import * as React from 'react';
import Image from 'next/image'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { styled } from '@mui/material/styles';

import ReactPlayer from 'react-player';


const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width:'97%',
  maxWidth:750
}));

export default function Hero () {
return (
<main>
  <section id="home" data-stellar-background-ratio="0.5">
    <Box sx={{m:5, mb:5, mt:10}}>
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ md: 7 }}
            justifyContent="center"
            alignItems="center"
        >
    <Item>
        <Image
            src="/images/logo-panjang.png"
            alt="Yayasan Wangsakerta"
            width={250}
            height={70}
    />
            <Typography variant="h5" sx={{mt:1}}>
                Mewujudkan masyarakat yang cukup pangan, cukup energi, cukup informasi, dan mampu menentukan diri sendiri.
            </Typography>
            <Button variant="contained" href="/kontak" color="secondary" sx={{mt:2, borderRadius: 5}}>Mari menanam untuk perubahan</Button>
            <Typography variant="body1" sx={{mt:8, mb:5}}> <MailOutlineIcon sx={{mr:1}} /> yayasan.wangsakerta@gmail.com </Typography>
    </Item>

    <Item>
        <section className="d-share">
            <ReactPlayer url='https://youtu.be/2y2cj7P0SDA' />
        </section>
    </Item>
   </Stack>

  </Box>
 </section>
</main>
)
}