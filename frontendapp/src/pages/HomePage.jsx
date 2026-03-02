import NavBar from "./NavBar"
import Footer from "./footer"

export default function Homepage(){
    return(
        <>
        <NavBar/>
        <div className="container-fluid text-capitalize bg-light p-0">
            <div className="row">
                {/* <div className="col-md-12  alert alert-success p-2 mb-0 text-danger text-center" role="alert">
                    <h3><span className="text-warning">!!</span> welcome to our hotel <span className="text-warning">!!</span></h3>
                </div> */}
              <div class=" col-md-12 card alert mt-0 alert-secondary text-white w-100" role="alert" style={{padding:'1px'}}>

<img  className="card-img w-100"src="/images/bg" style={{height:"550px"}} alt="Background"/>
  <div className="card-img-overlay ">
    
    <h1 className="card-title card_sleep "><span  className="bg_headline" >Great Food.Easy Ordering.</span> <br/>
    <span className="bg_headline " style={{color:"rgb(129, 234, 255)"}}>  Perfect Dining Experience.</span></h1>
    <h5 class="card-text mt-4 move_card_details">Explore our delicious menu, scan the QR code at your table, and enjoy fresh meals served quickly and effortlessly.</h5>
        <h6 className=" move_card_details " style={{color:"rgb(129, 234, 255)"}}>Your favorite meals are just a quick scan away.</h6>
      <button className="move_card_details move_button btn btn-primary pe-5 ps-5 mt-3 ">Shop now!</button>
  </div>
</div>
            </div>
        </div>
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-12 alert alert-secondary " style={{'color':'black'}}>
                    <h2>Get More  From Your Hotel with Great Food and Easy Ordering</h2>
                </div>
                <div className="col-md-4 pt-2 mt-4 pb-2 about_border ">
                    <h1 style={{fontSize:'50px'}}>01)</h1>
                    <h4 style={{fontWeight:680,fontSize:'25px'}}>Scan & Order from Your Table</h4>
                    <p style={{fontWeight:250,fontSize:'25px'}}> Guests can simply scan the QR code on their table to browse the menu and place orders instantly without waiting for staff.</p>
                </div>
               <div className="col-md-4 pt-2 mt-4 pb-2 about_border ">
                    <h1 style={{fontSize:'50px'}}>02)</h1>
                    <h4 style={{fontWeight:680,fontSize:'25px'}}>Fresh Food, Fast Service</h4>
                    <p style={{fontWeight:250,fontSize:'25px'}}>Our kitchen prepares every dish with fresh ingredients and delivers it quickly to your table for the perfect dining experience..</p>
                </div>
                <div className="col-md-4 pt-2 mt-4 pb-2 about_border ">
                    <h1 style={{fontSize:'50px'}}>03)</h1>
                    <h4 style={{fontWeight:680,fontSize:'25px'}}>Comfortable Casual Dining</h4>
                    <p style={{fontWeight:250,fontSize:'25px'}}> Enjoy a relaxing atmosphere perfect for families, friends, and business guests while enjoying delicious meals.</p>
                    </div>
               
            </div>
            
        </div> 
        <section className="container-fluid p-5 mt-5 mb-0">
            <div className="row">
                <div className="col-md-6">
                    <img src="/images/women_scanning" alt="" style={{height:"450px"}} className="img-fluid" />
                </div>
                <div className="col-md-6 pt-5 self_service ">
                    <h4>Direct - Self-Service</h4>
                    <h1 className="">Give your guests full control over when and where they want to eat</h1>
                    <h6>Allow your guests to order and pay independently at any time. Your guests will receive information on when and where to pick up their order via a PickUp SMS.</h6>

                    <button className="btn pe-4 ps-4 move_button">More about our service</button>
                    <button className="btn pe-4 ps-4 move_button">shop</button>
                </div>
            </div>
        </section>

        <section className="container-fluid mt-0">
            <div className="row">
                <div className="col-md-6 self_service p-5  pr-0">
                    <br />
                    <h4 className="mt-5">Paying has never been so easy</h4>
                    <h1>No more waiting for the bill, serve your guests faster</h1>
                    <h6>Indulge your guest with traditional service and offer them the convenience of table side payment through a QR code. This way, you can quickly turn over your tables and provide a seamless dining experience.</h6>
                 <button className="btn pe-4 ps-4 move_button">More about Us</button>
                    <button className="btn pe-4 ps-4 move_button">shop</button>
                </div>
                <div className="col-md-3 pt-5">
                    <img src="/images/man_with_cup" className="img-fluid mt-5" style={{height:"500px"}} alt="" />
                </div>
                  <div className="col-md-3 pt-5">
                    <img src="/images/girl_with_cup" className="img-fluid " style={{height:"500px"}} alt="" />
                </div>
            </div>
        </section>
        <Footer/>

        </>
    )
}