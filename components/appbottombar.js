
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  width:'97%',
  maxWidth:500
}));

export default function AppBottomBar () {
  const date = new Date();
  const year = date.getFullYear();
  return (
  <>
  <Box>
     <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 25 }}
        justifyContent="center"
        alignItems="center"
      >
        <Item>
          <IconButton href="https://www.youtube.com/channel/UC0KANWsuo5uivXTcUkss_lg/featured" color="secondary" aria-label="Follow me on YouTube">
            <YouTubeIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com/yayasan.wangsakerta/" color="secondary" aria-label="Follow me on Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://www.facebook.com/profile.php?id=100054548195773" color="secondary" aria-label="Follow me on Facebook">
            <FacebookIcon />
          </IconButton>
        </Item>

        <Item>
            <Typography variant="caption" gutterBottom>
                © 2022 - {year} Yayasan Wangsakerta. All rights reserved. Design by <Link href="https://jackplan.com/bio/studiofru">Studiofru</Link>
            </Typography>
        </Item>
      </Stack>
  </Box>

</>
  );
}