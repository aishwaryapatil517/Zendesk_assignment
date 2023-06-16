export const getHashParam = (url) => {
  const access_token = url.split("#")[1];
  const params = new URLSearchParams(access_token);
  if (params.has("access_token")) {
    return params.get("access_token");
  } else {
    return null;
  }
};

export const BASE_URL = "https://zendeskcodingchallenge1602.zendesk.com/";

export const getToken = () => {
  return sessionStorage.getItem("accessToken");
};

export const getHeaders = () => {
  return {
    Accept: "application/json",
    Authorization: `Bearer ${getToken()}`,
  };
};
