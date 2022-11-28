import { ChangeEventHandler } from 'react';

interface SearchProps {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Search({ value, onChange }: SearchProps) {
  return (
    <div className="search">
      <h4>Search for a country by name</h4>
      <input
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
