import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import BuildIcon from '@mui/icons-material/Build';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: '#111111', borderTop: '1px solid', borderColor: 'divider', pt: { xs: 6, md: 8 }, pb: 4 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <BuildIcon sx={{ color: 'primary.main' }} />
              <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700 }}>
                Steven Hill Motor Services
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 340, lineHeight: 1.7 }}>
              Independent mechanic serving Gomersal, Cleckheaton, and West Yorkshire. Honest Work. Expert Results.
            </Typography>
          </Grid>

          {/* Quick links */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.1em', mb: 2, display: 'block' }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1 }}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Typography
                    component="a"
                    href={link.href}
                    variant="body2"
                    sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.light' } }}
                  >
                    {link.label}
                  </Typography>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Location */}
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.1em', mb: 2, display: 'block' }}>
              Location
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Gomersal, Cleckheaton<br />
              West Yorkshire<br />
              England
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'divider', mb: 3 }} />

        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', textAlign: { xs: 'center', md: 'left' } }}>
          © 2026 Steven Hill Motor Services. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

