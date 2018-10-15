import React from "react";
import Film from "../components/Film.js";

const FilmList = (props) => {
  const films = props.data.map((film) => {
    return(
      <Film author={film.title} key={film.id} />
    )
  })

  return (
    <div className ="film-list">
      {films}
    </div>
  )
}

export default FilmList;
