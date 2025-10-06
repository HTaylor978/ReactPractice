import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList';
import data from './todoData.json';


function App() {
  return (
    <div>
      <Header />
      <ToDoList todos={data}/>
      <Footer />
    </div>
  );
}

export default App;
