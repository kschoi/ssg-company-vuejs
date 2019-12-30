import {
  fetchNews,
  fetchNewsDetail,
} from '@/api/index.js';

export default {
  SET_ACTIVE({ commit }, active) {
    return commit('SET_ACTIVE', active);
  },
  FETCH_NEWS({ commit }) {
    return fetchNews().then(response => commit('SET_NEWS', response.data));
  },
  FETCH_NEWS_DETAIL({ commit }, itemId) {
    return fetchNewsDetail(itemId).then(res => commit('SET_NEWS_DETAIL', res.data));
  },
}