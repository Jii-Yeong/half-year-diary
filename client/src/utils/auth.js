import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function setRefreshTokenToCookie(refresh_token) {
  cookies.set("refresh_token", refresh_token, {
    sameSite: "strict",
  });
}

export function getTokenToCookie({ token, email }) {
  email = [];

  const user = (data) => {
    email.push(data);
  };

  axios
    .post("/hyd/api/user/auth/info")
    .then((response) => {
      user(response.data);
    })
    .catch((error) => console.group(error));

  if (token === undefined) throw new Error();

  return email;
}

export function logout() {
  console.log("로그아웃");
  window.localStorage.setItem("logout", Date.now());
  cookies.remove("refresh_token");
}
