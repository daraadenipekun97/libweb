import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import store from "./Store";
import { Provider } from "react-redux";


import {
  LandingPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  VerifyEmailPage,
  HomePage,
  DashboardPage,
  NotfoundPage
} from "./pages"; 

function App() {
  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signin" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot" element={<ForgotPasswordPage />} />
          <Route path="reset" element={<ResetPasswordPage />} />
          <Route path="verify" element={<VerifyEmailPage />} />
          <Route path="home" element={<HomePage/>}>
            <Route path="dashboard" element={<DashboardPage/>}/>
          </Route>


          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr}
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        progressBar
        closeOnToastrClick
      />
     </Provider>
    </>
  );
}

export default App;
