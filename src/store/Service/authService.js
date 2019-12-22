import axios from "axios";
const apiUrl = "https://api.smartanalytics.tech";
export const RegisterUser = async data => {
  debugger;
  return axios({
    method: "post",
    url: `${apiUrl}/api/user`,
    data: data
  });
};
export const LoginUser = data => {
  return axios({
    method: "post",
    url: `${apiUrl}/api/user/login`,
    data: data
  });
};
export const VerifyEmail = data => {
  return axios({
    method: "post",
    url: `${apiUrl}/api/user/verifyEmail`,
    data: data
  });
};
export const ResendEmail = data => {
  return axios({
    method: "post",
    url: `${apiUrl}/api/user/ResendEmail`,
    data: data
  });
};
