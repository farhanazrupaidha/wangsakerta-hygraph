import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width:'97%',
  maxWidth:750
}));

export default function SiapaKami () {
return (
<section id="siapa" data-stellar-background-ratio="0.5">
 <Box sx={{m:5}}>
 <Typography variant="h4" sx={{textAlign: 'center', mb:2}}> <NaturePeopleIcon sx={{mr:1, mb:1}} />Siapa Kami?</Typography>
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ md: 10 }}
            justifyContent="center"
            alignItems="center"
        >
            <Item>
                <Typography variant='h5' sx={{mb:1}}>Visi</Typography>
                <Typography variant="body1" gutterBottom>
                    Wangsakerta merupakan sekelompok orang pembelajar yang peduli masalah - masalah sosial, meyakini dan memegang nilai-nilai kejujuran, kerja keras dan tanggungjawab untuk mewujudkan masyarakat yang cukup pangan,cukup energi, cukup informasi, mampu menentukan diri sendiri dan diridhoi oleh Allah SWT.
                </Typography>

           </Item>
           <Item>
                <Typography variant='h5' sx={{mb:1}}>Misi</Typography>
                <Typography variant="body1" gutterBottom>
                    <ul>
                        <ol style={{ listStyleType: 'decimal' }}>
                            <li>
                                Membangun kesadaran masyarakat mengenai jati diri dan potensi sumberdaya yang mereka miliki
                            </li>
                            <li>
                                Menghasilkan pengetahuan berbasis kearifan lokal yang berguna bagi kehidupan dan kemanusiaan
                            </li>
                            <li>
                                Membangun kapasitas kelompok-kelompok masyarakat dalam mengakses informasi pada kemajuan ilmu pengetahuan dan teknologi serta mampu memanfaatkannya untuk kemashlahatan bersama
                            </li>
                            </ol>
                    </ul>
                </Typography>
           </Item>
        </Stack>
</Box>
</section>
)
}