import Nav from "../components/partials/Nav";
import Footer from "../components/partials/Footer";

export default function DefaultLayout(props) {
    return (
        <>
            <Nav/>
            {props.children}
            <Footer/>
        </>
    );
}