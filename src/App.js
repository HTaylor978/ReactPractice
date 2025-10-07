import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList';
import data from './todoData.json';
import AddEditToDo from './components/AddEditToDo';
// import ToDoModel from './ToDoModel';


function App() {
  return (
    <div>
      <Header />
      <ToDoList todos={data} />
      <AddEditToDo />
      <Footer />
    </div>
  );
}

export default App;
