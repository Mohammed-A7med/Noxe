import  { useContext } from "react";

import { trendingContext } from "../Context/Store";
import Loading from "../Loading/Loading";
import Movies from "../Movies/Movies";
import Tvshows from "../Tvshows/Tvshows";
import People from "../People/People";

export default function Home() {
  let { isLoading } = useContext(trendingContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="d-flex flex-column gap-4">
      <Movies />
      <Tvshows />
      <People />
    </div>
  );
}
