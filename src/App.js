import { useState } from "react";
import "./styles.css";
const button = ["Thriller", "Comedy", "Fantasy", "Drama"];

var movieArchive = {
  Thriller: {
    movieName: ["Emily the Criminal", "Cargo", "The Autopsy of Jane Doe"],
    rating: ["6.7/10", "6.3/10", "6.8/10"]
  },

  Comedy: {
    movieName: ["Triangle of Sadness", "The Intern", "The Nice Guys"],
    rating: ["7.9/10", "7.1/10", "7.3/10"]
  },

  Fantasy: {
    movieName: ["Meet Cute", "Colossal", "Love and Monsters"],
    rating: ["5.5/10", "6.2/10", "6.9/10"]
  },

  Drama: {
    movieName: ["Good Nurse", "Vengeance", "Jeff, who lives at home"],
    rating: ["6.9/10", "6.8/10", "6.5/10"]
  }
};

export default function App() {
  var [movieGenre, setMovieGenre] = useState("Thriller");

  function genreClickHandler(item) {
    setMovieGenre(item);
  }

  return (
    <div className="App">
      <h1>🎥 Indie Movies</h1>
      <p>Some of the coolest indie movies. Select your favourite genre.</p>
      {button.map((item, index) => {
        return (
          <button
            key={index}
            id="click"
            onClick={() => genreClickHandler(item)}
          >
            {" "}
            {item}
          </button>
        );
      })}

      <hr className="lineBreak" />

      <ul id="list">
        {movieArchive[movieGenre].movieName.map(function (item, index) {
          return (
            <li key={item} id="boxOffice" style={{ listStyle: "none" }}>
              {item}
              <p> </p>
              <div id="rating" style={{ paddingTop: "2rem" }}>
                {" "}
                {"⭐ "}
                {movieArchive[movieGenre].rating[index]}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
