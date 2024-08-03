import axios from 'axios';

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

export const fetchInstagramProfile = async (username) => {
  try {
    const response = await axios.get('https://instagram-scraper-api2.p.rapidapi.com/v1/info', {
      params: { username },
      headers: {
        'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com',
        'X-RapidAPI-Key': RAPIDAPI_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Instagram profile:', error);
    throw new Error('Failed to fetch Instagram profile');
  }
};

export const fetchInstagramPosts = async (username) => {
  try {
    const response = await axios.get('https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts', {
      params: { username },
      headers: {
        'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com',
        'X-RapidAPI-Key': RAPIDAPI_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    throw new Error('Failed to fetch Instagram posts');
  }
};
