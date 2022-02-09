import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';

function App(props: any) {
  return (
    <BrowserRouter basename={props.basename}>
      <Link to="/">Home</Link>
    </BrowserRouter>
  );
}

export default App;
