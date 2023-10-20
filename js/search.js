const searchBtn = document.querySelector(".search_btn");
const input = document.getElementById("search_box");
function handleSearch() {
  document.querySelector(".main_wrap").style.display = "none";
  document.querySelector(".movie_wrap").innerHTML = "";
  let inputValue = input.value.toUpperCase();
  //   console.log(inputValue);\
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjg1OTE4NjQxOGIwNTgwMmMxOGU2NjFkNTBmZWUyMyIsInN1YiI6IjY1MmY4MDNlY2FlZjJkMDBhZGE4OTM1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5rJpW3RIwPizJYGD-Qw-OXPGwGOQYUBg9AZwjexkOl8",
    },
  };
  let url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      let row = data["results"];
      row.forEach((a) => {
        let title = a["title"].toUpperCase();
        let img = a["poster_path"];
        let imgSrc = "https://image.tmdb.org/t/p/w500" + img;
        let overview = a["overview"];
        let vote_average = a["vote_average"];
        let id = a["id"];
        let movieDiv = document.querySelector(".movie_wrap");
        if (title.includes(inputValue)) {
          movieDiv.insertAdjacentHTML(
            "beforeend",
            `<div class="movie_card" id="${id}" onclick="handle(event)">
              <img src="${imgSrc}" />
              <h3 id="movie_title">${title}</h3>
              <p>${overview}</p>
              <p>${vote_average}</p>
            </div>`
          );
        }
      });
    });
}
searchBtn.addEventListener("click", handleSearch);
