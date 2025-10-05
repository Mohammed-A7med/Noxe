import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export function useTrending(mediaType = "all") {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingList, setTrendingList] = useState([]);

  async function getTrendingItems(type = mediaType) {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/${type}/week?api_key=${API_KEY}`
      );
      setTrendingList(data.results);
    } catch (error) {
      toast.error("Error loading data. Please refresh the page.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTrendingItems(mediaType);
  }, [mediaType]);

  return {
    isLoading,
    trendingList,
  };
}
