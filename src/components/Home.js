import React from 'react';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  const mystyle = {
    width: '50%',
    margin: 'auto'
  };
  var img_base = 'https://image.tmdb.org/t/p/original';
  const [movies,setMovies] = useState([]);
  const [tvshows,setTvshows] = useState([]);
    async function getMovies(){
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,{
        method: 'GET',
    })
    const mdata = await res.json();
    var mv = [];
    mv = mdata.results;
    setMovies(mv.slice(0,8));

    const data = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_status=0&with_type=0`,{
        method: 'GET',
    })
    const tdata = await data.json();
    mv = [];
    mv = tdata.results;
    setTvshows(mv.slice(0,8));
  }

  useEffect(()=>{
    getMovies();
     // eslint-disable-next-line
  },[]);

  if(movies.length>0){
  return (
    <div>
        <div className="displayMovie">
          <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <h1 className="text-green-400 text-3xl title-font font-medium mb-1 text-center" style={{align: "center"}}>MOVIES</h1>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5" style={mystyle}>
            </div>
            {movies.map((movie)=>
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="No Img" className="lg:w-1/2 w-full lg:h-auto h-64 object-center rounded" style={{height: "450px"}} src={img_base + movie.poster_path}/>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-white text-3xl title-font font-medium mb-1">{movie.original_title}</h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <span className="ml-3 text-blue-600">Rating:  {movie.vote_average}/10</span>
                    </span>
                  </div>
                  <p className="leading-relaxed">{movie.overview}</p>
                  <p className='text-blue-300'>Released : {movie.release_date}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                  </div>
                  <div className="flex">
                    <Link to={`/playMovie/${movie.id}`}>
                    <button type="submit" className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Watch Now</button>
                    </Link>
                    <div className="add-fav">
                      <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button>
                    </div> 
                  </div>
                  </div>
                </div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5" style={mystyle}>
              </div>
              </div>)}
          </section>
        </div>
        <div className="displayTv">
          <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <h1 className="text-green-400 text-3xl title-font font-medium mb-1 text-center" style={{align: "center"}}> TV SHOWS </h1>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5" style={mystyle}>
            </div>
            {tvshows.map((show)=>
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="No Img" className="lg:w-1/2 w-full lg:h-auto h-64 object-center rounded" style={{height: "450px"}} src={img_base + show.poster_path}/>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-white text-3xl title-font font-medium mb-1">{show.original_name}</h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <span className="ml-3 text-blue-600">Rating:  {show.vote_average}/10</span>
                    </span>
                  </div>
                  <p className="leading-relaxed">{show.overview}</p>
                  <p className='text-blue-300'>Released : {show.release_date}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                  </div>
                  <div className="flex">
                    <Link to={`/show/${show.id}`}>
                    <button type="submit" className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Watch Now</button>
                    </Link>
                    <div className="add-fav">
                      <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button>
                    </div> 
                  </div>
                  </div>
                </div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5" style={mystyle}>
              </div>
              </div>)}
          </section>
        </div>
      </div>
  )}
  else{
    <div>
      No Movie
    </div>
  }
}
