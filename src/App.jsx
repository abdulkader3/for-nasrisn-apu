
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar';


function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Navbar/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={shanto}/>
  
    </>
  );
}

export default App;
