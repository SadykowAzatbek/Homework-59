import React from 'react';

interface Props {
  valueInfo: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteMovies: () => void;
}

const ItemMovie: React.FC<Props> = ({valueInfo, onChangeInput, deleteMovies}) => {
  return (
    <div className="d-flex m-3">
      <input value={valueInfo} onChange={onChangeInput} className="form-control m-2" />
      <button className="btn btn-primary" onClick={deleteMovies}>Delete</button>
    </div>
  );
};

export default ItemMovie;