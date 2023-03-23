import { useState, useEffect } from 'react';
import DigimonList from './components/DigimonList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // useState set to null bc at the beginning there's nothing to state (will be updated with setDigimon)
  const [digimon, setDigimon] = useState(null);
  // useEffect always needs an arrow funciton and an empty array
  useEffect(() => {
    // here we're defining the steps for when we fetch the data. Ex of side effect
    const fetchData = async () => {
      try {
        const res = await fetch('https://digimon-api.vercel.app/api/digimon');
        //  the response returns a response object, then parse that data with .json() to turn it into data
        const data = await res.json();
        // optional: cuts down the API data to a more manageable amount
        // const digidata = data.splice(0, 20)
        console.log(data);
        // optional would be to update digimon state (line 7) with "digidata" (line 17) by using:
        // setDigimon(digidata)
        setDigimon(data);
      } catch (e) {
        console.error(e);
      }
    };
    // now the fetchData function is called
    fetchData();
  }, []);
  //We pass the state variable into DigimonList.js component via the prop 'digimon' to make the state data available on that level
  return (
    <div className="App">
      <h1>Digimon App</h1>
      {digimon && <DigimonList digimonData={digimon} />}
    </div>
  );
}

export default App;
