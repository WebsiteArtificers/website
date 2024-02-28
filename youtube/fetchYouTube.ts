import axios from 'axios'

const YOUTUBE_API_KEY: string = process.env.YOUTUBE_API_KEY as string; // Replace with your actual API key
const CHANNEL_ID: string = process.env.CHANNEL_ID as string; // Replace with your channel ID

const BASE_URL: string = 'https://www.googleapis.com/youtube/v3';

interface VideoSnippetThumbnail {
  url: string;
  width: number;
  height: number;
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

export const fetchVideos = async (): Promise<Video[]> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        maxResults: 50, // Adjust number of results as needed
        key: YOUTUBE_API_KEY,
      },
    });
    return data.items as Video[];
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};
