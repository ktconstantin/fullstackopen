import React from 'react';

export default function Search({ search, onChange }) {
  return (
    <div className="search">
      <h4>Search by name</h4>
      <input
        type="text"
        value={search}
        onChange={onChange}
      />
    </div>
  )
}
