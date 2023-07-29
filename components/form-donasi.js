import React, { useState } from 'react';
import { useRouter } from "next/router";

import {
    Button,
    ButtonGroup,
    Box,
    Stack,
    Paper,
    TextField,
    Typography,
    Select,
    Link,
    Modal,
    IconButton
}
from '@mui/material';

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.default',
    overflowY:'auto',
    height:'100%',
    maxHeight: 700,
    display:'block',
    width: '100%',
    maxWidth:1200,
    p:5,
    boxShadow: 100,
    borderRadius: 5
};

export default function FormulirDonasi () {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


return (
<Box>
    <Button aria-label="delete" onClick={handleOpen} color="secondary" variant="contained" sx={{borderRadius:5}}>
        <AccessibilityNewIcon /> <Typography variant='subtitle' sx={{ml:1}}>Formulir Donasi</Typography>
    </Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{overflow:'scroll'}}
    >
    <Box sx={style}>
    <Box sx={{maxWidth:1000, m:'auto', mt:5, mb:10, textAlign: 'center', borderRadius: 5}}>
            <iframe
                     src="https://tally.so/embed/nPDegx?alignLeft=1&transparentBackground=1&dynamicHeight=1"
                     width="100%"
                     height="1200"
                     frameBorder="0"
                     marginHeight="0"
                     marginWidth="0"
                     margin="auto"
                     title="Contact">
            </iframe>
    </Box>
    <Button
      variant="contained"
      color="secondary"
      sx={{borderRadius: 5, mt: 3}}
      onClick={handleClose}
    >
      Tutup
    </Button>
    </Box>
    </Modal>

</Box>
)
}

