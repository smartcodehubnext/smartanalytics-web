import axios from "axios";
const apiUrl = "https://api.smartanalytics.tech";
export const GetAuthUrl = async => {
  return axios({
    method: "get",

    url: `${apiUrl}/api/user/GetAuthUrl`
  });
};
export const FetchAccounts = async token => {
  return axios({
    method: "get",
    headers: {
      Authorization: token
    },
    url: `${apiUrl}/api/account/GetByUser`
  });
};
export const SaveAccount = async data => {
  return axios({
    method: "post",
    url: `${apiUrl}/api/account`,
    headers: {
      Authorization: data.token
    },
    data: data.data
  });
};
