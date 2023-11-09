"use client"
import { useState, useEffect, Suspense } from 'react';
import { client, blog, urlFor } from '../../../sanity/client';
import Image from 'next/image';
import SanityBlockContent from '@sanity/block-content-to-react';
import './blogContent.css';
import { LoadingScreen } from '@/components/components';
import Head from 'next/head';

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
    <>
      <Head>
        {
          blogs?.map((blog: any) => (
            blogSlug === blog.slug.current ? 
            <>
              <title>{blog.title}</title>
              <meta name="description" content={blog.preview} />
            </>
             : <title>The Website Artificers: Our Thoughts and Insights</title>
          ))
        }
        <meta property="og:title" content='The Website Artificers: Our Thoughts and Insights' />
        <meta property="og:description" content="Dive into the latest insights on web development trends, tips, and best practices with Website Artificers' blog. Elevate your online strategy with our expert guidance and industry thought leadership." />
        <meta property="og:image" content='/images/website-artificer-logo.png' />
        <meta property="og:type" content="website" />
      </Head>
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
    </>
  );
}