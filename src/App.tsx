import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import { FormLayout } from "./components/FormLayout";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./context/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./context/AuthProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<FormLayout />}>
                <Route
                  path="/"
                  element={<ProtectedRoute children={<HomePage />} />}
                />
                <Route
                  path="/signup"
                  element={<ProtectedRoute children={<SignUpPage />} />}
                />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
