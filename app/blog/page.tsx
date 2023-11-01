"use client"
import React, { useEffect, useState } from "react"
import { client, blog, category, urlFor } from '../../sanity/client'
import './blog.css'
import { Logo } from '../.././icons/icons'
import { Suspense } from 'react' 
import { LoadingScreen } from '@/components/components'

export default function Page() {

  const [ allCategories, setAllCategories ] = useState(true)
  const [ visibleCategory, setVisibleCategory ] = useState('')
  const [ categories, setCategories ] = useState([])
  const [ blogs, setBlogs ] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const categoryResult = await client.fetch(blog)
        setBlogs(categoryResult)
      } catch (error) {
        console.error('Error fetching the blogs:', error)
      }
    }

    fetchBlogs()
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const blogResult = await client.fetch(category)
        setCategories(blogResult)
      } catch (error) {
        console.error('Error fetching the categories:', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <Suspense fallback={<LoadingScreen />}>
        <div className="blog__container">
          <div className='blog__border--bottom'>
            <div className='blog__subcontainer'>
              <h1 className="blog__container--header">Filter By Category</h1>
              <div className="blog__category--container">
                  <a onClick={() => setAllCategories(true)} className="blog__category--link">All</a>
                {categories?.map((category: any, index: any) => (
                  <a key={index} onClick={()=> {
                    setAllCategories(false)
                    setVisibleCategory(category.title)
                  }} className="blog__category--link">{category.title}</a>
                ))}
              </div>
            </div>
          </div>
          <BlogCovers blogs={blogs} allCategories={allCategories} visibleCategory={visibleCategory}/>
        </div>
    </Suspense>
  )
}

function BlogCovers({ blogs, allCategories, visibleCategory }: {blogs:any, allCategories:any, visibleCategory:any}) {
  return (
      <Suspense fallback='Loading...'>
        <div className="blogCover__container">
        {blogs
          ?.filter((blog: any) =>
            allCategories ? true : blog.categories.some((category: any) => category.title === visibleCategory)
          )
          .map((blog: any, index: any) => (
            <a className='blog__cover' href={"/blog/" + blog.slug.current} key={blog.slug.current}>
              <img className='blog__cover--image' src={urlFor(blog.mainImage).url()} alt={blog.title} />
              <div className='blog__cover--subcontainer'>
                <h1 className='blog__cover--title'>{blog.title}</h1>
                <Logo />
              </div>
            </a>
          ))}
        </div>
      </Suspense>
  )
}