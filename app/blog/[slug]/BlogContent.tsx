"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SanityBlockContent from '@sanity/block-content-to-react';
import './blogContent.css';
import { LoadingScreen } from '@/components/components';
import { client, urlFor } from '../../../sanity/client';

interface BlogPost {
  slug: { current: string };
  title: string;
  preview: string;
  mainImage: any; // Replace 'any' with a more specific type if possible
  body: any; // Replace 'any' with a more specific type if possible
}

interface BlogContentProps {
  slug: string;
}

const BlogContent = ({ slug }: BlogContentProps) => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const query = `*[slug.current == $slug][0]`;
        const params = { slug };
        const data = await client.fetch(query, params);
        setBlogPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        // Handle error appropriately
      }
    };

    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  if (!blogPost) {
    return <LoadingScreen />; // Or any other placeholder you prefer
  }

  return (
    <div className='blogPage__container'>
      <div className='blogPage__subcontainer'>
        <div className='blogPage__title--container'>
          <h1 className='blogPage__title'>{blogPost.title}</h1>
          <p>{blogPost.preview}</p>
        </div>
        <div className='blogPage__image--container'>
          <Image 
            className='blogPage__image' 
            priority 
            width='1600' 
            height='1600' 
            src={urlFor(blogPost.mainImage).url()} 
            alt={`Image for ${blogPost.title}`} 
          />
        </div>
      </div>
      <div className='blogPage__content--container'>
        <SanityBlockContent blocks={blogPost.body} />
      </div>
    </div>
  );
};

export default BlogContent;