'use client'
//
import {
  Card,
  CardMedia,
  Link,
  Grid,
  Box,
  Typography,
  Avatar,
} from '@mui/material'
import Image from 'next/legacy/image'

const Facts = () => {
  return (
    <>
      <Grid container sx={{ mt: 12, position: 'relative', color: '#fff' }}>
        <Grid item md={12}>
          <Card elevation={0} sx={{}}>
            <CardMedia
              sx={{
                height: { xs: 1600, sm: 850, md: 1350, lg: 1000 },
                width: '100%',
                position: 'relative',
              }}
            >
              <Image
                src='/img_facts.svg'
                alt='un cohete con el logo de bitcoin'
                layout='fill'
                objectFit='cover'
              />
            </CardMedia>
          </Card>
        </Grid>
        <Box
          sx={{
            position: 'absolute',
            width: { xs: 'auto', md: '50%' },
            height: { xs: '100%', md: '100%' },
            backgroundColor: {
              xs: 'rgb(30 41 59)',
              md: 'rgba(16, 23, 42, .7)',
            },
          }}
        >
          <Box sx={{ height: '100%', px: { xs: 1, md: 6 } }}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    mx: 2,
                  }}
                >
                  Lorem ipsum dolor sit.
                </Typography>
                <Typography
                  sx={{
                    mt: 1.5,
                    fontSize: 30,
                    fontWeight: 800,
                    mx: 2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus ipsum tenetur magnam.
                </Typography>
                <Typography
                  sx={{ mt: 2.5, fontSize: 18, mx: 2 }}
                  color='#94A3B8'
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  illum consectetur magni debitis tempore labore mollitia
                  tempora nihil enim temporibus accusantium, consequatur facere
                  fuga, iure voluptas quod magnam dicta deleniti! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. A nobis pariatur
                  repellendus numquam quas sapiente dolore quaerat veniam. Harum
                  molestiae rerum hic fugiat eaque dolorum tempore impedit
                  aliquam voluptates culpa!
                </Typography>
                <Grid
                  container
                  display='flex'
                  justifyContent='center'
                  sx={{ mt: 4 }}
                >
                  <Grid
                    item
                    xs={11}
                    sm={5}
                    md={12}
                    lg={5}
                    sx={{ mx: 1, my: 1, mb: 4 }}
                  >
                    <Avatar
                      variant='square'
                      sx={{
                        width: 54,
                        height: 54,
                        background: 'none',
                      }}
                    >
                      <Image
                        src='/img_facts_friendly_platform.png'
                        width={64}
                        height={64}
                        alt='chasquido de dedos'
                      />
                    </Avatar>
                    <Typography
                      sx={{
                        textAlign: 'left',
                        fontSize: 20,
                        fontWeight: 700,
                        mt: 1,
                        mb: 0.4,
                      }}
                      color='#fff'
                    >
                      Fácil de usar
                    </Typography>
                    <Typography
                      sx={{ textAlign: 'left', fontSize: 16, fontWeight: 500 }}
                      color='#94A3B8'
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, vitae. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Blanditiis, vitae.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={11}
                    sm={5}
                    md={12}
                    lg={5}
                    sx={{ mx: 1, my: 1, mb: 4 }}
                  >
                    <Avatar
                      variant='square'
                      sx={{
                        width: 54,
                        height: 54,
                        background: 'none',
                      }}
                    >
                      <Image
                        src='/img_facts_fee.png'
                        width={64}
                        height={64}
                        alt='billetes uno detras del otro'
                      />
                    </Avatar>
                    <Typography
                      sx={{
                        textAlign: 'left',
                        fontSize: 20,
                        fontWeight: 700,
                        mt: 1,
                        mb: 0.4,
                      }}
                      color='#fff'
                    >
                      Comisiones más bajas
                    </Typography>
                    <Typography
                      sx={{ textAlign: 'left', fontSize: 16, fontWeight: 500 }}
                      color='#94A3B8'
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, vitae. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Blanditiis, vitae.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={11}
                    sm={5}
                    md={12}
                    lg={5}
                    sx={{ mx: 1, my: 1, mb: 4 }}
                  >
                    <Avatar
                      variant='square'
                      sx={{
                        width: 54,
                        height: 54,
                        background: 'none',
                      }}
                    >
                      <Image
                        src='/img_facts_security.png'
                        width={64}
                        height={64}
                        alt='escudo con un candado cerrado superpuesto'
                      />
                    </Avatar>
                    <Typography
                      sx={{
                        textAlign: 'left',
                        fontSize: 20,
                        fontWeight: 700,
                        mt: 1,
                        mb: 0.4,
                      }}
                      color='#fff'
                    >
                      Seguridad
                    </Typography>
                    <Typography
                      sx={{ textAlign: 'left', fontSize: 16, fontWeight: 500 }}
                      color='#94A3B8'
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, vitae. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Blanditiis, vitae.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={11}
                    sm={5}
                    md={12}
                    lg={5}
                    sx={{ mx: 1, my: 1, mb: 4 }}
                  >
                    <Avatar
                      variant='square'
                      sx={{
                        width: 54,
                        height: 54,
                        background: 'none',
                      }}
                    >
                      <Image
                        src='/img_facts_crypto.png'
                        width={64}
                        height={64}
                        alt='criptomonedas como bitcoin y ethereum'
                      />
                    </Avatar>
                    <Typography
                      sx={{
                        textAlign: 'left',
                        fontSize: 20,
                        fontWeight: 700,
                        mt: 1,
                        mb: 0.4,
                      }}
                      color='#fff'
                    >
                      +Criptomonedas
                    </Typography>
                    <Typography
                      sx={{ textAlign: 'left', fontSize: 16, fontWeight: 500 }}
                      color='#94A3B8'
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, vitae elit. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Blanditiis, vitae.
                    </Typography>
                  </Grid>
                </Grid>
                <Box display='flex' justifyContent='center'>
                  <Typography
                    variant='overline'
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'block',
                      },
                    }}
                  >
                    Image by Satheesh Sankaran from Pixabay
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default Facts
