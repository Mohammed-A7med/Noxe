import { useTrending } from "../../hooks/useTrending";
import Loading from "../../Components/Loading/Loading";
import TrendingItem from "../../Components/Ui/TrendingItem/TrendingItem";
import TrendingHeader from "../../Components/Ui/TrendingHeader/TrendingHeader";

export default function People() {
  const { isLoading, trendingList } = useTrending("person");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="row">
      {/* ---------- Trending section header ---------- */}
      <TrendingHeader
        title="Person"
        description="Trending actors and actresses"
      />

      {/* Render list of trending Person using the shared TrendingItem component */}
      {trendingList.map((person) => (
        <TrendingItem key={person.id} item={person} mediaType="person" />
      ))}
    </div>
  );
}
