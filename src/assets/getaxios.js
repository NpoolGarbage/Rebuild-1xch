import axios from "axios";

export function getAxios(url, method, data) {
  return axios({
    url: url,
    method: method,
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}