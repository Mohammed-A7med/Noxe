import { useTrending } from "../Hooks/useTrending";
import Loading from "../Loading/Loading";
import TrendingHeader from "../Ui/TrendingHeader";
import TrendingItem from "../Ui/TrendingItem";

export default function People() {
  const { isLoading, trendingList } = useTrending("person");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="row">
      {/* ---------- Trending section header ---------- */}
      <TrendingHeader title="Person" />

      {/* Render list of trending Person using the shared TrendingItem component */}
      {trendingList.map((person) => (
        <TrendingItem key={person.id} item={person} mediaType="person" />
      ))}
    </div>
  );
}
