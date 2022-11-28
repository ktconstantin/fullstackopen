import React, { useState, useEffect } from 'react';
import '../css/app.css';
import NewPersonForm from './NewPersonForm';
import Phonebook from './Phonebook';
import Search from './Search';
import phonebookService from '../services/phonebook';
import Notification from './Notification';

export default function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    phonebookService
      .getAll()
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function addNewPerson(event) {
    event.preventDefault();

    // Adding a person who is already in the phonebook
    // will ask to confirm replacement of the old number with new number
    if (persons.map(person => person.name).includes(newName)) {
      if (window.confirm(
        `${newName} is already in the phonebook. Replace the number?`
      )) {
        const personObject = {
          name: newName,
          number: newNumber
        };
    
        const idToUpdate = persons.find(person => person.name === newName).id;

        phonebookService
          .update(idToUpdate, personObject)
          .then(response => {
            setPersons(persons.map(person => {
              return person.id !== idToUpdate ? person : response.data;
            }));
     
            setSuccess(true);
            setMessage(`Updated number for ${newName}`);
            setNewName('');
            setNewNumber('');

            setTimeout(() => {
              setSuccessMessage(null);
              setMessage(null);
            }, 3000);
          })
          .catch(error => {
            console.log(error);
            setMessage(`${newName} has already been removed from the server`);
            setSuccess(false);
          });
      }

      return;
    }

    // Adding a person that isn't already in the phonebook
    const personObject = {
      name: newName,
      number: newNumber
    };

    phonebookService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data));
        setMessage(`Added ${newName}`);
        setSuccess(true);
        setNewName('');
        setNewNumber('');

        setTimeout(() => {
          setMessage(null);
        }, 3000);
      })
      .catch(error => {
        console.log(error);
        setSuccess(false);
        setMessage('something went wrong');
      });
  }

  function handleDeleteClick(id) {
    if (window.confirm(
      'Do you want to delete this person from the phonebook?'
    )) {
      phonebookService
        .deleteItem(id)
        .then(() => {
          phonebookService.getAll()
          .then(response => {
            setPersons(response.data);
          })
          .catch(error => {
            console.log(error);
          })
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  function handleNumberChange(event) {
    setNewNumber(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  let filteredPersons = [];

  if (search === '') {
    filteredPersons = persons;
  } else {
    filteredPersons = persons.filter(person => {
      return person.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Notification 
        success={success}
        message={message}
      />
      <Search 
        search={search}
        onChange={handleSearchChange}
      />
      <NewPersonForm
        onSubmit={addNewPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      {filteredPersons.length > 0 && (
        <Phonebook 
          persons={filteredPersons}
          onClick={handleDeleteClick}
        />
      )}
    </div>
  )
}
