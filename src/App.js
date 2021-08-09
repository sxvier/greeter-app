import './App.css';
import Greeter from './components/Greeter'
import Timestamp from './components/Timestamp';
import TimestampClock from './components/TimestampClock';
import Translator from './components/Translator'

function App() {
  const peopleToGreet = [
    'Dom',
    'Brian',
    'Mia',
    'Letty'
  ]
  return (
    <div className="App">
      <Timestamp/>
      <TimestampClock/>
      <Translator initialText="Hello World!" />
      <Greeter/>
      
      {peopleToGreet.map((person, index) => {
        return <Greeter key={index} name={person} />
      })}
    </div>
  );
}


export default App;
