import axios from "axios";
const apiUrl = "https://api.smartanalytics.tech";
export const FetchAnalyticAccount = async (token, accountId) => {
  return axios({
    method: "get",

    headers: {
      Authorization: token
    },
    url: `${apiUrl}/api/analyticAccount/fetchAccounts/${accountId}`
  });
};
export const FetchAnalyticdata = async (token, viewId,accountId) => {
  return axios({
    method: "get",

    headers: {
      Authorization: token
    },
    url: `${apiUrl}/api/analyticAccount/fetchAnalyticdata/${viewId}/${accountId}`
  });
};
