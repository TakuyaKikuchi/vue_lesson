import Vue from 'vue';
import { mapGetters } from 'vuex';
import { TweenMax, TimelineMax, Expo, Elastic } from 'gsap';
import MynameTag from '../../components/myname-tag.vue';

export default class Myname {
  constructor() {
    this.getParameters();
    this.bindEvents();
    this.vueDoing();
  }
  getParameters() {
    this.$start = document.getElementsByClassName('js-myname-button')[0];
  }
  bindEvents() {
    const _this = this;
    const btn = this.$start;
  }
  vueDoing() {
    let $myname;
    let $kikuchi;
    let $takuya;
    const _this = this;
    const timelineKikuchi = new TimelineMax();
    const timelineTakuya = new TimelineMax();
    const vm = new Vue({
      el: "#method-myname",
      components: {
        MynameTag
      },
      methods: {
        doing: function () {
          $myname = document.getElementsByClassName('p-myname__list')[0];
          $kikuchi = document.getElementsByClassName('is-firstname')[0];
          $takuya = document.getElementsByClassName('is-lastname')[0];
          TweenMax.to($myname, 1.5, {
            height: '251px'
          });
          timelineKikuchi.to($kikuchi, 1.2, {
            backgroundPosition: "left top",
            ease: Power2.easeInOut
          }).to($kikuchi, 0.4, {
            ease: Power2.easeInOut,
            rotation: -415,
            width: '700px',
            height: '126px'
          })
          timelineTakuya.to($takuya, 1.2, {
            backgroundPosition: "left bottom",
            ease: Power2.easeInOut
          }).to($takuya, 0.4, {
            ease: Power2.easeInOut,
            rotation: -415,
            width: '717px',
            height: '125px'
          })
        }
      }
    })
  }
}