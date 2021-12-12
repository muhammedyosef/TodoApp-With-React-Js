// import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Register from './Register/register';
import ToDo from './toDo/todo';

function App() {
  return (
    <div className="App">
      <div className="container my-5">
      <Login/>
      {/* <Register/> */}
      {/* <ToDo/> */}
      </div>
    </div>
  );
}

export default App;
