import { db } from "../../firebase";

export const getUserInfo = () => {
  // @ts-ignore
  const user_uid =
    typeof window !== "undefined" && localStorage?.getItem("user_uid");

  return new Promise((resolve, reject) => {
    db.collection("students")
      // @ts-ignore
      .doc(user_uid)
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
    db.collection("students")
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
    typeof window !== "undefined" && localStorage?.getItem("user_uid");

  return new Promise((resolve, reject) => {
    db.collection("students")
      // @ts-ignore
      .doc(uid)
      .collection("school_cycle")
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
