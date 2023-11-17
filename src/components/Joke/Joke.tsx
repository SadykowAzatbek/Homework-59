import {useEffect, useState} from 'react';
import JokeElem from './JokeElem';

const url = 'https://api.chucknorris.io/jokes/random';

const Joke = () => {
  const [jokes, setJokes] = useState<string[]>([]);


   useEffect(() => {
    const jokeFunc = async () => {
      const response = await fetch(url);


      if (response.ok) {
        const jokeChuck: string[] = await response.json();

        setJokes(jokeChuck.value);
      }
    };

    void jokeFunc();


  }, []);

  const newJoke = async () => {
    const response = await fetch(url);
    const jokeChuck: string[] = await response.json();
    setJokes(jokeChuck.value);
  };

  return (
    <>
      <JokeElem valueJoke={jokes} newJoke={newJoke} />
    </>
  );
};

export default Joke;