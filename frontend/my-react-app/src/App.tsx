import Feed from "./components/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchReminderList } from "./model/DatabaseModel";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/list/:reminderListId" Component={Feed} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
