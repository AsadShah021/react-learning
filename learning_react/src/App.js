import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function App() {
  let name = "REACT LEARNING"
  return (
   <div>
  <h1>Welcome to {name} HOHO</h1>
  <FontAwesomeIcon icon={faWhatsapp} size="10x" color="green" />
   </div>
  );
}

export default App;
