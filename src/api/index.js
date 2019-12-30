import axios from 'axios';

const config = {
  baseDir: "https://api.hnpwa.com/v0/",
}
const api = {
  news: `${config.baseDir}ask/1.json`,
  newsDetail: `${config.baseDir}item/`,
};

function fetchNews() {
  return axios.get(api.news);
}

function fetchNewsDetail(id) {
  const url = `${api.newsDetail}${id}.json`;
  return axios.get(url);
}

export {
  fetchNews,
  fetchNewsDetail,
}