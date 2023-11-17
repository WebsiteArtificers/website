import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const readClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-10-03',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN
})

export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-10-03',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN
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
  preview,
  categories[]->,
  publishedAt,
  body,
}`

export const category = `*[_type == 'category']{
  title,
  description,
  id,
}`

export const contactSalesForm = `*[_type == 'salesForm']{
  fullname,
  id,
  email,
  company,
  companySize,
  message,
  connection,
  publishedAt,
}`
  
const builder = imageUrlBuilder(readClient)
  
export const urlFor = (source: any) => builder.image(source)