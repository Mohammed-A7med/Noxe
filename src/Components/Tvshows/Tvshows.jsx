import { useContext } from "react";

import { trendingContext } from "../Context/Store";
import Loading from "../Loading/Loading";
import TrendingHeader from "../Ui/TrendingHeader";

export default function Tvshows() {
  let { trendingTvshows, baseUrlImg, goToDetails, isLoading } =
    useContext(trendingContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="row">
      {/* ---------- Trending section header ---------- */}
      <TrendingHeader title="Tv" />

      {trendingTvshows.map((tv) => (
        <div
          onClick={() => goToDetails(tv.id, "tv")}
          key={tv.id}
          className="col-md-2"
        >
          <div className="tv">
            <div className="contian-img position-relative">
              <img
                className="w-100 my-2"
                src={baseUrlImg + tv.poster_path}
                alt=""
              />
              <div className="position-absolute top-0 end-0 bg-info mt-2 p-2">
                {tv.vote_average.toFixed(1)}
              </div>
            </div>
            <h2 className="h5 text-center">{tv.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
