import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RouterPage from "./routes/RouterPage"
import Home from "./pages/Home"


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterPage/>,
      children: [
        {path:"/", element: <Home/>}
      ]
    },
  ])

  return <RouterProvider router={router}/>
}

export default App