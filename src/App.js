import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
// components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              {user ? <Home /> : <Redirect to='/login' />}
            </Route>
            <Route path='/login'>
              {!user ? <Login /> : <Redirect to='/' />}
            </Route>
            <Route path='/signup'>
              {!user ? <Signup /> : <Redirect to='/' />}
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
