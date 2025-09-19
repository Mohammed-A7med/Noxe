import { useGoToDetails } from "../Hooks/useGoToDetails";
import { useTrending } from "../Hooks/useTrending";
import Loading from "../Loading/Loading";
import TrendingHeader from "../Ui/TrendingHeader";

export default function Movies() {
  let { baseUrlImg, isLoading, trendingList } = useTrending("movie");
  let { goToDetails } = useGoToDetails();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="row">
       {/* ---------- Trending section header ---------- */}
      <TrendingHeader title="Movies" />
      
      {trendingList.map((movie) => (
        <div
          onClick={() => goToDetails(movie.id, "movie")}
          key={movie.id}
          className="col-md-2"
        >
          <div className="movie">
            <div className="contian-img position-relative">
              <img
                className="w-100 my-2"
                src={baseUrlImg + movie.poster_path}
                alt=""
              />
              <div className="position-absolute top-0 end-0 bg-info mt-2 p-2">
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
            <h2 className="h5 text-center">{movie.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
