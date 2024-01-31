import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from './pages/Home';
import Headers from "./components/Header";

import './App.css'

export const ApiProvider = () => {

  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
};
function App() {
  let element = createBrowserRouter([
    {
      element: <ApiProvider />,
      children: [
        {
          path: '/',
          element: <Home/>
        }
      ]
    },
    
  ]);
  return <RouterProvider router={element} fallbackElement={<div>fall back</div>} />;
}

export default App
