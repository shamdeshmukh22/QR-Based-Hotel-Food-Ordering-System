import NavBar from "./NavBar";
import Footer from "./footer";
export default function Contact(){
    return(
        <>
        <NavBar/>
                    <form action="">
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-md-12 mb-5 card element-staring-image p-0">
                    <img src="/images/dinnig_room.jpg" height={450}  className="img-fuild card-img" alt="" />
                    <div className="card-img-overlay ">
                        <div className="card-title headline mt-0 w-100">
                               <h3>contact Us</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4  pt-2 mt-4 pb-2 about_border ">
                    <h1 style={{fontSize:'50px'}}>Address</h1>
                    <p style={{fontWeight:250,fontSize:'25px'}}> Hotel SavpatRang Sector -26, Pradhikaran, Nigdi, Near Akurdi Railway Station, Pune - 411044, Maharashtra, India</p>
                </div>
                  <div className="col-md-4 pt-2 mt-4 pb-2 about_border ">
                    <h1 style={{fontSize:'50px'}}>Contact Number</h1>
                    <p style={{fontWeight:250,fontSize:'25px'}}> +91 93224554289</p>
                    <p style={{fontWeight:250,fontSize:'25px'}}> +91 992323234545</p>
                </div>
                  <div className="col-md-4 pt-2 mt-4 pb-2 about_border ">
                    <h1 style={{fontSize:'50px'}}>Email</h1>
                    <p style={{fontWeight:250,fontSize:'25px'}}>sham.deshmukh@gmail.com</p>
                    <p style={{fontWeight:250,fontSize:'25px'}}>vikas.deshmukh@gmail.com</p>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-8 mt-4 contact_us_form">
                      <div className="row">
                        <div className="col-md-12 headline alert alert-secondary mt-1" role="alert">
                               <h3>contact Us form</h3>

                        </div>
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
                    </form>

        <Footer/>
        </>
    )
}