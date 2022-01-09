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
        <>
            <Header activeTab="main" />
            <main className="main">            
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio /> 
            </main>        
            <Footer />
        </>
        
    );
}

export default Main;