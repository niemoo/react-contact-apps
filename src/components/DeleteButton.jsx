import React from 'react';

const DeleteButton = ({ id, onDelete }) => {
  return (
    <>
      <button onClick={() => onDelete(id)} className="ml-auto mr-5 my-auto bg-red-400 hover:bg-red-300 py-1 px-2 rounded-lg">
        X
      </button>
    </>
  );
};

export default DeleteButton;
