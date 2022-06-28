import React, {useState} from 'react';
import './style.css'
import {  encode as base64_encode} from 'base-64';
//import validator from 'validator';

function RegistrationForm() {
    const getInitialState = () => {
        const title = "Mr";
        
        return title;
      };
    
      const [title, setValue] = useState(getInitialState);
      //const [emailError, setEmailError] = useState('')
      const handleChangeDD = (e) => {
        setValue(e.target.value);
      };
//Errors
  //const [errorMessage, setErrors] = useState({});
    // const [firstName, setFirstName] = useState(null);
    // const [lastName, setLastName] = useState(null);
    // const [email, setEmail] = useState(null);
    // const [password,setPassword] = useState(null);
    // const [confirmPassword,setConfirmPassword] = useState(null);

    const [surname , setName] = useState('');
    const [email , setEmail] = useState('');
    const [address1 , setAddress1] = useState('');
    const [address2 , setAddress2] = useState('');
    const [town , setTown] = useState('');
    const [tel_day , setTelephone] = useState('');
    const [postcode , setPostal] = useState('');

    const [property_value_th , setproperty_value_th] = useState('');
    const [loan_secured_th , setloan_secured_th] = useState('');
    const [age_youngest , setage_youngest] = useState('');
    const [triggerCall , settriggerCall] = useState('');
    const [gdpr_action , setgdpr_action] = useState('');
    const [notes , setnotes] = useState('');
    // function to update state of name with
    // value enter by user in form
    const handleNameChange =(e)=>{
        setName(e.target.value);
      }
      // function to update state of age with value
      // enter by user in form
      const handleEmailChange =(e)=>{
        setEmail(e.target.value);
        //validator.isEmail(e.target.value)

       


        // if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(email)) {
        //     this.setState({validation: true})
        //   } else {
        //     this.setState({validation: false});
        //     this.setState({errorMessage: 'Please enter correct email adress'})
        //     console.log(errorMessage);
        //   }
      
      }
      // function to update state of email with value
      // enter by user in form
      const handleTelephoneChange =(e)=>{
        setTelephone(e.target.value);
      }
        // function to update state of password with
        // value enter by user in form
      const handleAddress1Change =(e)=>{
        setAddress1(e.target.value);
      }
      const handleAddress2Change =(e)=>{
        setAddress2(e.target.value);
      } 
      const handleTownChange =(e)=>{
        setTown(e.target.value);
      }
      const handlePostalChange =(e)=>{
        setPostal(e.target.value);
      }
  


      const handleproperty_value_th =(e)=>{
        setproperty_value_th(e.target.value);
      }
  
      const handloan_secured_th =(e)=>{
        setloan_secured_th(e.target.value);
      }
  
      const handleage_youngest =(e)=>{
        setage_youngest(e.target.value);
      }
  
      const handletriggerCall =(e)=>{
        settriggerCall(e.target.value);
      }
      const handlegdpr_action =(e)=>{
        setgdpr_action(e.target.value);
      }
      const handlenotes =(e)=>{
        setnotes(e.target.value);
      }
    // const handleInputChange = (e) => {
    //     const {id , value} = e.target;
    //     // if(id === "firstName"){
    //     //     setFirstName(value);
    //     // }
    //     // if(id === "lastName"){
    //     //     setLastName(value);
    //     // }
    //     // if(id === "email"){
    //     //     setEmail(value);
    //     // }
    //     // if(id === "password"){
    //     //     setPassword(value);
    //     // }
    //     // if(id === "confirmPassword"){
    //     //     setConfirmPassword(value);
    //     // }

    // }

    // const handleSubmit  = () => {
    //     console.log(title,surname,email,tel_day,address1,address2,town,postcode);

        
    // }


    const handleSubmit = event => {
        //event.preventDefault();
    
      
    
    
    
        //const title = title;
        // const surname = event.target.name.value;
        // const email = event.target.email.value;
        // const tel_day = event.target.telephone.value;
        // const address1 = event.target.address.value;
        // const postcode = event.target.postalcode.value;
      
    
        //alert(title + surname + email + tel_day + address1 + postcode)
       
        var auth = 'marketing-circles-spring-lead:caFg6i8JDMsfj8';
          
        const requestOptions = {
          method: 'POST',
          mode: "cors",
          credentials: 'include', 
          headers: { 
            'Access-Control-Allow-Origin':'http://localhost:3000,https://hive.maxcontact.com,https://developer-sysres.github.io/,*',
            //'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
            "Accept" : "application/json",
            'cache-control': 'no-cache',
            'Authorization': 'Basic ' +  base64_encode( auth )
          
        },
         
          // body: JSON.stringify({title:'Mr',surname:'Prem',email:'prem@bar.com',tel_day:'01234 567890'
          // ,address1:'Test',postcode:'LS15 8GB'})};
          body: JSON.stringify({title:title,surname:surname,email:email,tel_day:tel_day
          ,address1:address1,address2:address2, town:town,postcode:postcode
         ,property_value_th:property_value_th, loan_secured_th:loan_secured_th,
         age_youngest:age_youngest ,triggerCall:triggerCall , gdpr_action:gdpr_action,
         notes:notes

        })};
    
          const response =    fetch('https://data.agepartnership.co.uk/rest/eqr/customer/', requestOptions)
          .then(response => response.json())
         //.then((data) => {  console.log('Success:', data)
         .then((data) => {  alert('A form was submitted successfully. The transaction id is - ' + data.transaction_id)
          
         setName('');
         setEmail('');
         setAddress1('');
         setAddress2('');
         setTown('');
         setTelephone('');
         setPostal('');
         getInitialState();
     //.catch(err => { console.log(err)
     //});alert('A form was submitted successfully')
     //alert('A form was submitted successfully');
     
    })
}
    return(
        <div className="form">
            

            <div className="form-body">
  
            <label className="form__label" for="firstName">Name </label>
                        {/* <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /> */}

                        <select value={title} onChange={handleChangeDD}   >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                         </select>

         

                <div className="username">
                    <label className="form__label" for="firstName">Name </label>
                    <input className="form__input" type="text" value={surname} required onChange = {(e) => handleNameChange(e)} id="firstName" placeholder=""/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email-Id </label>
                    <input  type="text" name="" id="emailid" value={email}  className="form__input" required onChange = {(e) => handleEmailChange(e)} placeholder=""/>
                </div>
                <div className="mobileno">
                    <label className="form__label" for="mobileno">Mobile No. </label>
                    <input  type="text" id="mobileNo" className="form__input" value={tel_day} required onChange = {(e) => handleTelephoneChange(e)} placeholder=""/>
                </div>
                <div className="address1">
                    <label className="form__label" for="address1">Address1 </label>
                    <input  type="text" id="address1" className="form__input" value={address1} required onChange = {(e) => handleAddress1Change(e)} placeholder=""/>
                </div>
                <div className="address2">
                    <label className="form__label" for="address2">Address2 </label>
                    <input  type="text" id="address2" className="form__input" value={address2} required onChange = {(e) => handleAddress2Change(e)} placeholder=""/>
                </div>
                <div className="town">
                    <label className="form__label" for="town">Town </label>
                    <input  type="text" id="town" className="form__input" value={town} required onChange = {(e) => handleTownChange(e)} placeholder=""/>
                </div>
                <div className="postalcode">
                    <label className="form__label" for="postalcode">PostalCode </label>
                    <input  type="test" id="postalcode" className="form__input" value={postcode} required onChange = {(e) => handlePostalChange(e)} placeholder=""/>
                </div> 

                <div className="postalcode">
                    <label className="form__label" for="postalcode">property_value_th </label>
                    <input  type="test" id="postalcode" className="form__input" value={property_value_th} required onChange = {(e) => handleproperty_value_th(e)} placeholder=""/>
                </div> 


                <div className="postalcode">
                    <label className="form__label" for="postalcode">loan_secured_th </label>
                    <input  type="test" id="postalcode" className="form__input" value={loan_secured_th} required onChange = {(e) => handloan_secured_th(e)} placeholder=""/>
                </div> 
                <div className="postalcode">
                    <label className="form__label" for="postalcode">age_youngest </label>
                    <input  type="test" id="postalcode" className="form__input" value={age_youngest} required onChange = {(e) => handleage_youngest(e)} placeholder=""/>
                </div>
                <div className="postalcode">
                    <label className="form__label" for="postalcode">triggerCall </label>
                    <input  type="test" id="postalcode" className="form__input" value={postcode} required onChange = {(e) => handletriggerCall(e)} placeholder=""/>
                </div>
                <div className="postalcode">
                    <label className="form__label" for="postalcode">gdpr_action </label>
                    <input  type="test" id="postalcode" className="form__input" value={gdpr_action} required onChange = {(e) => handlegdpr_action(e)} placeholder=""/>
                </div>
                <div className="postalcode">
                    <label className="form__label" for="postalcode">notes </label>
                    <input  type="test" id="postalcode" className="form__input" value={postcode} required onChange = {(e) => handlenotes(e)} placeholder=""/>
                </div>
                {/* <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div> */}
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm