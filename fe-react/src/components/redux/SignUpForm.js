// import React, { Component } from 'react';
// import { connect } from 'react-redux';
//
// import * as userActions from '../actions/userActions';
//
// class SignUpForm extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       first_name: "",
//       last_name: "",
//       email: "",
//       password: "",
//     }
//
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     axios
//     .post('https://tech-jobs-api.herokuapp.com/users/login', {
//       user:this.state
//     })
//     .then((response) => {
//       const data = response.data;
//
//       window.localStorage.setItem('token', data.token);
//       browserHistory.push('/dashboard')
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }
//
//   handleChange(event) {
//     this.props.dispatch({
//       type: "TYPING_NEW_USER",
//       payload: {
//         value: event.target.value,
//         name: event.target.name
//       }
//     });
//   }
//
//
//   render() {
//     return (
//       <div className="entry-container">
//         <form>
//           <div className="login-button">
//             <h1>create_account</h1>
//           </div>
//           <div className="login-input">
//             first_name
//             <input onChange={this.handleChange} name="first_name" type="text" required></input>
//           </div>
//           <div className="login-input">
//             last_name
//             <input onChange={this.handleChange} name="last_name" type="text" required></input>
//           </div>
//           <div className="login-input">
//             email
//             <input onChange={this.handleChange} name="email" type="text" placeholder="@" required></input>
//           </div>
//           <div className="login-input">
//             password
//             <input onChange={this.handleChange} name="password" type="password" required></input>
//           </div>
//           <div className="login-button">
//             <button className="search-button">submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
//
// export default SignUpForm;
