import './themes/App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { MoviePage } from './pages/MoviePage';
import { NotFoundPages } from './pages/NotFoundPages';




function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={MoviePage}/>
        <Route exact path="/:id" component={MovieDetailsPage}/>
        <Route component={NotFoundPages}/>
      </Switch>
    </Router >

    </>
  );
}

export default App;
