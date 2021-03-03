import { Link } from "react-router-dom";

function Homepage () {

  return (
    <div className="container" style={{height:"91%"}} >
      <div className="row align-items-center justify-content-center" style={{height:"100%"}} >
        <div className="jumbotron m-0" style={{backgroundColor:"mintcream"}}>
          <h1 className="display-5">Hello!</h1>
          <p className="lead">
            Welcome to my personal website! 
            <br/> 
            Let introduce myself, I am Joel. 
            <br/> 
            Currently, this website is still under construction but feel free to browse through this website for more detail about me.
            <br/> 
            However, it will be update constantly whenever there is any new update. Please stay tuned!
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <Link to='/about'> 
              <button className="a-button btn-lg"> About Me.</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;