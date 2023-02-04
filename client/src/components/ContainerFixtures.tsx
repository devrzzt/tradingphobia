'use client'
import { Container, Grid, Typography } from '@mui/material'
//
import React from 'react'

const ContainerFixtures = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container display='flex' justifyContent='flex-end'>
        <Grid item md={8}>
          <Typography fontSize={30} fontWeight={600} sx={{ textAlign: 'left' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Typography>
          <Typography
            color='text.secondary'
            fontSize={18}
            mt={2}
            sx={{ textAlign: 'left' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            perferendis error ratione labore maxime beatae repellat iure
            deleniti enim vitae quam provident dolorum consectetur, facere natus
            optio voluptatibus delectus! Sapiente.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContainerFixtures
