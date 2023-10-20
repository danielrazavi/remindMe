import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReminderApp from "./components/ReminderApp";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/" element={<ReminderApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
