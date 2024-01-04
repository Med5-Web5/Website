import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NavbarStyle2NavbarLight from "./pages/Navbar";
import SearchModule from "./pages/SearchModule";
import Results from "./pages/Results";
import Description from "./pages/Description";
import Gender from "./pages/Gender";
import Weight from "./pages/Weight";
import Treatment from "./pages/Treatment";
import Treatments from "./pages/Treatments";
import Symptoms from "./pages/Symptoms";
import Final from "./pages/Final";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={[<NavbarStyle2NavbarLight />, <SearchModule />, <Results />] } />
      <Route path='/dr/' element={[<NavbarStyle2NavbarLight />, <Description />]} />
      <Route path='/dr/gender' element={[<NavbarStyle2NavbarLight />, <Gender />]} />
      <Route path='/dr/gender/weight' element={[<NavbarStyle2NavbarLight />, <Weight />]} />
      <Route path='/dr/gender/weight/treatment' element={[<NavbarStyle2NavbarLight />, <Treatment />]} />
      <Route path='/dr/gender/weight/treatment/treatments' element={[<NavbarStyle2NavbarLight />, <Treatments />]} />
      <Route path='/dr/gender/weight/treatment/treatments/symptoms' element={[<NavbarStyle2NavbarLight />, <Symptoms />]} />
      <Route path='/dr/gender/weight/treatment/treatments/symptoms/final' element={[<NavbarStyle2NavbarLight />, <Final />]} />


    </Routes>
  );
}
export default App;
