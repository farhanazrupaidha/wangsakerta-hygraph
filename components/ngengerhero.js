import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import ReactPlayer from 'react-player';

import VideoSlide from '/components/videoslide';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width:'97%',
  maxWidth:750
}));

export default function Ngenger () {
return (
<Box sx={{m:2}}>
<section id="ngenger" data-stellar-background-ratio="0.5">
 <Typography variant="h4" sx={{textAlign: 'center', mb:2}}> <AccessibilityNewIcon sx={{mr:1, mb:1}} />Ngenger Sekolah Alam Wangsakerta</Typography>
<Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ md: 10 }}
            justifyContent="center"
            alignItems="center"
        >
            <Item>
        <section className="d-share">
            <ReactPlayer url='https://youtu.be/G2G2Nqp0k0A' />
        </section>
                <Button variant="contained" endIcon={<ArrowForwardIcon />} href="/ngenger" color="secondary" sx={{mt:5, borderRadius: 5}}>Testimonial peserta didik selengkapnya</Button>
            </Item>
            <Item>
                <Typography variant="body1" gutterBottom>
                    Ngenger merupakan salah satu program yang digagas oleh Yayasan Wangsakerta dalam lingkup pendidikan melalui penyelenggaraan kegiatan belajar mengajar yang umumnya berlangsung selama tiga bulan.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Hingga bulan Februari 2023 Ngenger Sekolah Alam Wangsakerta telah berhasil menghasilkan tiga angkatan peserta didik yang telah siap untuk turut serta ambil bagian dalam berbagai kegiatan bermasyarakat dalam ruang pedesaan.
                </Typography>
            </Item>
        </Stack>
</section>
</Box>
)
}