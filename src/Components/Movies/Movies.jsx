import React, { useContext } from 'react'
import { trendingContext } from '../Context/Store'

export default function Movies() {
  let {trendingMovies , baseUrlImg , goToDetails} =useContext(trendingContext);
  return (
     <div className="row">
        <div className="col-md-4">
          <div className="welcome my-5">
            <div className="brdr w-25"></div>
            <h2 className="mt-4">Trending</h2>
            <h2>Movies</h2>
            <h2>to  watch now</h2>
            <p className="text-muted">most watched movies by days</p>
            <div className="brdr w-100"></div>
          </div>
        </div>
        {trendingMovies.map((movie) => (
          <div onClick={()=> goToDetails(movie.id , 'movie')} key={movie.id} className="col-md-2">
            <div className="movie">
              <div className="contian-img position-relative">
              <img
                className="w-100 my-2"
                src={baseUrlImg + movie.poster_path}
                alt=""
                
              />
              <div className="position-absolute top-0 end-0 bg-info mt-2 p-2">{movie.vote_average.toFixed(1)}</div>
              </div>
              <h2 className="h5 text-center">{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>
  )
}

