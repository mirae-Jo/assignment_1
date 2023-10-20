const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjg1OTE4NjQxOGIwNTgwMmMxOGU2NjFkNTBmZWUyMyIsInN1YiI6IjY1MmY4MDNlY2FlZjJkMDBhZGE4OTM1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5rJpW3RIwPizJYGD-Qw-OXPGwGOQYUBg9AZwjexkOl8",
  },
};

// const API_KEY = "5f859186418b05802c18e661d50fee23";

let url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data["results"]);
    // let title = document.getElementById("movie_title");
    let row = data["results"];
    row.forEach((a) => {
      let img = a["poster_path"];
      let imgSrc = "https://image.tmdb.org/t/p/w500" + img;
      let title = a["title"];
      let overview = a["overview"];
      let vote_average = a["vote_average"];
      let id = a["id"];

      // console.log(title);

      let movieDiv = document.querySelector(".movie_wrap");
      movieDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="movie_card" id="${id}" onclick="handle(event)">
          <img src="${imgSrc}" />
          <h3 id="movie_title">${title}</h3>
          <p>${overview}</p>
          <p>${vote_average}</p>
        </div>`
      );
    });
  })
  .catch((err) => console.error(err));

function handle(event) {
  const cardId = event.target.parentElement.id;
  alert("영화 ID : " + cardId);
}
