import Home from "@containers/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const routes = [
    {
        path: "/",
        end: true,
        component: Home,
    },
    {
        path: "/navbar",
        end: true,
        component: Navbar
    },
    {
        path: "/footer",
        end: true,
        component: Footer
    }
]

export default routes
