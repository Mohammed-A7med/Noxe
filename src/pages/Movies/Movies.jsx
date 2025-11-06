import { useTrending } from "../../hooks/useTrending";
import Loading from "../../Components/Loading/Loading";
import TrendingHeader from "../../Components/Ui/TrendingHeader/TrendingHeader";
import TrendingItem from "../../Components/Ui/TrendingItem/TrendingItem";

export default function Movies() {
  const { isLoading, trendingList } = useTrending("movie");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="row">
      {/* ---------- Trending section header ---------- */}
      <TrendingHeader
        title="Movies"
        description="Most watched movies this week"
      />

      {/* Render list of trending movies using the shared TrendingItem component */}
      {trendingList.map((movie) => (
        <TrendingItem key={movie.id} item={movie} mediaType="movie" />
      ))}
    </div>
  );
}
