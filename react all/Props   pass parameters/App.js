
// Through Functional Component or Class Component
import './App.css';
import DateAndTime from './DateAndTime'

function App() {

 //const CurrentDateAndTime = new Date().toLocaleString()
 const fname="3"
 const lname="10:45"
  return (
    <div className="App">
     <DateAndTime fname={fname} lname={lname} />
    </div>
  );
}

export default App;

