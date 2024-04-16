import { useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import DragHandleIcon from '@mui/icons-material/DragHandle';

function DrawerToggle () {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button color="inherit" onClick={() => setOpen(true)}><DragHandleIcon /></Button>
      <Drawer open={open} anchor={"top"} onClose={() => setOpen(false)}>
      <Toolbar>
                <IconButton
                  size="medium"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  href="/"
                  sx={{ mr: 1, ml:2 }}
                >
                  <Avatar
                    alt="Yayasan Wangsakerta"
                    src="https://www.datocms-assets.com/84327/1668762503-logo-wangsakerta-2.png"
                    sx={{width:32, height:32}}
                  />
                </IconButton>
            <Typography variant="h6" component="div">
              Yayasan Wangsakerta
            </Typography>
          </Toolbar>
          <Divider sx={{m:1}} />
        <List sx={{ mr: 2, ml:2 }}>
                  <ListItem disablePadding>
                    <ListItemButton href="/strategi">
                      <ListItemText>
                        Strategi Umum
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/catatanlapangan">
                      <ListItemText>
                        Catatan Lapangan
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton href="https://studiofrugreenproject.com/lokasi/setu-patok" target="_blank">
                        <ListItemText>
                          Jelajah Ensiklopedia
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/donasi">
                      <ListItemText>
                        Donasi
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
              </List>


      </Drawer>
    </div>
  );
}

export default DrawerToggle;