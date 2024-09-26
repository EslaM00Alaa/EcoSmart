import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Home from "./pages/home/index";


// import Page404 from "./pages/Page404"; // Make sure this import path is correct

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
    
      
      </Routes>
    </Router>
  );
};

export default AppRouter;
