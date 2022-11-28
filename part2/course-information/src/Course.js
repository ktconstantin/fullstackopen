import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

export default function Course({ course }) {
  const total = course.parts.map(part => part.exercises).reduce((prev, next) => prev + next, 0);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}
