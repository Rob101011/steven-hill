import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AirIcon from '@mui/icons-material/Air';
import SettingsIcon from '@mui/icons-material/Settings';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { ReactElement } from 'react';

interface ServiceItem {
  icon: ReactElement<SvgIconProps>;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: <OilBarrelIcon />,
    title: 'Oil & Filter Change',
    description: 'Regular oil and filter changes to keep your engine running cleanly and extend its life.',
  },
  {
    icon: <SearchIcon />,
    title: 'Diagnostics',
    description: 'Advanced electronic diagnostics to pinpoint faults quickly and accurately, saving you time and money.',
  },
  {
    icon: <DirectionsCarIcon />,
    title: 'Brakes',
    description: 'Full brake inspections, pad and disc replacements, and brake fluid changes for your safety.',
  },
  {
    icon: <TireRepairIcon />,
    title: 'Tyres',
    description: 'Tyre fitting, balancing, and pressure checks. Advice on the right tyres for your vehicle and budget.',
  },
  {
    icon: <AssignmentIcon />,
    title: 'MOT Preparation',
    description: 'Pre-MOT inspections to identify and fix potential failures before your test day.',
  },
  {
    icon: <SettingsIcon />,
    title: 'Exhaust',
    description: 'Exhaust repairs and replacements for all makes and models, from catalytic converters to back boxes.',
  },
  {
    icon: <AirIcon />,
    title: 'Air Conditioning',
    description: 'A/C regas, leak testing, and repairs to keep your cabin cool and comfortable year-round.',
  },
  {
    icon: <LocalCarWashIcon />,
    title: 'Detailing',
    description: 'Professional vehicle detailing — thorough cleaning, polishing, and finishing to keep your car looking its absolute best.',
  },
];

interface ServicesProps {
  id?: string;
}

export function Services({ id = 'services' }: ServicesProps) {
  return (
    <Box id={id} component="section" sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.1em', mb: 1, display: 'block' }}>
            What I Offer
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Services
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto' }}>
            A full range of mechanical services for cars and light vans, carried out to a high standard every time.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {SERVICES.map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'border-color 0.2s, transform 0.2s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ color: 'primary.main', mb: 2, display: 'flex', fontSize: '2rem' }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

