import { Navigate, Route, Routes } from "react-router-dom";
import { CheckingAuth } from "./components/checkingAuth/checkingAuth";
import { useCheckAuth } from "./hooks/useCheckAuth";
import { AuthRoutes } from "./pages/auth/AuthRoutes/AuthRoutes";
import { Home } from "./pages/Home/Home";
import "./App.css";
import { SocialRoutes } from "./pages/SocialRoutes/SocialRoutes";
import { LoginPage } from "./pages/auth/LoginPage/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage/RegisterPage";




function App() {
  
  const {status} = useCheckAuth()

  if (status === "checking") {
    return <CheckingAuth/>
  }

  return (
    <Routes>
       {
        (status === "authenticated")
        ? 
        <Route path="/*" element={<SocialRoutes/>}/>
        : 
      <Route path="/auth/*" element={<AuthRoutes />}/>
      } 
      
      <Route path='/*' element={ <Navigate to='/auth/login' />  } />
    </Routes>
  );
}

export default App;
