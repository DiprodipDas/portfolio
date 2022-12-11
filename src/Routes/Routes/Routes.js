import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home"
import Projects from "../../Pages/Home/Project/Projects";
import ProjectDetails from "../../Pages/ProjectDetails/ProjectDetails";

 const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/project',
                element:<Projects></Projects>
            },
            {
                path:'/project/:id',
                element:<ProjectDetails></ProjectDetails>,
                loader:({params})=> fetch(`http://localhost:5000/project/${params.id}`)
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])

export default router;