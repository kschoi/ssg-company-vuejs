<template>
  <div id="app">
    <slideout-menu
      :active="active"
      @click:router="setSelected"
      @close:slideout="closeSlideout">
    </slideout-menu>
    <div id="wrap" class="slideout-panel">
      <nav-bar
        :active="active"
        @open:slideout="openSlideout">
      </nav-bar>
      <transition-page>
        <router-view></router-view>
      </transition-page>
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
import sassStyles from '@/assets/styles/common.scss'
import SlideoutMenu from '@/components/SlideoutMenu'
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'
import TransitionPage from '@/transitions/TransitionPage.vue'
import Slideout from 'slideout'

export default {
  name: 'App',
  components: {
    SlideoutMenu,
    NavBar,
    FooterBar,
    TransitionPage,
  },
  data() {
    return {
      slideout: null,
      active: '',
    }
  },
  methods: {
    setSelected(title) {
      this.active = title;
      this.closeSlideout();
    },
    openSlideout() {
      this.slideout.open();
    },
    closeSlideout() {
      this.slideout.close();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.slideout = new Slideout({
        panel: document.querySelector('.slideout-panel'),
        menu: document.querySelector('.slideout-menu'),
        padding: 320,
        side: 'right',
        touch: false
      });
      const welHtml = document.getElementsByTagName('html')[0];

      this.slideout
        .on('open', () => {
          welHtml.style.position = "fixed";
          this.slideout.panel.addEventListener('click', this.closeSlideout);
        })
        .on('beforeclose', () => {
          welHtml.style.position = "";
          this.slideout.panel.removeEventListener('click', this.closeSlideout) 
        });
    });
  },
}
</script>

<style scoped>

</style>
