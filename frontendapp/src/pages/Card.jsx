import NavBar from "./NavBar";
import Footer from "./footer";
export default function Card(){
    return(
        <>
        <NavBar/>
        <div className="container">
            <div className="row">
                 <div className="col-md-12 headline pt-1 pb-1">
                    <h3>Card Us</h3>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}