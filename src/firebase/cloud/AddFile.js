import { storage } from "../config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export async function handleSubmit(e) {
  return new Promise((resolve, reject) => {
    e.preventDefault();
    // var progressPercent = 0;
    console.log("click");
    const file = e.target[0]?.files[0];

    //* If there is not a file, return and stop the function
    if (!file) {
      alert("Please upload a file before submitting!");
      return;
    }

    //* If there is a file, continue
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // progressPercent = progress;
      },
      (error) => {
        alert(error);
        console.log(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          console.log("Error getting url: " + error);
          reject(error);
        }
      }
    );
  });
}
