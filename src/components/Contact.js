import {useState} from 'react';
import React from 'react';
import emailjs from 'emailjs-com';

function Contact () {

  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [subject,setsubject]=useState("");
  const [messages,setmessages]=useState("");
  
  let data = {
    user_name: name,
    user_email: email,
    subject: subject,
    message: messages
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      data, 
      process.env.REACT_APP_USER_ID
    )
    .then((result) => {
      console.log("Email sent!")
      console.log(result.text);
      setname("")
      setemail("")
      setsubject("")
      setmessages("")
    }, (error) => {
      console.log(error.text);
    });
  }

  return (
    <div className="container">
      <div className="container d-flex align-items-center justify-content-center" style={{height:"150px"}}>
        <h2>Contact</h2>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <p className="description lead text-monospace text-center">
          Have any questions or wanna to work together?
        <br/>
          Feel free to contact me!
        </p>
        <div className="container d-flex justify-content-center" style={{height:"400px"}}>
          <div style={{width:"500px"}}>
            <div className="form-group">
                <input type="name" className="form-control" id="name" value={name} onChange={(e) =>setname(e.target.value)} placeholder="Name"/>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="subject" value={subject} onChange={(e) =>setsubject(e.target.value)} placeholder="Subject"/>
            </div>
            <div className="form-group">
                <textarea className="form-control" id="text" rows="5" value={messages} onChange={(e)=> setmessages(e.target.value)} placeholder="Messages"/>
            </div>
            <button type="button" disabled={!(name && email && subject && messages)} className="a-button btn-lg" onClick={handleSubmit}>Submit</button>
          </div>        
        </div>
      </div>        
    </div>
  );
}

export default Contact;