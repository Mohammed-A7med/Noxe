import { useGoToDetails } from "../Hooks/useGoToDetails";
import { useTrending } from "../Hooks/useTrending";

export default function TrendingItem({ item, mediaType }) {
  const { baseUrlImg } = useTrending();
  const { goToDetails } = useGoToDetails();

  const imageUrl = baseUrlImg + (item.poster_path || item.profile_path);

  const altText = item.title
    ? `Poster of ${item.title}`
    : item.name
    ? `Photo of ${item.name}`
    : "Trending item";

  const showRating =
    (mediaType === "movie" || mediaType === "tv") && item.vote_average;

  return (
    <div
      onClick={() => goToDetails(item.id, mediaType)}
      key={item.id}
      className="col-md-2"
    >
      <div className={mediaType}>
        <div className="contian-img position-relative">
          <img className="w-100 my-2" src={imageUrl} alt={altText} />
          {showRating && (
            <div className="position-absolute top-0 end-0 bg-info mt-2 p-2">
              {item.vote_average.toFixed(1)}
            </div>
          )}
        </div>
        <h2 className="h5 text-center">{item.title || item.name}</h2>
      </div>
    </div>
  );
}
