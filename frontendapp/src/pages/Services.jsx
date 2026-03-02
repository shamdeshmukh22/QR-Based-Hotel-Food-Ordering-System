import NavBar from "./NavBar";
import Footer from "./footer";
export default function Services(){
    return(
        <>
        <NavBar/>
         <div className="container  mt-2 ">
            <div className="row">
                <div className="col-md-12 headline pt-1 pb-1">
                    <h3> Our Services </h3>
                </div>
                  <div className="col-md-12">
                    <div class="service-item">
    <h3>Dine-In Service</h3>
    <p>
      Enjoy freshly prepared meals in our clean and comfortable dining
      environment designed for a relaxing food experience.
    </p>
  </div>

  <div class="service-item">
    <h3>Online Food Ordering</h3>
    <p>
      Order your favorite meals easily through our website and enjoy quality
      food at home.
    </p>
  </div>

  <div class="service-item">
    <h3>Fast Home Delivery</h3>
    <p>
      We ensure quick and safe delivery so your food arrives fresh and hot
      at your doorstep.
    </p>
  </div>

  <div class="service-item">
    <h3>Takeaway Service</h3>
    <p>
      Customers can pick up their orders quickly, making it convenient for
      meals on the go.
    </p>
  </div>

  <div class="service-item">
    <h3>Catering Service</h3>
    <p>
      We provide catering for events and parties with customizable menus
      suitable for every occasion.
    </p>
  </div>

  <div class="service-item">
    <h3>Customer Support</h3>
    <p>
      Our support team is always ready to help with orders, feedback, and
      special requests.
    </p>
  </div>
                  </div>
                </div>
                </div>
        <Footer/>
        </>
        )};