import React from 'react';

interface Props {
  valueInfo: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteMovies: () => void;
}

const ItemMovie: React.FC<Props> = ({valueInfo, onChangeInput, deleteMovies}) => {
  return (
    <div>
      <input value={valueInfo} onChange={onChangeInput} className="form-control" />
      <button className="btn btn-primary" onClick={deleteMovies}>Delete</button>
    </div>
  );
};

export default ItemMovie;