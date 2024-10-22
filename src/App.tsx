import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Landing/>}
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
