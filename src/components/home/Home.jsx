import Myimg from "../../../public/assests/images/my_img1.png";
import "./home.css";

function Home() {
  return (
    <>
      <div className="main_home">
        <div className="right_home">
          <div className="heading green fs">
            <h3>Hello,</h3>
          </div>
          <div className="bold fs">
            <h1>I'm</h1>
          </div>
          <div className="bold_1 green fs">
            <h1>Software Engineer</h1>
          </div>
          <div className="about">
            <p>
              I am a skilled and Passionate about Web Development with expertise
              in creating visually appealing and user-friendly websites.
            </p>
          </div>
          <div className="home_btn">
            <button className="btn_2">Hire Me!</button>
          </div>
        </div>
        <div className="left_home">
          <div className="my_img">
            <img src={Myimg} alt="My Image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
