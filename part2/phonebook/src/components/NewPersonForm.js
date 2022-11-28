import React from 'react';

export default function NewPersonForm({
  onSubmit,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <h4>Add new person</h4>
        <div>
          Enter name: 
          <input 
            value={newName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="number">
          Enter phone number in XXX-XXX-XXXX format:
          <input 
            className="number-input"
            required
            type="tel"
            value={newNumber}
            onChange={handleNumberChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <span className="validity"></span>
        </div>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}
