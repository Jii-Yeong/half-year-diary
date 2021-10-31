import axios from "axios";
import { setRefreshTokenToCookie } from "../../utils/auth";

export const SilentRefresh = (_, email, password) => {
  let data = {
    email: email,
    password: password,
  };

  axios
    .post("/hyd/api/user/silent-refresh", data)
    .then((response) => {
      LoginSucces(response, email, password);
    })
    .catch((error) => {
      console.log(error);
    });
};

const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

export const LoginSucces = (response, email, password) => {
  const { accessToken } = response.data;
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  setRefreshTokenToCookie(accessToken);

  setTimeout(() => {
    SilentRefresh(response, email, password);
  }, JWT_EXPIRY_TIME - 60000);
};
