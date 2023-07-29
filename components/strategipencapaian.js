import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width:'97%',
  maxWidth:750
}));

export default function StrategiPencapaian () {
return (
<section id="strategi" data-stellar-background-ratio="0.5">
 <Box sx={{m:2, mb:8}}>
  <Typography variant="h4" sx={{textAlign: 'center', mb:2}}> <AllInclusiveIcon sx={{mr:1, mb:1}} />Strategi Pencapaian Hasil</Typography>
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ md: 10 }}
            justifyContent="center"
            alignItems="center"
        >
            <Item>
                <Typography variant="body1" gutterBottom sx={{m:1}}>
                    <ul>
                        <ol style={{ listStyleType: 'circle' }}>
                            <li>
                                Pengambilan posisi strategis: Wangsakerta menjadi tempat belajar dan pangkalan bagi kelompok-kelompok masyarakat, terutama kelompok-kelompok anak muda, kelompok perempuan, lembaga pendidikan dan lembaga kebudayaan dalam hal pembangunan kapasitas dan jaringan melalui mobilisasi sumberdaya mereka untuk pemberdayaan masyarakat.
                            </li>
                            </ol>
                    </ul>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <ul>
                        <ol style={{ listStyleType: 'circle' }}>
                            <li>
                                Pendekatan: Wangsakerta melakukan kerja perubahan sosial secara partisipatif dengan menumbuhkan kesadaran kritis-emansipatoris melalui pendidikan dan pengorganisasian sosial.
                            </li>
                            </ol>
                    </ul>
                </Typography>
                <Button variant="contained" href="/strategi" color="secondary" sx={{mt:2, borderRadius: 5}}>Strategi Umum</Button>
            </Item>
            <Item>
                <Card sx={{ maxWidth: 500, m:'auto', mb:5, mt:1, textAlign: 'center' }}>
                <CardMedia
                    component="img"
                    height="240"
                    image="/images/Wangsakerta - 11.jpg"
                    alt="Upaya mengatasi limbah kerang di Cirebon"
                />
                </Card>
            </Item>
        </Stack>
     </Box>
</section>
)
}