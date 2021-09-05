const API_KEY = process.env.REACT_APP_API_KEY

// genre IDs
const genreID = {
  action: 28,
  comedy: 35,
  horror: 27,
  romance: 10749,
  documentary: 99,
  fantasy: 14,
  drama: 18,
  crime: 80,
  tvMovie: 10770,
}

// lanaguages
const language = {
  us: 'en-us',
  jp: 'ja-jp',
}

// networks
const network = {
  fuji: 1,
  hbo: 49,
  netflix: 213,
  yomiuri: 569,
}

export const requests = {
  fetchTrendings: `/trending/all/week?api_key=${API_KEY}&language=${language.jp}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=${network.netflix}&language=${language.jp}`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&languager=${language.jp}`,

  // genre
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${genreID.action}`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${genreID.comedy}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${genreID.horror}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${genreID.romance}`,
  fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${genreID.documentary}`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${genreID.fantasy}`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${genreID.drama}`,
}
