import Movie from './Movie.js';

function MovieList({Movies}) {
  
    return(
      <>
        {Movies.movies.map((movie) => {
          return <Movie name={movie.name} year={movie.year} rating={movie.rating}></Movie>
        })}
      </>
    );
  }

export default MovieList;