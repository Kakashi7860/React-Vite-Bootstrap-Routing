

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';


function App() {
 

  return (
    <>
     
  <Navbar/>

  <Routes>

    <Route path="/" element ={<Home />}/>
    <Route path="/About" element ={<About />}/>
    <Route path="/Service" element ={<Service />}/>



  </Routes>
        
    </>
  )
}

export default App
