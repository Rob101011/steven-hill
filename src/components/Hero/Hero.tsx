import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface HeroProps {
  id?: string;
}

export function Hero({ id = 'hero' }: HeroProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 3, md: 6 },
        background: 'linear-gradient(160deg, #0d0d0d 0%, #141e26 50%, #0d0d0d 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle decorative background element */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,144,164,0.07) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ position: 'relative', maxWidth: 760 }}>
        {/* Location badge */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            mb: 3,
            px: 1.5,
            py: 0.5,
            borderRadius: 20,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'rgba(74,144,164,0.08)',
          }}
        >
          <LocationOnIcon sx={{ fontSize: 14, color: 'primary.main' }} />
          <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.7rem' }}>
            Gomersal, Cleckheaton, West Yorkshire
          </Typography>
        </Box>

        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
            lineHeight: 1.15,
            mb: 2,
            color: 'text.primary',
          }}
        >
          Steven Hill{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            Motor Services
          </Box>
        </Typography>

        <Typography
          variant="h4"
          component="p"
          sx={{
            fontSize: { xs: '1.1rem', sm: '1.35rem', md: '1.5rem' },
            fontWeight: 500,
            color: 'text.secondary',
            mb: 4,
            letterSpacing: '0.03em',
          }}
        >
          Honest Work. Expert Results.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          component="a"
          href="#contact"
          sx={{
            px: { xs: 4, md: 6 },
            py: { xs: 1.25, md: 1.5 },
            fontSize: { xs: '1rem', md: '1.05rem' },
            fontWeight: 500,
            borderRadius: 1,
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
}

