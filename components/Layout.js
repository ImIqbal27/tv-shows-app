import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({children}) => {
    return (
        <div  style={{backgroundColor: 'black'}}>
        <Header/>
        {children}
        <Footer/>
        </div>
    );
};

export default Layout;