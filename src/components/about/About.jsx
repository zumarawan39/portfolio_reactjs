import Navbar from "../Navbar/navbar";
import Myimg from "../../../public/assests/images/about.png";
import "./about.css"

function About() {
    return(
        <>
        <Navbar/>
        <section>
        <div class="main_2" id="about">
            <div class="inner_main2 inner">
                
                <div class="rigth_main2">
                    <div class="inner_right">
                        <h1>About <span class="color">Me</span></h1>
                        <h3>Software Engineer</h3>
                        <p>As a software engineer proficient in both front-end and back-end technologies, I honed my skills as a MERN
                            stack developer during my tenure at SeeBiz Pvt. Ltd. Leveraging React.js, Node.js, and MongoDB, I have
                            consistently demonstrated the ability to integrate emerging technologies seamlessly into my projects, thereby
                            distinguishing myself in the field of web development.
                            
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
                <div class="left_main2">
                    <div class="about_img">
                    <img src={Myimg} alt="My Image" />
                    </div>
                </div>
            </div>
           </div>
       </section>
        </>
    )
}
export default About;