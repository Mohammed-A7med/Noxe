import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function useTrending(mediaType = "all") {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingList, setTrendingList] = useState([]);

  async function getTrendingItems(type = mediaType) {
    try {
      setIsLoading(true);
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${type}/week?api_key=70cc0ca46558d5eb93d0ecb9b437dd6b`
      );
      setTrendingList(data.results);
    } catch (error) {
      toast.error("Error loading data. Please refresh the page.");
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
