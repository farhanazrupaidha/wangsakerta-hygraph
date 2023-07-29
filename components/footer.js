import * as React from 'react';
import AppBottomBar from '/components/appbottombar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const useStyles = makeStyles((theme) => ({
  box: {
  backgroundColor: theme.palette.secondary.primary,
  }
}));

export default function Footer () {
const classes = useStyles();

return (
<section id="kontak" data-stellar-background-ratio="0.5">
 <Paper elevation={2}>
 <Box>
         <Stack
             direction={{ xs: 'column', sm: 'row' }}
             spacing={{ md: 10 }}
             justifyContent="center"
             alignItems="center"
         >
         <Typography variant="h4" sx={{textAlign: 'center', mt:10, mb:2}}>Kontak</Typography>
             <Item sx={{maxWidth:500, width:'95%'}}>
                <Typography variant="h6" gutterBottom sx={{mb:2}}>
                    Informasi lebih lanjut
                </Typography>
                <Typography variant="body2" gutterBottom>
                    yayasan.wangsakerta@gmail.com
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Jl. Jeunjing RT 06/RW 01 Dusun Karangdawa, Desa Setu Patok,
                    Kecamatan Mundu, Kabupaten Cirebon 45145
                </Typography>
                <Button variant="contained" href="/kontak" color="secondary" sx={{mt:3, borderRadius: 5}}>Formulir Kontak</Button>
            </Item>
            <Item>
                <Avatar sx={{ width: 300, height: 300, mt:5 }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10886.984895765027!2d108.55607340084904!3d-6.77976016122358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1da16164c79d%3A0x4d6ea82e42c93bbb!2sSekolah%20Alam%20Wangsakerta!5e0!3m2!1sen!2sid!4v1668740483952!5m2!1sen!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Avatar>
            </Item>
         </Stack>
 </Box>

 <Divider sx={{ml:5, mr:5}} />
     <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 5 }}
        justifyContent="center"
        alignItems="left"
      >
        <Item sx={{maxWidth:650, width:'95%'}}>
           <Avatar
                 alt="Yayasan Wangsakerta"
                 src="https://www.datocms-assets.com/84327/1668762503-logo-wangsakerta-2.png"
                 sx={{ width: 56, height: 56, mb:1 }}
               />
          <Typography variant="h6" gutterBottom>
          Yayasan Wangsakerta
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ mt:1 }}>
          Mewujudkan masyarakat yang cukup pangan, cukup energi, cukup informasi, dan mampu menentukan diri sendiri.
          </Typography>
        </Item>
        <Item sx={{maxWidth:230, width:'95%'}}>
            <Typography variant="h6" gutterBottom>
                Profil
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/" underline="hover" color='inherit'>
                    Siapa Kami
                </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/produk" underline="hover" color='inherit'>
                    Produk - Produk
                </Link>
            </Typography>
        </Item>
        <Item sx={{maxWidth:230, width:'95%'}}>
            <Typography variant="h6" gutterBottom>
                Kegiatan
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/strategi" underline="hover" color='inherit'>
                    Strategi Umum
                </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="/catatanlapangan" underline="hover" color='inherit'>
                 Catatan Lapangan
              </Link>
            </Typography>
        </Item>
      </Stack>
  </Paper>
    <AppBottomBar />
</section>
)
}