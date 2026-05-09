import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';

interface AboutProps {
  id?: string;
}

const SPECIALTIES = ['Engine Diagnostics', 'Brakes & Suspension', 'MOT Preparation', 'General Servicing', 'Air Conditioning', 'Exhaust Systems'];

export function About({ id = 'about' }: AboutProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{ bgcolor: '#1a1a1a', py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          {/* Photo placeholder */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              sx={{
                width: { xs: 160, md: 220 },
                height: { xs: 160, md: 220 },
                bgcolor: '#222222',
                border: '3px solid',
                borderColor: 'primary.main',
                fontSize: { xs: '3rem', md: '4rem' },
              }}
            >
              SH
            </Avatar>
          </Grid>

          {/* Bio */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.1em', mb: 1, display: 'block' }}>
              About
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              Meet Steven Hill
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
              With over 15 years of hands-on experience, Steven Hill is a fully qualified independent mechanic serving Gomersal, Cleckheaton, and the wider West Yorkshire area. Steven built his reputation on one simple principle — doing the job right the first time.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              Honest, expert motor servicing at a fair price. Whether it's a routine oil change or a complex engine repair, you'll always know exactly what work is being done and why.
            </Typography>

            {/* Stats */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {[
                { icon: <BuildIcon />, stat: '15+', label: 'Years Experience' },
                { icon: <StarIcon />, stat: '500+', label: 'Vehicles Serviced' },
                { icon: <VerifiedIcon />, stat: 'City & Guilds', label: 'Qualified Technician' },
              ].map(({ icon, stat, label }) => (
                <Grid key={label} size={{ xs: 12, sm: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ color: 'primary.main', display: 'flex' }}>{icon}</Box>
                    <Box>
                      <Typography variant="h6" sx={{ lineHeight: 1.2, color: 'text.primary' }}>{stat}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>{label}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Specialties */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {SPECIALTIES.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  size="small"
                  sx={{ bgcolor: 'rgba(74,144,164,0.12)', color: 'primary.light', border: '1px solid rgba(74,144,164,0.3)', borderRadius: 1 }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

