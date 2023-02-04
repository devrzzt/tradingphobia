'use client'
//
import { IArticles } from '@/models/articles'
import { Box, CardActionArea, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PublishedArticles from './PublishedArticles'

const AllArticles = ({ articles }: { articles: IArticles[] }) => {
  articles.sort(
    (a, b) =>
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
  )

  return (
    <Grid
      container
      mt={8}
      sx={{
        px: { xs: 2, lg: 0 },
      }}
    >
      <Box display='flex' justifyContent='center' sx={{ width: '100%' }}>
        <Grid item lg={7}>
          <Typography fontWeight={800} fontSize={24} color='text.secondary'>
            Artículos publicados
          </Typography>
          <Typography
            mt={0.4}
            fontWeight={600}
            fontSize={18}
            color='text.primary'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            deleniti perferendis.
          </Typography>
          <Container sx={{ mt: 1 }}>
            {articles.map(article => (
              <CardActionArea key={article.id}>
                <Link
                  href={'/' + article.attributes.slug}
                  style={{ textDecoration: 'none' }}
                >
                  <PublishedArticles
                    img={
                      article.attributes.img_main.data.attributes.formats.small
                        .url
                    }
                    img_alt={
                      article.attributes.img_main.data.attributes
                        .alternativeText
                    }
                    title={article.attributes.title}
                    author={article.attributes.author}
                    date={article.attributes.publishedAt}
                    summary={article.attributes.summary}
                  />
                </Link>
              </CardActionArea>
            ))}
          </Container>
        </Grid>
      </Box>
    </Grid>
  )
}

export default AllArticles
