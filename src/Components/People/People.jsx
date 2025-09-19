
import { useGoToDetails } from "../Hooks/useGoToDetails";
import { useTrending } from "../Hooks/useTrending";
import Loading from "../Loading/Loading";
import TrendingHeader from "../Ui/TrendingHeader";

export default function People() {
  let { baseUrlImg, isLoading, trendingList } = useTrending("person");
  let { goToDetails } = useGoToDetails();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="row">
       {/* ---------- Trending section header ---------- */}
      <TrendingHeader title="Person" />
      
      {trendingList.map((person) => (
        <div
          onClick={() => goToDetails(person.id, "person")}
          key={person.id}
          className="col-md-2"
        >
          <div className="person">
            <img
              className="w-100 my-2"
              src={baseUrlImg + person.profile_path}
              alt=""
            />
            <h2 className="h5 text-center">{person.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
