"use client";
import './magic.css';
import { client, blog, urlFor } from '../.././sanity/client';
import { useState, useEffect } from 'react'
import { Logo } from '../../icons/icons'

export default function Magic() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result: any = await client.fetch(blog);
        setBlogs(result);
      } catch (error) {
        console.error('Error fetching the blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className='magic__container'>
      <h1 className='magic__header'>Make</h1>
      <h2 className='magic__subheader'>magic</h2>
      <p className='magic__paragraph'>When you remove technology bottlenecks, you’ll be amazed at the possibilities you create.</p>
      <div className='magic__subcontainer'>
        <button className='magic__subcontainer--button button__tertiary'>Contact Sales</button>
        <button className='magic__subcontainer--button button__primary'>Get Pricing</button>
      </div>
      <p className='magic__paragraph'>...or get to know us better.</p>
      <div className='magic__blog--container'>
        {blogs?.map((blog: any, index: any) => {
          // Render only the first three elements
          if (index < 4) {
            return (
              <a key={index} className='magic__blog' href={"/blog/" + blog.slug.current}>
                <img className='magic__blog--image' src={urlFor(blog.mainImage).url()} alt={blog.title} />
                <div className='magic__blog--subcontainer'>
                  <h1 className='magic__blog--title'>{blog.title}</h1>
                  <Logo />
                </div>
              </a>
            );
          } else {
            return null; // Render nothing for elements beyond the first three
          }
        })}
      </div>
      <div className='magic__bottom--container'>
        <a href='/blog'>
          <button className='magic__bottom--button button__primary'>Explore all blogs</button>
        </a>
      </div>
    </div>
  );
}