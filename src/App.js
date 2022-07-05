import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubHeader from "./components/SubHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./Contact";
import AboutScreen from "./AboutScreen";
import ServiceScreen from "./ServiceScreen";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <>
        <Header />
        <Home />
        <Footer/>
        </>
        } />

        <Route
          path="contact"
          element={
            <>
              <Header />
              <SubHeader />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="about"
          element={
            <>
              <Header />
              <SubHeader />
              <AboutScreen />
              <Footer />
            </>
          }
        />

        <Route
          path="services"
          element={
            <>
              <Header />
              <SubHeader />
              <ServiceScreen />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
