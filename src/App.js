import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import BookLists from "./components/BooksList/BookLists";
import Detail from "./Pages/Detail";

const router = createBrowserRouter([
  {path: '/', element: <BookLists />},
  {path: '/book/:id', element: <Detail />}
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
