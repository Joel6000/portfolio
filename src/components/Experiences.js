import usa from "../images/usa.gif";
import next from "../images/next.png";
import unmc from "../images/unmc.jpg";

function Experiences () {
  return(
    <div className="container">
      <div className="d-flex align-items-center justify-content-center" style={{height:"150px"}}>
        <h2>Experiences</h2>
      </div>
      <div className="row">
        <div className="experience-jumbo jumbotron col-12 mt-2">
          <h1 className="display-5">Personal</h1>
          <div className="row align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center col-md-4 ">
              <img className="rounded-circle m-2" src={usa} style={{ width:200, height:200 }}/>
            </div>
            <div className="flex-column col-md-8">
              <p className="lead">United States Summer Work and Travel 2017 &amp; 2018 <br/> @ Peppermill Resort Hotel, Reno, NV</p>
              <p className="experience-p">I decided to participate USAWAT program for 2 years consecutively during Summer Break of my University life.</p>
              <p className="experience-p">I have worked several positions during the program such as room attendant, assistant master chef and dish washer.</p>
              <p className="experience-p">I would said personally it was an absolutely great experience I had for my life. I've met lot of new friends and widen my own perspectives. </p>
            </div>
          </div>
        </div>
        <div className="experience-jumbo jumbotron col-12">
          <h1 className="display-5">Education</h1>
          <div className="row align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center col-md-4 ">
              <img className="rounded-circle m-2" src={next} style={{ width:150, height:150 }}/>
            </div>
            <div className="flex-column col-md-8">
              <p className="lead">NEXT Academy <br/> Full Stack Web Development </p>
              <p className="experience-p">Quantum Degree of intensive bootcamp in 10 weeks time.</p>
              <p className="experience-p">Languages / Framework / Libraries covered: </p>
              <p className="experience-p">HTML, CSS, JavaScript, Bootstrap, ReactJS, Python, SQL &amp; Flask</p>
              <p className="experience-p">Additional during project: React Native &amp; Expo</p>
            </div>
          </div>
          <hr className="my-4"/>
          <div className="row align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center col-md-4 ">
              <img className="rounded-circle m-2" src={unmc} style={{width:150}}/>
            </div>
            <div className="flex-column col-md-8">
              <p className="lead">University of Nottingham Malaysia Campus <br/> Master of Engineering - MEng, Mechanical Engineering </p>
              <p className="experience-p">I have been taught, trained and think as an engineer during this 4 years time of studies in my University's life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;