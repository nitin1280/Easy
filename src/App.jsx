import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllDetails from "./Components/AllDetails/AllDetails";
import Statement from "./Components/Statement/Statement";
import Interview from "./Components/Interview/Interview";
import Documents from "./Components/Documents/Documents"
import Db from "./Components/DB/Db"
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AllDetails/>}/>
      <Route path="/DB" element={<Db/>}/>
      <Route path="/Document" element={<Documents/>}/>
      <Route path="/Statement" element={<Statement/>}/>
      <Route path="/Interview" element={<Interview/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App