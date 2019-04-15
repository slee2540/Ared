import axios from "axios";
import config from "../config/variable";

const createQueryString = options => {
  let queryArea = "";
  // console.log(options);
  Object.keys(options).forEach(key => {
    queryArea +=
      options[key] || options[key] === 0 ? `&${key}=${options[key]}` : "";
  });

  if (queryArea === "") return "";
  return `?${queryArea.substring(1)}`;
};

// const createParamString = options => {
//   let paramsArea = "";
//   Object.keys(options).forEach(key => {
//     paramsArea += options[key] ? `/${options[key]}` : "";
//   });

//   if (paramsArea === "") return "";
//   return paramsArea;
// };

export const getNoticeList = data => {
  const baseUrl = `${config.BASE_URL}board/list` + createQueryString(data);
  return axios
    .get(baseUrl)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

export const getNoticeContent = data => {
  const baseUrl = `${config.BASE_URL}board/get` + createQueryString(data);
  // console.log(baseUrl);
  return axios
    .get(baseUrl)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};
