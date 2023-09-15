import "./Navbar.css"
import Content from "../../views/Content/Content"
import Footer from "./../Footer/Footer"
export default function Navbar(){
    return(

        <>
        <div className="navbar">
            <div className="link" > HOME</div>
            <div className="link" > ABOUT</div>
            <div className="link" > CONTACT</div>
             
        </div>
         <Content/>
         <Footer />
        </>
    )
}