import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import Category from "./pages/Category"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/category/:name" element={<Category/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/cart" element={<Cart/>}/>

</Routes>

</BrowserRouter>

)

}

export default App