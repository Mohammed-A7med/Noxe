import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Details() {
  const [searchParams] = useSearchParams();
  const [details, setDetails] = useState({});
  let currentId = searchParams.get("id");
  let mediaType = searchParams.get("mediaType");
  const baseUrlImg = "https://image.tmdb.org/t/p/w500";
  const imagePath = mediaType === "person" ? details.profile_path : details.poster_path;

  async function getTrindingDetails(mediaType) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${currentId}?api_key=70cc0ca46558d5eb93d0ecb9b437dd6b`
    );
    setDetails(data);
  }

  useEffect(() => {
    getTrindingDetails(mediaType);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <img
            className="w-100 my-2"
            src={baseUrlImg + imagePath }
            alt=""
          />
        </div>

        <div className="col-md-8">
          <div className="desc-details mx-4">
            <h2 className="my-2">{details.title || details.name}</h2>
            <h4 className="my-3">{details.original_title || details.original_name }</h4>
            {details.genres?.map((genre) => (
              <li
                className="btn mx-2 text-white main-bg d-inline-block align-items-center"
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
            {mediaType==='person'?<>
            <h5 className="my-4">popularity : {details.popularity}</h5>
            <h5 className="my-4">birthday : {details.birthday}</h5>
            <h5 className="my-4">place of birth : {details.place_of_birth}</h5>
            <h5 className="my-4">biography : {details.biography}</h5>
            </>:<>
            <h5 className="my-4">vote : {details.vote_average}</h5>
            <h5 className="my-4">vote count : {details.vote_count}</h5>
            <h5 className="my-4">popularity : {details.popularity}</h5>
            <h5 className="my-4">release_date : {details.release_date}</h5>
            <h5 className="my-4 ">{details.overview}</h5></>}
            
          </div>
        </div>
      </div>
    </>
  );
}
