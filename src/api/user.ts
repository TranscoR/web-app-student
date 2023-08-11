import { db } from '../../firebase';

export const getUserInfo = () => {
  // @ts-ignore
  const student_id =
    typeof window !== 'undefined' && localStorage?.getItem('student_id');

  return new Promise((resolve, reject) => {
    db.collection('students')
      // @ts-ignore
      .doc(student_id)
      .get()
      .then((response: any) => {
        resolve(response?.data());
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};

export const updateUserInfo = (uid: any, info: any) => {
  return new Promise((resolve, reject) => {
    db.collection('students')
      .doc(uid)
      .update({
        ...info,
      })
      .then(() => {
        resolve(uid);
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};

export const getSchoolCycle = () => {
  // @ts-ignore
  const uid =
    typeof window !== 'undefined' && localStorage?.getItem('student_id');

  return new Promise((resolve, reject) => {
    db.collection('students')
      // @ts-ignore
      .doc(uid)
      .collection('school_cycle')
      .get()
      .then((response: any) => {
        const docSnapshots = response.docs;
        let result = [];
        for (let snapShot of docSnapshots) {
          const doc = snapShot.data();
          result.push(doc);
        }
        resolve(result);
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};
