import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Episodes() {
    const img_base = 'https://image.tmdb.org/t/p/original';
    const {id,s} = useParams();
    const [show,setShow] = useState('');
    const [image,setImage] = useState('');
    const mystyle = {
        width: '50%',
        margin: 'auto'
      };
    async function getShow(){
        const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${s}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,{
            method: 'GET',
        })
        const mdata = await res.json();
        setShow(mdata);

        const data = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,{
          method: 'GET',
      })
      const tdata = await data.json();
      console.log(tdata.seasons[0].poster_path);
      setImage(tdata.seasons[s].poster_path);
      }
    
      useEffect(()=>{
        getShow();
        // eslint-disable-next-line
      },[]);

  if(show !=='' && image !== ''){
  return (
    <div>
      <div className="displayEpidode">
          <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <h1 className="text-green-400 text-3xl title-font font-medium mb-1 text-center" style={{align: "center"}}>{show.name}</h1>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5" style={mystyle}>
            </div>
            {show.episodes.map((episode)=>
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="No Img" className="lg:w-1/2 w-full lg:h-auto h-64 object-center rounded" style={{height: "450px"}} src={img_base + image} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 items-center">
                  <h1 className="text-white text-3xl title-font font-medium mb-1">{episode.episode_number}. {episode.name}</h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                    </span>
                  </div>
                  <p className="leading-relaxed">{episode.overview}</p>
                  <p className='text-blue-300'>Air Date : {episode.air_date}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                  </div>
                  <div className="flex">
                    <Link to={`/playShow/${id}/${show.season_number}/${episode.episode_number}`}>
                    <button type="submit" className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Watch Now</button>
                    </Link>
                    <div className="add-fav">
                      {/* <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button> */}
                    </div> 
                  </div>
                  </div>
                </div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5" style={mystyle}>
              </div>
              </div>
              )
              }
          </section>
        </div>
    </div>
  )}
  else{
    return(
      <div>
        Loading Episodes
      </div>
    )
  }
}