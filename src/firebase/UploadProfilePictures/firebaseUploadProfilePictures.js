import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../firebaseApp";

export const uploadImage = async (pasta, image, name) => {
  const storage = getStorage(app);

  const mountainsRef = ref(storage, `${pasta}/${name}`);

  await uploadBytes(mountainsRef, image);

  return await getDownloadURL(mountainsRef);
};
