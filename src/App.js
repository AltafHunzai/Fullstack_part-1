import { useState } from 'react';
import { Button } from './components/Button';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);
  const [anecdotesPoints, setAnecdotesPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  })

  const Header = ({ title }) => {
    return (
      <h1>{title}</h1>
    )
  }
  const Content = ({ part, exercises }) => {
    return (
      <p>{part} {exercises}</p>
    )
  }
  const Total = ({ exercises }) => {
    return (
      <p>Number of exercises {exercises}</p>
    )
  }
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const copy = { ...anecdotesPoints }
  const GiveVote = () => {
    if (selected === 0) {
      copy[selected]++
      setAnecdotesPoints(copy)
    } else if (selected === 1) {
      copy[selected]++
      setAnecdotesPoints(copy)
    } else if (selected === 2) {
      copy[selected]++
      setAnecdotesPoints(copy)
    } else if (selected === 3) {
      copy[selected]++
      setAnecdotesPoints(copy)
    } else if (selected === 4) {
      copy[selected]++
      setAnecdotesPoints(copy)
    } else if (selected === 5) {
      copy[selected]++
      setAnecdotesPoints(copy)
    } else if (selected === 6) {
      copy[selected]++
      setAnecdotesPoints(copy)
    } else if (selected === 7) {
      copy[selected]++
      setAnecdotesPoints(copy)
    }
  }

  const all = good + neutral + bad
  const positive = good * 100 / all
  const average = (good * (1) + neutral * (0) + bad * (-1)) / all

  const Statistics = () => {
    if (good === 0 & neutral === 0 & bad === 0) {
      return <p>No feedback given</p>;
    } else {
      return (
        <div>
          <Header title={'Statistics'} />
          <table>
            <tbody>
              <tr>
                <td>good</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>neutral</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>bad</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>average</td>
                <td>{average}</td>
              </tr>
              <tr>
                <td>positive</td>
                <td>{positive} %</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  };
  const hasMaxVotes = Object.keys(anecdotesPoints).reduce((maxKey, key) => {
    return anecdotesPoints[key] > anecdotesPoints[maxKey] ? key : maxKey;
  }, 0);
  // console.log(`Anecdote ${hasMaxVotes} has the most points: ${anecdotesPoints[hasMaxVotes]} ${}`);
  return (
    <div>
      <Header title={course.name} />
      <div>
        {course.part.map((data, index) => {
          return (
            <Content key={index} part={data.name} exercises={data.exercises} />
          )
        })}
      </div>
      <Total exercises={course.part[0].exercises + course.part[1].exercises + course.part[2].exercises} />
      <hr />
      <Header title={'Give feedback'} />
      <div className='flex'>
        <Button onClick={() => setGood(good + 1)} title={'good'} />
        <Button onClick={() => setNeutral(neutral + 1)} title={'neutral'} />
        <Button onClick={() => setBad(bad + 1)} title={'bad'} />
      </div>
      <Statistics />
      <hr />
      <div>
        <Header title={'anecdotes '} />
        <p>{anecdotes[selected]}</p>
        <p>has {anecdotesPoints[selected]} votes</p>
        <div style={{ display: 'flex' }}>
          <Button onClick={() => GiveVote()} title={'Vote'} />
          <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} title={'next anecdotes'} />
        </div>
        <Header title={'anecdotes with most votes '} />
        <p>{anecdotes[hasMaxVotes]}</p>
        <p>has {anecdotesPoints[hasMaxVotes]} votes</p>
      </div>
    </div >
  );
}

export default App