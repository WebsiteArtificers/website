import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || process.env.SANITY_API_DATASET,
  apiVersion: '1',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

export const blog = `*[_type == "blog"]{
  title,
  slug,
  id,
  author,
  mainImage {
    asset->{
      url
    }
  },
  categories[]->,
  publishedAt,
  preview,
  body,
}`

export const category = `*[_type == 'category']{
  title,
  description,
  id,
}`
  
  const builder = imageUrlBuilder(client)
  
  export const urlFor = (source: any) => builder.image(source)