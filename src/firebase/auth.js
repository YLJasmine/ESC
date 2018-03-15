import {auth} from './firebase';

//Sign up and sign in are asynchronous now 
// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

 // Sign out
export const doSignOut = () =>
  auth.signOut();