
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import Descrption from './Descrption';
function App() {
  return (
    <div className="App">
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Descrption />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
