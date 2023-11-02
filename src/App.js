import './App.css';
// import TodoList from './Components/TodoList';
import Todo from './Components/Todo.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoNav from './Components/TodoNav';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/about' element={<TodoNav />} />


      </Routes>

    </Router>

    


    </>
  );
}

export default App;
