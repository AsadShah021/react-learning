import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Header } from './Header';
import { Footer } from './Footer';
import { CardsInfo } from './CardsInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { blogs } from './Data/blogs';


function App() {
  let name = "REACT LEARNING"
  return (
   <div>
   <Header/>
  <center><h2>Our Courses</h2></center>
   <Row>
    {blogs.map((v,i) =>{
      return(
       <CardsInfo key={i} items={v} />
      )
    })}
   </Row>
   <Footer/>
   </div>
  );
}

export default App;
