'use client'
import { IArticles } from '@/models/articles'
//
import { Box, Grid, Typography } from '@mui/material'
import CardArticles from './CardArticles'

//! Implement function LIKE / DISLIKE articles

const Articles = ({ articles }: { articles: IArticles[] }) => {
  return (
    <Box py={5} mt={6} sx={{ backgroundColor: 'rgb(241 245 249)' }}>
      <Grid container sx={{ pb: 1, px: 2 }}>
        <Grid item md={2} />
        <Grid item md={6}>
          <Typography
            variant='h2'
            component='h2'
            color='text.primary'
            sx={{ fontSize: 30, fontWeight: 600 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ px: 2 }}>
        <Grid item md={2} />
        <Grid item md={6}>
          <Typography
            sx={{ fontSize: 18, fontWeight: 400 }}
            color='text.secondary'
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            doloribus reprehenderit quia facere aliquam saepe alias.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          mt: 6,
          px: 3,
        }}
        display='flex'
        justifyContent='space-evenly'
      >
        {/* HERE ADD MORE ARTICLES */}
        {articles.map((article, index) => (
          <Grid
            item
            xs={12}
            md={8}
            lg={5}
            display='flex'
            justifyContent='center'
            sx={{ my: 2 }}
            key={article.id}
          >
            <CardArticles
              id={article.id}
              slug={article.attributes.slug}
              author={article.attributes.author}
              time_read={article.attributes.time_read}
              title={article.attributes.title}
              summary={article.attributes.summary}
              content={article.attributes.content}
              published_at={article.attributes.publishedAt}
              avatar={
                article.attributes.avatar.data.attributes.formats.medium.url
              }
              avatar_alt={
                article.attributes.avatar.data.attributes.alternativeText
              }
              img_main={
                article.attributes.img_main.data.attributes.formats.large.url
              }
              img_main_alt={
                article.attributes.img_main.data.attributes.alternativeText
              }
              img_main_caption={
                article.attributes.img_main.data.attributes.caption
              }
              tag_1={article.attributes.tags.data[0].attributes.name}
              tag_2={article.attributes.tags.data[1].attributes.name}
              tag_3={article.attributes.tags.data[2].attributes.name}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Articles
