import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import React , { useState, useEffect } from 'react';
import AddEditToDo from './components/AddEditToDo';
import ToDoModel from './ToDoModel';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Gets all todos from json file and creates a list of ToDoModel classes
  // Done so the class methods can be used throughout
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:5001/api/todos")
      .then(response => {
        setData(response.data.map(todo => (new ToDoModel(todo.todoDescription, todo.todoDateCreated, todo.todoCompleted, todo._id))));
      }).catch((error) => {
        console.error("Failed to fetch data from json" , error);
      });
    };
    fetchData();
    }, [refresh]);
  console.log(data);

  const triggerRefresh = () => setRefresh(prev => !prev);

  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <ToDoList todoModels={data}/>
                <AddEditToDo onSave={triggerRefresh}/>
              </>
            }/>
            <Route path={`/edit/:id`} element={
              <AddEditToDo todoModels={data}/>
            }/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
