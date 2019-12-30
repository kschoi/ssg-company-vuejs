import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import { default as NAV_DATA } from '../api/nav.js';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    navData: NAV_DATA,
    navActive: '',
    news: [],
    newsDetail: {},
  },
  getters,
  mutations,
  actions,
})