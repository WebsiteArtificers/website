"use client"
import './youTubeComponent.css'
import { useEffect, useState } from 'react';
import { fetchVideos } from '@/youtube/FetchYouTube';
import type { NextPage } from 'next';

interface VideoSnippetThumbnail {
  url: string;
}

interface VideoSnippet {
  title: string;
  thumbnails: {
    medium: VideoSnippetThumbnail;
  };
}

interface Video {
  id: {
    videoId: string;
  };
  snippet: VideoSnippet;
}

const YouTubeComponent: NextPage = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const loadVideos = async () => {
            const fetchedVideos = await fetchVideos();
            setVideos(fetchedVideos);
        };

        loadVideos();
    }, []);

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;

        return txt.value;
    }

    function truncateString(str, num) {
        if (str.length > num) return str.slice(0, num) + "...";
        else return str;
    }

    return (
        <div className='youTubeVideo__container'>
            <div className='youTubeVideo__subcontainer'>
                {videos.slice(1).map((video) => (
                <a className='youTubeVideo__link' key={video.id.videoId} href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                    <iframe 
                        className='youTubeVideo__video'
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={decodeHtml(video.snippet.title)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    <h2 className='youTubeVideo__header'>{truncateString(decodeHtml(video.snippet.title), 10)}</h2>
                </a>
                ))}
            </div>
        </div>
    )
}

export default YouTubeComponent;
