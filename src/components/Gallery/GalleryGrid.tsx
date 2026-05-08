import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface GalleryImage {
  src: string;
  label: string;
  width: number;
  height: number;
}

// Placeholder images — replace src values with real CloudFront URLs in production
const GALLERY_IMAGES: GalleryImage[] = [
  { src: '', label: 'Engine Bay Work', width: 800, height: 600 },
  { src: '', label: 'Brake Replacement', width: 800, height: 600 },
  { src: '', label: 'Diagnostics in Progress', width: 800, height: 600 },
  { src: '', label: 'Exhaust Repair', width: 800, height: 600 },
  { src: '', label: 'Tyre Fitting', width: 800, height: 600 },
  { src: '', label: 'MOT Preparation', width: 800, height: 600 },
  { src: '', label: 'Oil Change', width: 800, height: 600 },
  { src: '', label: 'Air Con Service', width: 800, height: 600 },
];

interface GalleryGridProps {
  id?: string;
}

export function GalleryGrid({ id = 'gallery' }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const cols = isMobile ? 1 : isTablet ? 2 : 4;

  const handleOpen = (image: GalleryImage) => setSelectedImage(image);
  const handleClose = () => setSelectedImage(null);

  return (
    <Box id={id} component="section" sx={{ bgcolor: '#1a1a1a', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.1em', mb: 1, display: 'block' }}>
            Our Work
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Gallery
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto' }}>
            A selection of jobs completed by Steven. Click any image to view full size.
          </Typography>
        </Box>

        <ImageList cols={cols} gap={12}>
          {GALLERY_IMAGES.map((image) => (
            <ImageListItem
              key={image.label}
              onClick={() => handleOpen(image)}
              sx={{
                cursor: 'pointer',
                borderRadius: 1,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover .gallery-overlay': { opacity: 1 },
                position: 'relative',
              }}
            >
              {/* Placeholder box when no real image src */}
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.label}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    paddingTop: '75%',
                    bgcolor: '#222222',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center', px: 1 }}>
                      {image.label}
                    </Typography>
                  </Box>
                </Box>
              )}

              {/* Hover overlay */}
              <Box
                className="gallery-overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: 'rgba(74,144,164,0.15)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: 1.5,
                  opacity: 0,
                  transition: 'opacity 0.2s',
                }}
              >
                <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  {image.label}
                </Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      {/* Lightbox */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        slotProps={{ paper: { sx: { bgcolor: 'background.paper', m: { xs: 1, sm: 2 } } } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pt: 1.5 }}>
          <Typography variant="h6" sx={{ fontSize: '1rem' }}>{selectedImage?.label}</Typography>
          <IconButton onClick={handleClose} aria-label="Close lightbox" size="small" sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: { xs: 1, sm: 2 } }}>
          {selectedImage?.src ? (
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
            />
          ) : (
            <Box
              sx={{
                width: '100%',
                paddingTop: '75%',
                bgcolor: '#222222',
                borderRadius: 1,
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {selectedImage?.label} — image coming soon
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

