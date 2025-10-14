import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import './App.css'
import Home from "./pages/home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}  />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
