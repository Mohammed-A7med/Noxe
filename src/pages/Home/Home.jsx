import { useTrending } from "../../hooks/useTrending";
import Loading from "../../Components/Loading/Loading";
import Movies from "../Movies/Movies";
import Tvshows from "../../Components/Tvshows/Tvshows";
import People from "../../Components/People/People";

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
