import { useTrending } from "../Hooks/useTrending";
import Loading from "../Loading/Loading";
import TrendingHeader from "../Ui/TrendingHeader";
import TrendingItem from "../Ui/TrendingItem";

export default function Tvshows() {
  const { isLoading, trendingList } = useTrending("tv");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="row">
      {/* ---------- Trending section header ---------- */}
      <TrendingHeader title="Tv" />

      {/* Render list of trending Tv using the shared TrendingItem component */}
      {trendingList.map((tv) => (
        <TrendingItem key={tv.id} item={tv} mediaType="tv" />
      ))}
    </div>
  );
}
