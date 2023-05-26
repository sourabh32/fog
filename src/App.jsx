import { BrowserRouter,Routes,Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./routes/Home"
import Checkout from "./routes/Checkout"
import Account from "./routes/Account"

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
