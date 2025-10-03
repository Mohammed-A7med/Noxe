import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";

export default function Details() {
  const [searchParams] = useSearchParams();
  const [details, setDetails] = useState({});
  const [fallbackImg, setFallbackImg] = useState(null);
  const navigate = useNavigate();

  let currentId = searchParams.get("id");
  let mediaType = searchParams.get("mediaType");
  const baseUrlImg = "https://image.tmdb.org/t/p/w500";
  const imagePath =
    mediaType === "person" ? details.profile_path : details.poster_path;

  async function getTrindingDetails(mediaType) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${currentId}?api_key=70cc0ca46558d5eb93d0ecb9b437dd6b`
    );
    setDetails(data);
  }

  useEffect(() => {
    getTrindingDetails(mediaType);

    // Lazy load fallback image
    import("../../assets/Noxe img.png").then((img) => {
      setFallbackImg(img.default);
    });
  }, [mediaType]);

  return (
    <div className="row g-4">
      {/* Poster / Profile Image */}
      <div className="col-12 col-md-4">
        <div className="shadow rounded-3 overflow-hidden">
          <img
            className="w-100"
            src={imagePath ? baseUrlImg + imagePath : fallbackImg}
            alt={details.title || details.name}
            loading="lazy"
            onError={(e) => {
              if (fallbackImg) e.currentTarget.src = fallbackImg;
            }}
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="col-12 col-md-8 text-white">
        {/* Back Button */}
        <div className="mb-3">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-light btn-sm d-flex align-items-center gap-2 shadow-sm rounded-pill px-3 py-2 w-auto w-md-auto"
          >
            <ArrowLeftIcon width={18} height={18} /> Back
          </button>
        </div>

        {/* Title */}
        <h2 className="fw-bold h4 h-md-2">{details.title || details.name}</h2>

        {/* Subtitle */}
        <h4 className="text-muted mb-3 small small-md">
          {details.original_title || details.original_name}
        </h4>

        {/* Genres */}
        <div className="mb-3 d-flex flex-wrap">
          {details.genres?.map((genre) => (
            <span
              className="badge bg-info text-dark me-2 mb-2 px-2 py-1"
              key={genre.id}
            >
              {genre.name}
            </span>
          ))}
        </div>

        {/* Info Section */}
        {mediaType === "person" ? (
          <div className="mt-3">
            <p>
              <strong>Popularity :</strong> {details.popularity}
            </p>
            <p>
              <strong>Birthday :</strong> {details.birthday}
            </p>
            <p>
              <strong>Place of Birth :</strong> {details.place_of_birth}
            </p>
            <p className="mt-3">
              <strong>Biography :</strong> {details.biography}
            </p>
          </div>
        ) : (
          <div className="mt-3">
            <p>
              <strong>Vote :</strong> {details.vote_average}
            </p>
            <p>
              <strong>Vote Count :</strong> {details.vote_count}
            </p>
            <p>
              <strong>Popularity :</strong> {details.popularity}
            </p>
            <p>
              <strong>Release Date :</strong> {details.release_date}
            </p>
            <p className="mt-3">{details.overview}</p>
          </div>
        )}
      </div>
    </div>
  );
}
