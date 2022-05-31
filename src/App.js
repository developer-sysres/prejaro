import PureReact from "./PureReact";
 //import axios from 'axios';
 import React, {useState} from 'react';
import {  encode as base64_encode} from 'base-64';
import validator from 'validator'
import './App.css';
//import { useState } from "react";
function App() {
  const getInitialState = () => {
    const title = "Mr";
    
    return title;
  };

  const [title, setValue] = useState(getInitialState);
  //const [emailError, setEmailError] = useState('')
  const handleChangeDD = (e) => {
    setValue(e.target.value);
  };

  // const validateEmail = (e) => {
  //   var email = e.target.value
  
  //   // if (validator.isEmail(email)) {
  //   //   setEmailError('Valid Email :)')
  //   //   setEmail(e.target.value);
  //   // } else {
  //   //   setEmailError('Enter valid Email!')
  //   // }
  // }
  
  //const [alert, setAlert] = React.useState({ show: false, message: '' });
  const [surname , setName] = useState('');
  const [email , setEmail] = useState('');
  const [address1 , setAddress1] = useState('');
  const [address2 , setAddress2] = useState('');
  const [town , setTown] = useState('');
  const [tel_day , setTelephone] = useState('');
  const [postcode , setPostal] = useState('');
  //const [confPassword , setConfPassword] = useState('');

// function to update state of name with
    // value enter by user in form
    const handleNameChange =(e)=>{
      setName(e.target.value);
    }
    // function to update state of age with value
    // enter by user in form
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
       //if (validator.isEmail(email)) {
      //setEmailError('Valid Email :)')
      setEmail(e.target.value);
    // } else {
    //   setEmailError('Enter valid Email!')
    // }

      //setEmail(e.target.value);
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


  // const handleChange = event => {
  //   setFormData({
  //     name: event.target.name,
  //     value: event.target.value,
  //   });
  // }

  const handleSubmit = event => {
    event.preventDefault();

  



    //const title = title;
    // const surname = event.target.name.value;
    // const email = event.target.email.value;
    // const tel_day = event.target.telephone.value;
    // const address1 = event.target.address.value;
    // const postcode = event.target.postalcode.value;
  

    //alert(title + surname + email + tel_day + address1 + postcode)
   
    var auth = 'test_user:test';
      
    const requestOptions = {
      method: 'POST',
      mode: "cors",
      credentials: 'include', 
      headers: { 
        'Access-Control-Allow-Origin':'http://localhost:3000,https://hive.maxcontact.com',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
        "Accept" : "application/json",
        'cache-control': 'no-cache',
        'Authorization': 'Basic ' +  base64_encode( auth )
      
    },
     
      // body: JSON.stringify({title:'Mr',surname:'Prem',email:'prem@bar.com',tel_day:'01234 567890'
      // ,address1:'Test',postcode:'LS15 8GB'})};
      body: JSON.stringify({title:title,surname:surname,email:email,tel_day:tel_day
      ,address1:address1,address2:address2, town:town,postcode:postcode})};

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


// if (response.status === 1) {
//   setAlert({
//       show: true,
//       message: 'Your information has been sent!',
//   });
// }

// fetch('https://data.agepartnership.co.uk/rest/eqr/customer/', { 
//   method: 'post', 
//   headers: new Headers({
//       'Authorization': 'Basic ' + base64_encode( auth ), 
//       'Content-Type': 'application/x-www-form-urlencoded'
//   }), 
//   body: JSON.stringify({title:'Mr',surname:'est',email:'foo@bar.com',tel_day:'01234 567890'
//        ,address1:'Test',postcode:'LS15 8GB'})
// });


// fetch("//test_user:test@data.agepartnership.co.uk/rest/eqr/customer/",requestOptions, {
//   "method": "POST",
//   "headers": {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
   
//   }
// }) 
// .then(response => { console.log(response.json())})
 
// .catch(err => { console.log(err); 
// });
// const token = 'test_user:test'
// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': 'Basic ' +  base64_encode( auth )
// }
// axios({
//   method: 'post',
//   headers: {
//     'Authorization': `Basic ${token}`
//   },
    
   
//   url: 'https://data.agepartnership.co.uk/rest/eqr/customer/',
//   data: {
//     title:"Mr",surname:"Test",email:"foo@bar.com",tel_day:"01234 567890",address1:"Test",postcode:"LS15 8GB"
//   }
// })
// .then(res => console.log('Success:', res));



// const response =   fetch("https://data.agepartnership.co.uk/rest/eqr/customer/", {
//     method: "POST",
//     mode: "cors",
//     headers: {
//         Authorization: `Basic: ${auth}`,
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({title:'Mr',surname:'est',email:'foo@bar.com',tel_day:'01234 567890'
//       ,address1:'Test',postcode:'LS15 8GB'}),
// });

// console.log(response.json());

  }

 
  return (
    
    <PureReact>
      
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p> */}

<div className="wrapper">
      {/* <h1>Q</h1> */}
      <form onSubmit={handleSubmit}>
      <fieldset>

       


      <div className="form-group form-inline">
      <label>
           <p>Title</p>
           {/* <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /> */}

           <select value={title} onChange={handleChangeDD}   >
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
      </select>

         </label></div>
       
         <label>
           <p>Name</p>
           <input name = "name" type="text" value={surname} required onChange={(e) => {handleNameChange(e)}} />
         </label>
         <label>  
           <p>Email</p>
           <input name="email"  type="text" value={email} required onChange={(e) => handleEmailChange(e)} /> 
         </label>
         <label>
           <p>Telephone</p>
           <input name="tel_day"  type="text" value={tel_day} required onChange={(e) => {handleTelephoneChange(e)}} />
         </label>
         <label>
           <p>Address1</p>
           <input name="address1"  type="text" value={address1} required onChange={(e) => {handleAddress1Change(e)}} />
         </label>
         <label>
           <p>Address2</p>
           <input name="address1"  type="text" value={address2} required onChange={(e) => {handleAddress2Change(e)}} />
         </label>
         <label>
           <p>Town</p>
           <input name="address1"  type="text" value={town} required onChange={(e) => {handleTownChange(e)}} />
         </label>
         <label>
           <p>Postal Code</p>
           <input name="postcode"  type="text" value={postcode} required onChange={(e) => {handlePostalChange(e)}} />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
    </PureReact>
  );
}

export default App;
