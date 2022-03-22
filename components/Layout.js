import Nav from "./Nav";
import Container from "./Container/Container";


const Layout = ({ children }) => {
    return (
            <>
                <Nav/> 
                {children}
            </>

    )
}

export default Layout
