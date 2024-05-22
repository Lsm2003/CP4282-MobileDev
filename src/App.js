import './App.css';
import moviesList from './movies.json';
import NavBar from './NavBar.js';
import MovieList from './MovieList.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <MovieList Movies={moviesList}></MovieList>
    </>
  );
}

export default App;