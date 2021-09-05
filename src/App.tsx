import './App.css'
import { Row } from './components/Row'
import { Banner } from './components/Banner'
import { Nav } from './components/Nav'
import { requests } from './request'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Tranding Movies" fetchUrl={requests.fetchTrendings} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaryMovies} />
      <Row title="Fantasies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
    </div>
  )
}

export default App
