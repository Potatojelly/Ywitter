import './App.css';
import {Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Header from './components/Header/Header';
import { useAuth } from './context/AuthContext';

function App() {
  const {user, logOut} = useAuth();
  const navigate = useNavigate();

  const onAllTweets = () => {
    navigate("/");
  };
  
  const onMyTweets = () => {
    navigate(`/${user.username}`);
  };

  const onLogout = () => {
    if(window.confirm("Do you want to log out?")) {
      logOut();
      navigate("/");
    }
  }
  return (
    <div className="app">
      <Header
        username={user.username}
        onLogout={onLogout}
        onAllTweets={onAllTweets}
        onMyTweets={onMyTweets}
      />
      <Outlet/>
    </div>
  );
}

export default App;
