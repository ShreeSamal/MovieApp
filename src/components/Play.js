import React from 'react'
import { useParams } from 'react-router-dom';

export default function Play() {
    const {id} = useParams();

    const movie_play = 'https://www.2embed.to/embed/tmdb/movie?id=';
  return (
    <div style={{height: '500px'}}>
      <iframe id="iframe" src={movie_play + id} width="100%" height="100%" frameBorder="0" allowfullscreen="true"
      webkitallowfullscreen="true" mozallowfullscreen="true" title="myFrame"></iframe>
    </div>
  )
}
