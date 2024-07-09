import React, { useContext } from "react";
import { trendingContext } from "../Context/Store";

export default function People() {
  let { trendingPeople, baseUrlImg, goToDetails } = useContext(trendingContext);

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="welcome my-5">
          <div className="brdr w-25"></div>
          <h2 className="mt-4">Trending</h2>
          <h2>Person</h2>
          <h2>to watch now</h2>
          <p className="text-muted">most watched person by days</p>
          <div className="brdr w-100"></div>
        </div>
      </div>
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
