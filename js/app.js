const API_KEY = "2af737bc-dbce-4d1f-874a-fc182a7b8a0e";
const API_URL_POPULAR =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
    "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(API_URL_POPULAR);
async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-APY-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
    showMovies(respData)
}

// функция для отрисовки всех карточек 

function showMovies(data) {
    const moviesEl = document.querySelector(".movies");

    data.films.forEach((movie) => {
        const movieEl = documenr.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <div class="movie__cover-inner">
        <img class="movie__cover"
            src="https://upload.wikimedia.org/wikipedia/ru/2/2e/%D0%9C%D0%BE%D1%80%D1%82%D0%B0%D0%BB_%D0%9A%D0%BE%D0%BC%D0%B1%D0%B0%D1%82.png"
            alt="">
        <div class="movie__cover--darkened"></div>
    </div>
    <div class="movie__info">
        <div class="movie__title">Mortal Kombat</div>
        <div class="movie__category">Фантастика</div>
        <div class="movie__average movie__average--green">9</div>
    </div>
        `;
    });
}