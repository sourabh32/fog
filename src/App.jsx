import { BrowserRouter,Routes,Route } from "react-router-dom"

import Header from "./components/Header"
import Account from "./components/Account"
import Checkout from "./components/Checkout"
import Home from "./components/Home"
function App() {
  

  return (
    <>
   
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/cart" element={<Checkout />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
