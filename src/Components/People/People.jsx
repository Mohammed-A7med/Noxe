import { useContext } from "react";

import { trendingContext } from "../Context/Store";
import Loading from "../Loading/Loading";
import TrendingHeader from "../Ui/TrendingHeader";

export default function People() {
  let { trendingPeople, baseUrlImg, goToDetails, isLoading } =
    useContext(trendingContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="row">
       {/* ---------- Trending section header ---------- */}
      <TrendingHeader title="Person" />
      
      {trendingPeople.map((person) => (
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
