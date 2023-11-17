import React from 'react';

interface Props {
  valueJoke: string[];
  newJoke: () => void;
}

const JokeElem: React.FC<Props> = ({valueJoke, newJoke}) => {
  return (
    <div>
      {valueJoke}
      <button className="btn btn-success" onClick={newJoke}>new joke</button>
    </div>
  );
};

export default JokeElem;