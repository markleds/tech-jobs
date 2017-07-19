// import initialState from './initialState';
//
// const userReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case "TYPING_NEW_USER": {
//       let newState = Object.assign({}, state, {
//         newUser: {
//           action.payload.name: action.payload.value
//         }
//       });
//
//       return newState;
//     }
//     case "POST_NEW_USER": {
//       let newState = Object.assign({}, state, {
//
//       })
//     }
//     case "POST_NEW_USER_ERROR": {
//       let newState = Object.assign({}, state, {
//         postNewUserError: true
//       });
//
//       return newState;
//     }
//     default: {
//       return state;
//     }
//   }
// }
//
// export default userReducer;
