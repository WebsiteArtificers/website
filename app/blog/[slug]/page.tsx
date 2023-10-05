import { client, blog, urlFor } from '../../../sanity/client'
import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import './blogContent.css'

async function getBlogData() {
  const res = await client.fetch(blog)
  return res
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blogs = await getBlogData()
  const blogSlug = params.slug

  return (
    <div className='blogPage__container'>
      {
        blogs?.map((blog: any, index: any) => (
          blogSlug === blog.slug.current ?
          <div>
            <div className='blogPage__subcontainer' key={index}>
              <div className='blogPage__title--container'>
                <h1 className='blogPage__title'>{blog.title}</h1>
                <BlockContent blocks={blog.preview}/>
              </div>
              <div className='blogPage__image--container'>
                <Image className='blogPage__image' priority width='3200' height='3200' src={urlFor(blog.mainImage).url()} alt={blog.title} />
              </div>
            </div>
            <div className='blogPage__content--container'>
              <BlockContent blocks={blog.body}/>
            </div>
          </div>
          : null
        ))
      }
    </div>
  )
}