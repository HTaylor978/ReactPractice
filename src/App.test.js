import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Footer from './components/Footer';
import App from './App';
import ToDoList from './components/ToDoList';

test('Header contains text: My Todo App', () => {
  const text = 'My Todo App';
  render(<Header />);
  const headerText = screen.getByText(text);
  expect(headerText).toBeInTheDocument();

});

test('Header contains text: Adnan and Harry', () => {
  const text = 'Adnan and Harry';
  render(<Footer />);
  const footerText = screen.getByText(text);
  expect(footerText).toBeInTheDocument();

});

test('Test that the following words are in the todo-list-header: Description, Date Created, Action, Status', () => {
  const { toDoList } = render(<ToDoList />);
  const header = toDoList.getElementsByClassName('todo-list-header')

  const description = header.getByText('Description')
  const dateCreated = header.getByText('Date Created')
  const Action = header.getByText('Action')
  const Status = header.getByText('Status')

  //expect(header.length).toBeEqualTo(1)
  expect(description).toBeInTheDocument();

});