import React from 'react';
import PersonDisplay from './PersonDisplay';

export default function Phonebook({ persons, onClick }) {
  return (
    <div className="phonebook">
      {persons.map(person => (
        <PersonDisplay 
          key={person.id}
          id={person.id}
          name={person.name} 
          number={person.number}
          onClick={onClick}
        />
      ))}
    </div>
  )
}
