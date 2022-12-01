import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import store from "./Store";
import { Provider } from "react-redux";
import Preloader from "./components/preloader/Preloader";

// import {
//   LandingPage,
//   LoginPage,
//   RegisterPage,
//   ForgotPasswordPage,
//   ResetPasswordPage,
//   VerifyEmailPage,
//   HomePage,
//   DashboardPage,
//   NotfoundPage
// } from "./pages";

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));
const LoginPage = lazy(() => import("./pages/loginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/registerPage/Register"));
const ForgotPasswordPage = lazy(() => import("./pages/forgotPassword/ForgotPassword"));
const ResetPasswordPage = lazy(() => import("./pages/resetPassword/ResetPassword"));
const VerifyEmailPage = lazy(() => import("./pages/verifyEmail/VerifyEmail"));
const HomePage = lazy(() => import("./pages/home/Home"));
const DashboardPage = lazy(() => import("./pages/dashboard/Dashboard"));
const LibraryPage = lazy(() => import("./pages/library/Library"));
const DiscoverPage = lazy(() => import("./pages/discover/Discover"));
const TrendingPage = lazy(() => import("./pages/trending/Trending"));
const NewReleasesPage = lazy(() => import("./pages/newReleases/NewReleases"));
const ClassicsPage = lazy(() => import("./pages/classics/Classics"));
const KiddiesPage = lazy(() => import("./pages/kiddies/Kiddies"));
const AuthorsPage = lazy(() => import("./pages/authors/Authors"));
const GenrePage = lazy(() => import("./pages/genre/Genre"));
const GenreByIdPage = lazy(() => import("./pages/genre/GenreById"));
const AllAuthorsPage = lazy(() => import("./pages/authors/AllAuthors"));
const BooksPage = lazy(() => import("./pages/books/Books"));

const NotfoundPage = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  const userDataRegister = JSON.parse(localStorage.getItem("userRegData"));
  const userDataLogin = JSON.parse(localStorage.getItem("userLoginData"));

  const user =
    userDataRegister !== null ? userDataRegister : userDataLogin !== null ? userDataLogin : null;

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<LandingPage user={user} />} />
              <Route path="signin" element={<LoginPage user={user} />} />
              <Route path="register" element={<RegisterPage user={user} />} />
              <Route path="forgot" element={<ForgotPasswordPage user={user} />} />
              <Route path="reset" element={<ResetPasswordPage user={user} />} />
              <Route path="verify" element={<VerifyEmailPage user={user} />} />
              <Route path="home" element={<HomePage user={user} />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="library" element={<LibraryPage />} />
                <Route path="discover" element={<DiscoverPage />} />
                <Route path="trending" element={<TrendingPage />} />
                <Route path="newReleases" element={<NewReleasesPage />} />
                <Route path="classics" element={<ClassicsPage />} />
                <Route path="childrenscorner" element={<KiddiesPage />} />
                <Route path="authors" element={<AllAuthorsPage />} />
                <Route path="authors/:id" element={<AuthorsPage />} />
                <Route path="genre" element={<GenrePage />} />
                <Route path="genre/:id" element={<GenreByIdPage />} />
                <Route path="books/:id" element={<BooksPage />} />

              </Route>

              <Route path="*" element={<NotfoundPage />} />
            </Routes>
          </Suspense>
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
