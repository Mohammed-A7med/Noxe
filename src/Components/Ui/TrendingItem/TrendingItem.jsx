import styles from "./TrendingItem.module.css";
import NoxeImg from "../../../assets/Noxe img.png"
import { useGoToDetails } from "../../Hooks/useGoToDetails";

export default function TrendingItem({ item, mediaType }) {
  const { goToDetails } = useGoToDetails();

  const baseUrlImg = "https://image.tmdb.org/t/p/w500";
   const imageUrl = item.poster_path || item.profile_path
    ? baseUrlImg + (item.poster_path || item.profile_path)
    : null;

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
      className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
    >
      <div className={`${mediaType} bg-transparent h-100`}>
        <div
          className={`${styles["card-hover"]} position-relative rounded-3 overflow-hidden shadow-sm`}
        >
           <img
            className="w-100"
            src={imageUrl || NoxeImg}
            alt={altText}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = NoxeImg; 
            }}
          />
          {showRating && (
            <div
              className={`${styles["badg-shadow"]} position-absolute top-0 end-0 p-2 text-warning fw-semibold`}
            >
              {item.vote_average.toFixed(1)}
            </div>
          )}
        </div>
        <h2 className="h6 text-center text-white text-truncate mt-2">
          {item.title || item.name}
        </h2>
      </div>
    </div>
  );
}
