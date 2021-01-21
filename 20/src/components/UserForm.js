import React, {Component} from "react";

export default class UserForm extends Component{
  constructor(props){
    super(props);

    let email = props.email;
    let phone = props.phone;
    let emailIsValid = this.validateEmail(email);
    let phoneIsValid = this.validatePhone(phone);


    this.state = {email: email, phone: phone, emailIsValid: emailIsValid, phoneIsValid: phoneIsValid};

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateEmail(email)
  {
    let re = /\S+@\S+\.\S+/;;
    return re.test(email);
  }

  validatePhone(phoneNumber) {
    let re = /^\d{11}$/;
    return re.test(phoneNumber);

  }

  onEmailChange(e){
    let value = e.target.value;
    let valid = this.validateEmail(value);

    this.setState({email: value, emailIsValid: valid});
  }

  onPhoneChange(e){
    let value = e.target.value;
    let valid = this.validatePhone(value);

    this.setState({phone: value, phoneIsValid: valid})
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.emailIsValid === true && this.state.phoneIsValid === true){
      alert("Email: " + this.state.email + " Phone number: " + this.state.phone);
    }
    else{
      alert("Wrong format of phone number or email");
    }
  }

  render(){

    let emailColor = this.state.emailIsValid === true ? "green": "red";
    let phoneColor = this.state.phoneIsValid === true ? "green": "red";

    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            style={{borderColor: emailColor}}
            onChange={this.onEmailChange}
          />
          <label>Phone number</label>
          <input
            type="text"
            value={this.state.phone}
            style={{borderColor: phoneColor}}
            onChange={this.onPhoneChange}
          />
          <input type="submit" value="Send"/>
        </div>
      </form>
    )
  }
}