import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { app } from "../firebaseApp";

const getInfosUser = async (userInfos, setUserInfos) => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);
  await signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;

    /* userInfos = {
      email: user.email,
      nome: user.displayName,
      uid: user.uid,
    }; */

    setUserInfos({
      ...userInfos,
      email: user.email,
      nome: user.displayName,
      uid: user.uid,
    });
  });
};

export { getInfosUser };
