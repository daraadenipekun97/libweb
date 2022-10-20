import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import {LandingPage, LoginPage, RegisterPage} from  "./pages"

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signin" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>



      </BrowserRouter>


    </>
  );
}

export default App;
