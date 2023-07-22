import './App.css';
import {Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  const navigate = useNavigate();
  const username = "user1";

  const onAllTweets = () => {
    navigate("/");
  };
  
  const onMyTweets = () => {
    navigate(`/${username}`);
  };

  const onLogout = () => {
    if(window.confirm("Do you want to log out?")) {
      navigate("/");
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
