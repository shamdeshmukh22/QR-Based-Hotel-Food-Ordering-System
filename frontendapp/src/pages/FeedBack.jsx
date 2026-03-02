import NavBar from "./NavBar";
import Footer from "./footer";
export default function Feedback(){
    return(
        <>
        <NavBar/>
        <div className="container">
            <div className="row">
                 <div className="col-md-12 headline pt-1 pb-1">
                    <h3>Custmor review </h3>
                </div>
                 <div className="col-md-2"></div>
                <div className="col-md-8 mt-4 contact_us_form">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="name">Name <span className="text-danger">*</span></label>
                            <input type="text" name="name" className="form-control" id="" />
                        </div>
                        
                       <div className="col-md-5"></div>

                        <div className="col-md-1"></div>

                        <div className="col-md-12 mt-3">
                            <label htmlFor="email">email <span className="text-danger">*</span></label>
                            <input type="text" name="email" className="form-control" id="" />
                        </div>


                      

                        <div className="col-md-12 mt-3">
                            <label htmlFor="mobile">mobile <span className="text-danger">*</span></label>
                            <input type="text" name="mobile" className="form-control" id="" />
                        </div>
                       

                        <div className="col-md-12 mt-3">
                            <label htmlFor="mobile">message<span className="text-danger">*</span></label>
                            <textarea name="message" className="form-control" id=""></textarea>
                        </div>
                       
                        <div className="col-md-12 mt-3 mb-3 text-center">
                            <button className="btn btn-primary pr-5 pl-5">submit</button>
                         </div>
                      </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}