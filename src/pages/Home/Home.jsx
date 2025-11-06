import { useTrending } from "../../hooks/useTrending";
import Loading from "../../Components/Loading/Loading";
import Movies from "../Movies/Movies";
import Tvshows from "../Tvshows/Tvshows";
import People from "../Tvshows/Tvshows";

export default function Home() {
  let { isLoading } = useTrending()

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
