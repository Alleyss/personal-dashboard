// src/auth.js (Handles Authentication Functions)
import { auth } from './firebase';

// Register User
export const registerUser = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    console.log('User registered!');
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

// Login User
export const loginUser = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log('User logged in!');
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    await auth.signOut();
    console.log('User logged out!');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};
