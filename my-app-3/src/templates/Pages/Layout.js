import Header from '../StaticElement/Header.js';
import Footer from '../StaticElement/Footer.js';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <>
            <Header/>

            <Outlet/>

            <Footer/>
        </>
    )
}

export default Layout