import React, {useState} from 'react';
import "./ContactForm.css"



const ContactForm = (props) => {
 

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [msg, setMsg] = useState('')
  

  // const [error, setError] = useState({
  //   nameError: '',
  //   emailError: '',
  //   companyError: '',
  //   msgError: ''
  // })
  
  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [companyError, setCompanyError] = useState({});
  const [msgError, setMsgError] = useState({});  

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidate()
    
    
  }

  const handleValidate = () => {
    let nameError = {};
    let emailError = {};
    let companyError = {};
    let msgError = {};
    let isValid = true;

     // name validation
     if(name.trim() === ''){
      nameError.nameShort = 'name can not be empty';
      isValid = false;

    }

     if(!name.trim().match(/^[a-zA-Z]+$/)){
      nameError.nameShort = 'invalid entry';
      isValid = false;
     }

     if(name.trim().length < 3 && name.trim(). length >= 1){
       nameError.nameShort = 'please enter valid name';
       isValid = false;

     }
     if(name.trim().length > 40 ){

       nameError.nameLong = 'name is too long';
       isValid = false;
     }
      // Email validation
      
      if(email.trim() === ''){
        emailError.emailShort = 'email is required';
        isValid = false;
  
      }

      if(email !== 'undefined'  && email.trim().length >=1){
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!pattern.test(email)){
          emailError.short = 'Please enter valid email address.'
          isValid = false
        }
      }

      // company validation
      if(company.trim() === ''){
        companyError.companyShort = 'company name required';
        isValid = false;
  
      }

     if(company.trim().length < 5 && company.trim().length >= 1){
      companyError.short = 'entry is too short';
      isValid = false;
    }

   
     if(company.trim().length > 60){
      companyError.nameLong = 'entry is too long';
      isValid = false;
    }
     
       // message validation

       if(msg.trim() === ''){
        msgError.msgShort = 'message is required';
        isValid = false;
  
      }

       if(msg.trim().length >= 1 && msg.trim().length < 6){
        msgError.short = 'meassge is too short';
        isValid = false;
      }
  
     
       if(company.trim().length > 200){
        msgError.nameLong = 'message is too long';
        isValid = false;
      }
    setNameError(nameError);
    setCompanyError(companyError);
    setEmailError(emailError);
    setMsgError(msgError);
    return isValid;

  }


  

  
  return (
    <div className="formContainer">
    
      <h1>Conatct Us</h1>
        <form className="formWrapper" onSubmit={handleSubmit}>
        <div className = "nameEmailContainer"> 
          
            <div className="">
            <label for="name">Name<span style={{color: 'red'}}>*</span></label>

            <input 
            className="textField" 
            type="text"
            name="name"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            />
            {Object.keys(nameError).map(key => {
              return <p style={{color: 'red', fontSize: '16px', paddingLeft: '10px', marginTop: '-15px' }}>
                {nameError[key]}
              </p>
            })}

            
          
            </div>
           
          <div className="">
            <label for="email">Email<span style={{color: 'red'}}>*</span></label>               
            <input 
            className="textField" 
            type="text" 
            name="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            /> 

            {Object.keys(emailError).map(key => {
              return <p style={{color: 'red', fontSize: '16px', paddingLeft: '10px', marginTop: '-15px' }}>
                {emailError[key]}
              </p>
            })}
           

            </div>
            </div>

          <label for="company">Company<span style={{color: 'red'}}>*</span></label>
            <input
             className="companyTextField" 
             type="text" 
             name="company"
             value={company}
             onChange={(e) => {setCompany(e.target.value)}}
             />
            {Object.keys(companyError).map(key => {
              return <p style={{color: 'red', fontSize: '16px', paddingLeft: '10px', marginTop: '-15px' }}>
                {companyError[key]}
              </p>
            })}

           

          <label for="msg">Message<span style={{color: 'red'}}>*</span></label>
            <textarea 
            className="textArea" 
            type="text" 
            name="msg"
            value={msg}
            onChange={(e) => {setMsg(e.target.value)}}
            />

              {Object.keys(msgError).map(key => {
              return <p style={{color: 'red', fontSize: '16px', paddingLeft: '10px', marginTop: '-15px' }}>
                {msgError[key]}
              </p>
            })}
         

            <button className="submitBtn" type="submit">Submit</button>
         </form>

     


    
    
      </div>
     
 
  )
}


    
export default ContactForm;
