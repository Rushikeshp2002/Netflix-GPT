import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import ErrorPage from "./ErrorPage";


const Body = () => {
  
  
  const router = createBrowserRouter([
    {
        path:'/',
        element: <Login />,

    },
    {
        path:'/browse',
        element: <Browse/> 
    },{
      path:'/error',
      element:<ErrorPage/>
    }
  ])

  
  return (
    <div className="overflow-hidden">
        
        <RouterProvider router={router}/>
    </div>
  )
}

export default Body