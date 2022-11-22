import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { FirebaseAuth } from './config'

export const registerWithEmailAndPassword = async ({ email, password }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )
    const { uid } = response.user
    return {
      ok: true,
      uid,
      email,
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )
    const { uid } = response.user
    return {
      ok: true,
      uid,
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}

export const logoutFirebase = async () => {
  try {
    await signOut(FirebaseAuth)
    return {
      ok: true,
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}
