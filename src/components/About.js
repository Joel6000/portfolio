import Joel_img from "../images/Joel_img.jpg";
import resume from "../resume/Joel_Resume.pdf";
import { Link } from "react-router-dom";

function About () {

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center" style={{height:"150px"}}>
        <h2>About</h2>
      </div>
      <div className="row">
      <p className="description lead text-monospace text-center col-12">Who's this Joel?</p>
        <div className="d-flex align-items-center justify-content-center col-lg-4">
          <img src={Joel_img} alt="Joel's img" style={{ borderRadius: 35, width:300, margin:10}}/>
        </div>
        <div className="d-flex flex-column justify-content-center col-lg-8">
          <p className="about-p">Joel-Yi Lim</p>
          <p className="about-p">I'm an engineer whom recently graduated from <a className="link" href="https://www.nextacademy.com/">NEXT Academy</a>'s Quantum Degree of Full Stack Web Development 10-week intensive Bootcamp.</p>
          <p className="about-p">During this bootcamp, I have learned several Languages / Framework / Libraries through this bootcamp.</p>
          <p className="about-p">I believe that coding will be a required fundamental skill in the future and I enjoyed the challenges faced and satisfication made when comes to coding.</p>
          <p className="about-p">Feel free to click into <Link className="link" to="/portfolio">Portfolio</Link> for projects I have done previosly.</p>
          <p className="about-p">Please click into <Link className="link" to="/experiences">Experiences</Link> for more details about my personal background.</p>
          <p className="about-p">I'm currently looking forward to enhance my personal career as a Full-stack Web Developer.</p>
          {/* <a href={resume} download="Joel_Resume">123</a> */}
        </div>
      </div>
    </div>
  );
}

export default About;