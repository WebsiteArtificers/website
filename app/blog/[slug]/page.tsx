"use client"
import { useState, useEffect, Suspense } from 'react';
import { client, blog, urlFor } from '../../../sanity/client';
import Image from 'next/image';
import SanityBlockContent from '@sanity/block-content-to-react';
import './blogContent.css';
import { LoadingScreen } from '@/components/components';

const getBlogData = async () => {
  const res = await client.fetch(blog);
  return res;
};

export default function Page({ params }: { params: { slug: any } }) {
  const [blogs, setBlogs] = useState<any[]>([]);
  const blogSlug = params.slug;

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBlogData();
      setBlogs(res);
    };
    fetchData();
  }, []);

  return (
    <Suspense fallback={<LoadingScreen />}>
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
    </Suspense>
  );
}