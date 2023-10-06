"use client"
import { client, blog, urlFor } from '../../../sanity/client'
import Image from 'next/image'
import SanityBlockContent from '@sanity/block-content-to-react'
import './blogContent.css'

async function getBlogData() {
  const res = await client.fetch(blog)
  return res
}

export default async function Page({ params }: { params: { slug: any } }) {
  const blogs = await getBlogData()
  const blogSlug = params.slug

  return (
    <div className='blogPage__container'>
      {
        blogs?.map((blog: any) => (
          blogSlug === blog.slug.current ?
          <div key={blog.id}>
            <div className='blogPage__subcontainer'>
              <div className='blogPage__title--container'>
                <h1 className='blogPage__title'>{blog.title}</h1>
                <p>{blog.preview}</p>
              </div>
              <div className='blogPage__image--container'>
                <Image className='blogPage__image' priority width='1600' height='1600' src={urlFor(blog.mainImage).url()} alt={blog.title} />
              </div>
            </div>
            <div className='blogPage__content--container'>
              <SanityBlockContent blocks={blog.body}/>
            </div>
          </div>
          : null
        ))
      }
    </div>
  )
}