import '../App.css';
import UserData from './UserData';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
          <UserData />
      </header>
    </div>
  );
}

export default App;
