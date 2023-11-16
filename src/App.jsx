import { BrowserRouter as Router} from "react-router-dom"
import RouteComponent from "./components/routes/RouteComponent.jsx"
import NavBar from "./components/navBar/NavBar.jsx"

import './App.css'

function App() {

  return (
    <Router>
        <NavBar />
        <RouteComponent />
    </Router>

  )
}

export default App
