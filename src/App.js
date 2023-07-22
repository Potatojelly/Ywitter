import './App.css';
import {Outlet} from "react-router-dom";
import {Navigate} from "react-router-dom";
import Header from './components/Header/Header';

function App() {

  const username = "user1";

  const onAllTweets = () => {
    return <Navigate to="/"/>
  };
  
  const onMyTweets = () => {
    return <Navigate to={`/${username}`} />
  };

  const onLogout = () => {
    if(window.confirm("Do you want to log out?")) {
      return <Navigate to="/"/>
    }
  }
  return (
    <div className="app">
      <Header
        username={username}
        onLogout={onLogout}
        onAllTweets={onAllTweets}
        onMyTweets={onMyTweets}
      />
      <Outlet/>
    </div>
  );
}

export default App;
