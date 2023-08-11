// For reasons of how the Firebase API works and how we implement the auth system, we update the displayName with the value of the business_type.
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { db, auth } from '../../firebase';
import { type Student } from '@/types';

export const creatAccount = (data: Student) => {
  const { email, password } = data;

  return new Promise((resolve, reject) => {
    // Create an account
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        const userInfo = {
          created_at: new window.Date(),
          uid: user.uid,
          active_account: true,
          ...data,
        };
        // Save the information
        db.collection('students')
          .doc(`${user.uid}`)
          .set(userInfo)
          .then(() => {
            localStorage.setItem('student_id', user.uid);
            resolve(userInfo);
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
};

interface signIn {
  email: string;
  password: any;
}

export const sigIn = (data: signIn) => {
  const { email, password } = data;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('student_id', user.uid);
        db.collection('workers')
          .doc(user.uid)
          .get()
          .then((response: any) => {
            resolve(response?.data());
          })
          .catch((error: any) => {
            console.log(error);
            reject(error);
          });
      })
      .catch((error) => reject(error));
  });
};
