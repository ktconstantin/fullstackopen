const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        number: 10
      },
      {
        name: 'Using props to pass data',
        number: 7
      },
      {
        name: 'State of a component',
        number: 14
      },
    ]
  };

  const Header = ({ course }) => {
    return (
      <h1>{course}</h1>
    );
  };

  const Content = ({ parts }) => {

    const Part = ({ name, number }) => {
      return (
        <div>
          <h2>{name}</h2>
          <p>{`Number of exercises: ${number}`}</p>
        </div>
      );
    };

    return (
      <div>
        {parts.map((part, index) => (
          <Part 
            key={index}
            name={part.name}
            number={part.number}
          />
        ))}
      </div>
    );
  };

  const Total = ({ parts }) => {
    const numberOfExercises = parts.map(part => part.number);
    const totalExercises = numberOfExercises.reduce((prev, next) => prev + next, 0);

    return (
      <div>
        <p>{`Total number of exercises: ${totalExercises}`}</p>
      </div>
    )
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;