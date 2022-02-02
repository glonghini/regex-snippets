import { useState, useEffect} from "react";

const Form = () => {
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [telephoneError, setTelephoneError] = useState(false);

  const [success, setSuccess] = useState({
    "username": false,
    "email": false,
    "password": false,
    "telephone": false
  })

  const re = {
    "username": new RegExp(/^[a-z\d]{5,12}$/, "i"),
    "email": new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/, "i"),
    "password": new RegExp(/^[a-zA-Z0-9@_-]{8,20}$/),
    "telephone": new RegExp(/^\d{10,11}$/)    
  };

  const handleEntry = (field, value) => {
    console.log(field, value)
    // Testing the value with the regex
    var test = re[field].test(value)
    console.log(test)
    // Changing the state
    setSuccess(prevState => ({
      ...prevState,
      [field]: test
    }));
  }

  return (
    <div className="container">
      <div className="label-text">
        <h2>User signup form</h2>
        <p>Fields will turn green if the regex validation succeed.</p>
      </div>
      <input
      className={success.username ? 'success' : ''}
      name="username"
      placeholder="Username"
      type="text" 
      onChange={(event) => handleEntry(event.target.name, event.target.value)}
      />
      <p className={success.username ? 'success' : ''}>Username must be alphanumeric and 5 - 12 characters long</p>

      <input
      className={success.email ? 'success' : ''}
      name="email"
      placeholder="Email"
      type="text" 
      onChange={(event) => handleEntry(event.target.name, event.target.value)}
      />
      <p className={success.email ? 'success' : ''}>Enter a valid email, e.g.: me@mydomain.com</p>

      <input
      className={success.password ? 'success' : ''}
      name="password"
      placeholder="Password"
      type="text" 
      onChange={(event) => handleEntry(event.target.name, event.target.value)}
      />
      <p className={success.password ? 'success' : ''}>Password must be alphanumeric (@, _ and - are also allowed), and 8 - 20 characters long</p>

      <input
      className={success.telephone ? 'success' : ''}
      name="telephone"
      placeholder="Telephone/Cellphone"
      type="text" 
      onChange={(event) => handleEntry(event.target.name, event.target.value)}
      />
      <p>Enter a valid brazilian phone number (10 - 11 digits, only numbers)</p>
    </div>
  );
}
 
export default Form;