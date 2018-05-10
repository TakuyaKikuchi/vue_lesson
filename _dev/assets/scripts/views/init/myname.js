import Vue from 'vue';
import { mapGetters } from 'vuex';
import { TweenMax, Expo, Elastic } from 'gsap';
import MynameTag from '../../components/myname-tag.vue';

export default class Myname {
  constructor() {
    this.getParameters();
    this.bindEvents();
    this.vueDoing();
  }
  getParameters() {
    this.$start = document.getElementsByClassName('js-myname-button')[0]
  }
  bindEvents() {
    const _this = this;
    const btn = this.$start;
  }
  vueDoing() {
    const vm = new Vue({
      el: "#method-myname",
      components: {
        MynameTag
      },
      methods: {
        doing: function() {
          console.log("hogehoge");
        }
      }
    })
  }
}