import Footer from "../Footer";
import Header from "../Header";
import AboutMe from "./AboutMe";
import AboutProject from "./AboutProject";
import Portfolio from "./Portfolio";
import Promo from "./Promo";
import Techs from "./Techs";
import './Main.css'

function Main({loggedIn}) {
    return (
        <>
            <Header activeTab="main" isLoggedIn={loggedIn} />
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