// botton of chain so in components rather than containers (since it does not contain any other files)
import React from "react";

const Film = (props) => {
  return (
  <div className = "film">
    <h4 className = "film-title">
      {props.title}
    </h4>

  </div>
  )
}

export default Film;
