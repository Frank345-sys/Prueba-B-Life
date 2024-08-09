import Footer from "./components/Footer";
import Header from "./components/Header";
import Providers from "./components/Providers";
import Main from "./components/Main";
import ArrivalDevice from "./components/ArrivalDevice";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Providers />
      <Fade>
        <ArrivalDevice />
      </Fade>
      <Footer />
    </>
  );
}

export default App;
