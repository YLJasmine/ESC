import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import { 
  Link,
  withRouter, } from 'react-router-dom';
import { auth, db } from '../firebase';
import * as routes from '../constants/routes';

// displayed content
const SignUpPage = ({ history }) =>
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history} />
  </div>


// ===========================================
// inititalise the component
const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

// input fields
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { ...INITIAL_STATE };
  }

  handleChange(value){
    this.setState({selectedValue:value});
  }
  onSubmit = (event) => {

    const {
      email,
      passwordOne,
      selectedValue,
    } = this.state;

    const {
      history,
    } = this.props;

  auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {

          // Create a user in your own accessible Firebase Database too
          db.doCreateUser(authUser.uid, email, selectedValue)
            .then(() => {
              this.setState(() => ({ ...INITIAL_STATE }));
              history.push(routes.HOME);
            })
            .catch(error => {
              this.setState(byPropKey('error', error));
            });

        })
        .catch(error => {
        this.setState(byPropKey('error', error));
      });


      event.preventDefault();
    }

  render() {
    const {
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    // error
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '';

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
          />
          <input
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
          />
          <RadioGroup name="role" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
            <Radio value="Student" />Student
            <Radio value="Professor" />Professor
          </RadioGroup>
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>

          { error && <p>{error.message}</p> }


        </form>
      </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account? 
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};