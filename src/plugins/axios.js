import Vue from 'vue';
import axios from 'axios';

Vue.use({
  install(Vue) {
    Vue.prototype.axios = axios.create({
      baseURL: 'https://vue-stock-trader-86626.firebaseio.com/'
    });
  }
});
