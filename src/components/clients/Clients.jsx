import Navbar from "../Navbar/navbar";
import "./Client.css"
function Clients() {
    return(
        <>
        <Navbar/>
        <section>
        <div class="main_3 " id="services">
            <div class="inner_main3 inner">
                <div class="heading_main3">
                    <h1>Our <span class="color">Services</span></h1>
                </div>
                <div class="cards_main3">
                    <div class="card_main3">
                        <div class="icon">
                            <i class="fas fa-code"></i> 
                        </div>
                        <h1>Web Development</h1>
                        <p>
                            I offer expert front-end web development services, specializing in crafting visually stunning and interactive user interfaces using HTML, CSS, and JavaScript. My aim is to deliver engaging, responsive designs that work seamlessly across all devices and browsers.
                        </p>
                        <button class="btn_card">Read More</button>
                    </div>
                    <div class="card_main3">
                        <div class="icon">
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <h1>Graphic Designer</h1>
                        <p>
                            Experienced in the art of graphic design, I bring creativity and expertise to every project. With a keen eye for detail and a passion for visual storytelling, I specialize in crafting compelling designs that leave a lasting impression
                        </p>
                        <button class="btn_card">Read More</button>
                    </div>
                    <div class="card_main3">
                        <div class="icon">
                            <i class="fas fa-mobile-alt"></i>
    
                        </div>
                        <h1>App Development</h1>
                        <p>
                            Skilled Flutter developer specializing in front-end mobile app development. Proficient in crafting sleek and responsive user interfaces for cross-platform applications. Dedicated to delivering seamless user experiences through innovative design and functionality.
                        </p>
                        <button class="btn_card">Read More</button>
                    </div>
    
                </div>
            </div>
           </div>
       </section>
        </>
    )
}
export default Clients;