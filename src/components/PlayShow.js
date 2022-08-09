import React from 'react';
import { useParams } from 'react-router-dom';
export default function PlayShow() {
  const {id,s,ep} = useParams();
  return (
    <div style={{height: '500px'}}>
      <iframe id="iframe" src={`https://www.2embed.to/embed/tmdb/tv?id=${id}&s=${s}&e=${ep}`} width="100%" height="100%" frameBorder="0" allowfullscreen="true"
      webkitallowfullscreen="true" mozallowfullscreen="true" title="myFrame"></iframe>
    </div>
  )
}
