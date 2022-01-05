import Footer from "../Footer";
import Header from "../Header";
import AboutMe from "./AboutMe";
import AboutProject from "./AboutProject";
import Portfolio from "./Portfolio";
import Promo from "./Promo";
import Techs from "./Techs";
import './Main.css'

function Main() {
    return (
        <div className="main">
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default Main;