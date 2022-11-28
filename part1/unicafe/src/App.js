import React, { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <p>{`${text}${value}`}</p>
  );
};

const Statistics = ({
  average,
  percentPositive,
  total
}) => {
  return (
    <div>
      {total > 0 && (
        <div>
          <StatisticLine 
            text="Total Responses: "
            value={total}
          />
          <StatisticLine 
            text="Average: "
            value={average}
          />
          <StatisticLine 
            text="Percent Positive: "
            value={percentPositive}
          />
        </div>
      )}
      {total === 0 && <p>No feedback given</p>}
    </div>
    
  );
};

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const StatisticsTable = ({ data }) => {
  
  return (
    <table>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const average = total === 0 ? 0 : (good - bad) / total;
  const percentPositiveToString = total === 0 ? '0' : `${((good / total) * 100).toFixed(2)}%`;

  function handleGoodClick() {
    setGood(good + 1);
    setTotal(total + 1);
  }

  function handleNeutralClick() {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }

  function handleBadClick() {
    setBad(bad + 1);
    setTotal(total + 1);
  }

  const data = [
    {
      name: 'good',
      value: good
    },
    {
      name: 'neutral',
      value: neutral
    },
    {
      name: 'bad',
      value: bad
    },
    {
      name: 'all',
      value: total
    },
    {
      name: 'average',
      value: average
    },
    {
      name: 'positive',
      value: percentPositiveToString
    },
  ];

  return (
    <div>
      <p>Give Feedback</p>
      
      <div>
        <Button 
          text="Good"
          onClick={handleGoodClick}
        />
        <Button 
          text="Neutral"
          onClick={handleNeutralClick}
        />
        <Button 
          text="Bad"
          onClick={handleBadClick}
        />
      </div>
      
      <h4>Statistics</h4>
      <div>
        <StatisticLine 
          text="Good: "
          value={good}
        />
        <StatisticLine 
          text="Neutral: "
          value={neutral}
        />
        <StatisticLine 
          text="Bad: "
          value={bad}
        />
      </div>
      <StatisticsTable data={data} />
    </div>
  )
}
