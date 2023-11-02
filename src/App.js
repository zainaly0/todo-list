import './App.css';
// import TodoList from './Components/TodoList';
import Todo from './Components/Todo.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Todo />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
