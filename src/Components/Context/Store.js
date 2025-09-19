import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export let trendingContext = createContext(0);

export default function TrendingContextProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvshows, setTrendingTvshows] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);
  const baseUrlImg = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  async function getTrindingItems(mediaType, callBack) {
    try {
      setIsLoading(true);
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=70cc0ca46558d5eb93d0ecb9b437dd6b`
      );
      callBack(data.results);
    } catch (error) {
      toast.error("Error loading data. Please refresh the page.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTrindingItems("movie", setTrendingMovies);
    getTrindingItems("tv", setTrendingTvshows);
    getTrindingItems("person", setTrendingPeople);
  }, []);

  function goToDetails(id, mediaType) {
    navigate({
      pathname: "/Details",
      search: `?id=${id}&mediaType=${mediaType}`,
    });
  }

  return (
    <trendingContext.Provider
      value={{
        trendingMovies,
        trendingTvshows,
        trendingPeople,
        baseUrlImg,
        goToDetails,
        isLoading,
      }}
    >
      {props.children}
    </trendingContext.Provider>
  );
}
