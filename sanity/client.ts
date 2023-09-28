import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
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