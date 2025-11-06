import { useTrending } from "../../hooks/useTrending";
import Loading from "../Loading/Loading";
import TrendingHeader from "../Ui/TrendingHeader/TrendingHeader";
import TrendingItem from "../Ui/TrendingItem/TrendingItem";

export default function Tvshows() {
  const { isLoading, trendingList } = useTrending("tv");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="row">
      {/* ---------- Trending section header ---------- */}
      <TrendingHeader
        title="Tv"
        description="Most popular TV shows this week"
      />

      {/* Render list of trending Tv using the shared TrendingItem component */}
      {trendingList.map((tv) => (
        <TrendingItem key={tv.id} item={tv} mediaType="tv" />
      ))}
    </div>
  );
}
