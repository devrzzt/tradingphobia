'use client'
//
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Image from 'next/legacy/image'

const Overview = () => {
  return (
    <Grid container direction='row' justifyContent='center' sx={{ mt: 8 }}>
      <Grid
        item
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
        }}
        md={5}
      >
        <Box sx={{ display: 'block' }}>
          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontSize: { xs: 26, md: 34 },
              fontWeight: 800,
              color: '#fff',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            maxime vitae iusto et neque unde totam ratione voluptatem?
          </Typography>
          <Typography
            sx={{ mt: 2, fontSize: { xs: 16, md: 18 }, color: '#94A3B8' }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            fugit quo atque earum corrupti commodi voluptatem, sed quos minima
            assumenda qui delectus quaerat praesentium facilis deserunt
            reprehenderit consequatur debitis exercitationem aspernatur aperiam
            perferendis. Possimus saepe, animi vitae commodi ipsam nulla
            repellendus odio rerum!
          </Typography>
          <Button
            // className='buttonRobinhood'
            endIcon={<ArrowRightAltIcon />}
            variant='outlined'
            color='warning'
            size='large'
            sx={{
              mt: 4,
              //
              textTransform: 'capitalize',
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Aprender más
          </Button>
        </Box>
      </Grid>
      <Grid item sx={{ px: 2, mt: { xs: 4 } }} md={5}>
        <Card
          className=''
          sx={{ width: { xs: 358, md: 450 }, borderRadius: 4 }}
        >
          <CardActionArea>
            <CardMedia sx={{ height: { xs: 420, md: 520 } }}>
              <Image
                src='/img_overview.png'
                width={680}
                height={798}
                alt=''
                priority
              />
            </CardMedia>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Overview
