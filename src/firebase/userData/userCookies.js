// import Cookies from "@types/js-cookie";
import cookies from "js-cookie";

export const getUserFromCookie = () => {
  const cookie = cookies.get("auth");
  if (!cookie) {
    return;
  }
  try {
    return JSON.parse(cookie);
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const setUserCookie = (user) => {
  //! When cookie is created, its string value is set to "[Object%20Object]"
  cookies.set("auth", user, {
    // firebase id tokens expire in an hour
    // setting cookie expire to match
    expires: 1 / 24,
  });
};
export const removeUserCookie = () => cookies.remove("auth");
