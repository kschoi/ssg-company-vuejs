import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'
import { 
  MainView, 
  CompanyIntroView, 
  CompanyHistoryView, 
  CompanyBrandView, 
  BusinessView, 
  BusinessDetailView, 
  ChannelNewsView, 
  ChannelBrandView, 
  CsrBusinessView, 
  CsrSinmungoView, 
  CsrTogetherView, 
  CsrTruthfulView, 
  CsrContributionView, 
  CsrReportView, 
  ErrorView,
} from '../views';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
      meta: {
        noCover: true,
        scrollTop: true,
      },
    },
    {
      path: '/company/intro',
      name: 'intro',
      component: CompanyIntroView,
    },
    {
      path: '/company/history',
      name: 'history',
      component: CompanyHistoryView,
    },
    {
      path: '/company/brand',
      name: 'company',
      component: CompanyBrandView,
    },
    {
      path: '/business',
      name: 'business',
      component: BusinessView,
      beforeEnter(to, from, next) {
        store.dispatch('FETCH_NEWS')
          .then(next())
          .catch(() => console.log('fail'));
      },
    },
    {
      path: '/business/:id',
      name: 'businessView',
      component: BusinessDetailView,
      beforeEnter(to, from, next) {
        store.dispatch('FETCH_NEWS_DETAIL', to.params.id)
        .then(next())
          .catch(() => console.log('fail'));
      },
    },
    {
      path: '/channel/news',
      name: 'news',
      component: ChannelNewsView,
    },
    {
      path: '/channel/brand',
      name: 'brand',
      component: ChannelBrandView,
    },
    {
      path: '/csr',
      name: 'csr',
      component: CsrBusinessView,
    },
    {
      path: '/csr/contribution',
      name: 'contribution',
      component: CsrContributionView,
    },
    {
      path: '/csr/sinmungo',
      name: 'sinmungo',
      component: CsrSinmungoView,
    },
    {
      path: '/csr/report',
      name: 'report',
      component: CsrReportView,
      meta: {
        noCover: true,
        scrollTop: true,
      },
    },
    {
      path: '/csr/together',
      name: 'together',
      component: CsrTogetherView,
    },
    {
      path: '/csr/truthful',
      name: 'truthful',
      component: CsrTruthfulView,
    },
    {
      path: '*',
      name: 'error',
      component: ErrorView,
      meta: {
        noCover: true,
        scrollTop: true,
      },
    },
  ],
});