import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList';
import data from './todo-backend/todoData.json';
import AddEditToDo from './components/AddEditToDo';
import ToDoModel from './ToDoModel';


function App() {
  return (
    <div>
      <Header />
      <ToDoList todos={data} />
      <AddEditToDo todo={new ToDoModel(data[0].todoDescription, data[0].todoDateCreated, data[0].todoCompleted)}/>
      <Footer />
    </div>
  );
}

export default App;
