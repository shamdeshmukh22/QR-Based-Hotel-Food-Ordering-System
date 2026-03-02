import NavBar from "./NavBar";
import Footer from "./footer";
export default function About(){
    return(
        <>
        <NavBar/>
         <div className="container  mt-2 ">
            <div className="row">
                <div className="col-md-12 headline pt-1 pb-1">
                    <h3>About Us</h3>
                </div>
                <div className="col-md-12 pt-5 ">
                   <h6>
                    Welcome to Savtarang, where comfort meets elegance. Located in the heart of the city, our hotel offers a perfect blend of modern luxury and warm hospitality for both business and leisure travelers.</h6>

                   <h6>At Savtarang, we focus on delivering exceptional experiences with well-furnished rooms, delicious cuisine, and world-class services. Whether you are visiting for business, vacation, or a special occasion, we ensure a memorable and relaxing stay.
                   </h6>

                </div>
                <div className="col-md-12 mt-5 ml-4  mission">
                    <h2>our mission</h2>
                    <h6>Our mission is to ensure complete customer satisfaction by providing exceptional hospitality, comfortable accommodations, and high-quality services. We are committed to serving fresh, hygienic, and delicious food, maintaining the highest standards of cleanliness,
                         and creating a safe and welcoming environment for every guest.</h6>
                    <h6>We continuously strive to improve our services so that every guest enjoys a memorable, comfortable, and satisfying experience with us.</h6>
                </div>
                <div className="col-md-12 mt-5 ml-4  why_choose_us">
                     <h3>Why Choose Us</h3>
                     <ul>
                       <li>We focus on preparing every dish using fresh ingredients and maintaining strict hygiene standards to ensure safe and healthy food for our customers.</li>

                       <li>Our goal is to deliver tasty and high-quality meals that satisfy customers while maintaining consistency in flavor and presentation.</li>

                       <li>We aim to provide quick and reliable food service so customers can enjoy their meals without long waiting times.</li>

                       <li>Our team works continuously to improve food quality and customer service, ensuring every order meets customer expectations.</li>

                       <li>We strive to create a memorable food experience by combining delicious taste, clean preparation practices, and friendly customer support in every service we provide.</li>
                     </ul>
                </div>
            </div>
         </div>
        <Footer/>
        </>
    )
}