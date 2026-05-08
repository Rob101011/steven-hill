import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BuildIcon from '@mui/icons-material/Build';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);
  const handleNavClick = () => setDrawerOpen(false);

  return (
    <>
      <AppBar position="fixed" component="nav">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          {/* Logo / Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BuildIcon sx={{ color: 'primary.main', fontSize: 28 }} />
            <Typography
              variant="h6"
              component="a"
              href="#hero"
              sx={{
                color: 'text.primary',
                textDecoration: 'none',
                fontWeight: 700,
                letterSpacing: '0.02em',
                fontSize: { xs: '1rem', sm: '1.15rem' },
              }}
            >
              Steven Hill Motor Services
            </Typography>
          </Box>

          {/* Desktop nav links */}
          <Box component="ul" sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, m: 0, p: 0, listStyle: 'none' }}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Button
                  component="a"
                  href={link.href}
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.light' } }}
                >
                  {link.label}
                </Button>
              </li>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            aria-label="Open navigation menu"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Offset for fixed AppBar */}
      <Toolbar />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        slotProps={{ paper: { sx: { width: 260, bgcolor: 'background.paper', borderLeft: '1px solid', borderColor: 'divider' } } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1.5 }}>
          <IconButton aria-label="Close navigation menu" onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={handleNavClick}
                sx={{ py: 1.5, px: 3, '&:hover': { bgcolor: 'rgba(74,144,164,0.08)' } }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{ primary: { sx: { color: 'text.primary', fontWeight: 500, fontSize: '1.1rem' } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

