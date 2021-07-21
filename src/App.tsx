import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { BooksScreen } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {

  return (
    <div>
      <nav>
          <Link to="/playground">Playground</Link>|
          <Link to="/books">Books</Link>|
          {/* <a href="/playground">Playground</a>|
          <a href="/books">Books</a>| */}
      </nav>
      <Switch>
          <Route path="/playground"><PlaygroundScreen /></Route>
          <Route path="/books"><BooksScreen /></Route>
          <Redirect to="/books" />
      </Switch>
  </div>
  );
}


export default App;
