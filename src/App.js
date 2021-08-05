import './App.css';
import Greeter from './components/Greeter'

function App() {
  const peopleToGreet = [
    'Dom',
    'Brian',
    'Mia',
    'Letty'
  ]
  return (
    <div className="App">
      {peopleToGreet.map((person, index) => {
        return <Greeter key={index} name={person} />
      })}
      {/* <Greeter name="Dom"/>
      <Greeter name="Brian"/>
      <Greeter name="Mia"/>
      <Greeter name="Letty"/> */}
    </div>
  );
}


export default App;
