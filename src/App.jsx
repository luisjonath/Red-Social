import { Route, Routes } from "react-router-dom";
import { CheckingAuth } from "./components/checkingAuth/checkingAuth";
import { useCheckAuth } from "./hooks/useCheckAuth";
import { AuthRoutes } from "./pages/auth/AuthRoutes/AuthRoutes";
import { Home } from "./pages/Home/Home";
import "./App.css";




function App() {
  
  const {status} = useCheckAuth()

  if (status === "checking") {
    return <CheckingAuth/>
  }

  return (
    <Routes>
      {
        (status === "authenticated")
        ? <Route path="/*" element={<Home/>}/>
        : <Route path="/auth/*" element={<AuthRoutes />}/>
      }
      
      
    </Routes>
  );
}

export default App;
