import React from 'react';

export default function PersonDisplay({ 
  id,
  name, 
  number,
  onClick
 }) {
  return (
    <div className="person">
      <div>{`${name} ${number}`}</div>
      <button 
        className="delete-button"
        onClick={() => onClick(id)}
      >
        delete
      </button>
    </div>
  )
}
