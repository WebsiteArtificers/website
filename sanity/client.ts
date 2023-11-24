import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'dqm6dps0',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-10-03',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
  ignoreBrowserTokenWarning: true
})

export const writeClient = createClient({
  projectId: 'dqm6dps0',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-10-03',
  token: process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN, // Server-only token
  useCdn: false,
  ignoreBrowserTokenWarning: true
});

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

export const contactAffiliatesForm = `*[_type == 'contactAffiliatesForm']{
  fullname,
  id,
  email,
  company,
  companySize,
  message,
  jobTitle,
  website,
  location,
  publishedAt,
}`

export const contactCustomerServiceForm = `*[_type == 'contactCustomerServiceForm']{
  fullname,
  id,
  email,
  message,
  publishedAt,
}`

export const contactSalesForm = `*[_type == 'contactSalesForm']{
  fullname,
  id,
  email,
  company,
  companySize,
  message,
  connection,
  publishedAt,
}`

export const contactTechSupportForm = `*[_type == 'contactTechSupportForm']{
  fullname,
  id,
  email,
  message,
  phone,
  publishedAt,
}`

export const newsletterSignUp = `*[_type == 'newsletterSignUp']{
  fullname,
  id,
  email,
  frequency,
  publishedAt,
}`
  
const builder = imageUrlBuilder(client)
  
export const urlFor = (source: any) => builder.image(source)