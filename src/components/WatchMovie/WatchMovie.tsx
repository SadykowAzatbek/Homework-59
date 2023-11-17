import React, {ChangeEvent, useState} from 'react';
import ItemMovie from './itemMovie';

const WatchMovie = () => {
  const [addMovie, setAddMovie] = useState<string[]>([]);
  const [movie, setMovie] = useState('');

  const createMovie = (e: ChangeEvent<HTMLInputElement>) => {
    setMovie(e.target.value);
  };

  const addElemMovie = () => {
    setAddMovie(prevMovies => [...prevMovies, movie]);
    setMovie('');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedMovies = [...addMovie];
    updatedMovies[index] = e.target.value;
    setAddMovie(updatedMovies);
  };

  const deleteMovies = (index: number) => {
    setAddMovie((prevState) => prevState.splice(index, 1));
  };

  return (
    <>
      <div className="d-flex">
        <input type="text" className="form-control m-3" onChange={createMovie} value={movie}/>
        <button className="btn btn-primary m-2" onClick={addElemMovie}>Add</button>
      </div>
      {addMovie.map((person, index) => (
        <ItemMovie
          valueInfo={person}
          onChangeInput={(e) => handleChange(e, index)}
          key={Math.random().toString()} deleteMovies={() => deleteMovies(index)} />
      ))}
    </>
  );
};

export default WatchMovie;
