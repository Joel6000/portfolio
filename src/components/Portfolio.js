import next from "../images/nextagram.png";

function Portfolio () {

  return (
    <div className="container">
      <div className="container d-flex align-items-center justify-content-center" style={{height:"150px"}}>
        <h2>Projects</h2>
      </div>
        <div className="container d-flex flex-wrap justify-content-center">
        <p className="description lead text-monospace text-center col-12">
          Feel free to discover my projects!
        </p>
          <div className="project p-0 m-1">
            <a href="https://github.com/Joel6000/nextq" target="_blank">
              <img className="project-img" src={next} alt="image" style={{width:300, height:300}}/>
              <div className="project-text d-flex flex-column align-items-center justify-content-around">
                <h5 className="project-h">NEXTQ</h5>
                <p className="project-p text-center"> Building a queue system mobile app <br/>using <br/>REACT NATIVE, EXPO &amp; FLASK</p>
              </div>
            </a>
          </div>
          <div className="project p-0 m-1" style={{width:300, height:300}}>
            <a href="https://zen-khorana-ff9173.netlify.app/" target="_blank">
              <img className="project-img" src={next} alt="image" style={{width:300, height:300}}/>
              <div className="project-text d-flex flex-column align-items-center justify-content-around">
                <h5 className="project-h">NEXTAGRAM</h5>
                <p className="project-p text-center"> Building an Instagram Clone <br/>using <br/>REACT and FLASK</p>
              </div>
            </a>
          </div>
          <div className="project p-0 m-1" style={{width:300, height:300}}>
            <a href="https://zen-khorana-ff9173.netlify.app/" target="_blank">
              <img className="project-img" src={next} alt="image" style={{width:300, height:300}}/>
              <div className="project-text d-flex flex-column align-items-center justify-content-around">
                <h5 className="project-h">NEXTAGRAM</h5>
                <p className="project-p text-center"> Building an Instagram Clone <br/>using <br/>REACT and FLASK</p>
              </div>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Portfolio;