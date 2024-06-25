import getData from "../../firebase/firestore/getData";

export default async function getPosts() {
  const { result, error } = await getData("posts", "posts");
  if (error) {
    console.log(error);
  } else if (result) {
    return result.data().posts.slice(0).reverse();
  }
}
