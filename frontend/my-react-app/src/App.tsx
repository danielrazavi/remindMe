import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReminderApp from "./components/ReminderApp";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ReminderApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
