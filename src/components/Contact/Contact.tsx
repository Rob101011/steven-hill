import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import type { ChangeEvent, FormEvent } from 'react';

interface ContactProps {
  id?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact({ id = 'contact' }: ContactProps) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@stevenhillmotorservices.co.uk?subject=${subject}&body=${body}`;
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'divider' },
      '&:hover fieldset': { borderColor: 'primary.main' },
    },
  };

  return (
    <Box id={id} component="section" sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.1em', mb: 1, display: 'block' }}>
            Get in Touch
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Contact
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto' }}>
            Ready to book a service or have a question? Drop Steven a message and he'll get back to you promptly.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 6, md: 8 }}>
          {/* Contact details */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Contact Details</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <PhoneIcon sx={{ color: 'primary.main', mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.25 }}>Phone</Typography>
                  <Typography
                    component="a"
                    href="tel:+441234567890"
                    sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.light' } }}
                  >
                    07700 000 000
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <EmailIcon sx={{ color: 'primary.main', mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.25 }}>Email</Typography>
                  <Typography
                    component="a"
                    href="mailto:info@stevenhillmotorservices.co.uk"
                    sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.light' }, wordBreak: 'break-all' }}
                  >
                    info@stevenhillmotorservices.co.uk
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ color: 'primary.main', mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.25 }}>Location</Typography>
                  <Typography sx={{ color: 'text.primary' }}>Gomersal, Cleckheaton</Typography>
                  <Typography sx={{ color: 'text.primary' }}>West Yorkshire, England</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Serving West Yorkshire & surrounding areas
                  </Typography>
                </Box>
              </Box>
            </Box>


          </Grid>

          {/* Contact form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Send a Message</Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    sx={inputSx}
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                sx={inputSx}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                multiline
                rows={5}
                sx={inputSx}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ alignSelf: { xs: 'stretch', sm: 'flex-start' }, px: 5, py: 1.5 }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

