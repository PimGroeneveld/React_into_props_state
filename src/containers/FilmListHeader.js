import React, {Component} from "react";
import FilmList from "./FilmList.js";

//state
class FilmListHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      //create dummylist of data
      data: [
        {
          id: 1, title: "Bad Times at the El Royale"
        },
        {
          id: 2, title: "The Big Lebowksi"
        }
      ]
    };
  }

  render(){
    return (
      <div className = "film-title-header">
      <FilmList data={this.state.data}/>
      </div>
    )
  }
}

export default FilmListHeader;
