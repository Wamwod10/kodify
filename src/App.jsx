import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import HomeLayout from "./components/home/HomeLayout";
import Login from "./components/nav/pages/login/Login";
import Header from "./components/header/Header";
import Course from "./components/course/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Header />} />
          
        </Route>
        <Route path="login" element={
          <>
            <Nav />  
            <Login />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
