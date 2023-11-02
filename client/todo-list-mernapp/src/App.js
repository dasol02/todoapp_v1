// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Add Todo Item'/>
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">

      </div>
    </div>
  );
}

export default App;
