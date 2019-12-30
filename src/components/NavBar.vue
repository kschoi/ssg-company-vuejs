<template>
  <header id="header" :class="['header', {ty_cover: textLight}, {ty_scroll: scrolled}]">
    <div class="header_inner">
      <h1 class="ssg_logo"><router-link to="/"><span class="blind">SSG.COM</span></router-link></h1>

      <button type="button" class="nav_bt_open" @click="openSlideout" aria-label="메뉴 열기"><span class="blind">메뉴 열기</span></button>

      <nav class="nav_h_bar">
        <ul id="nav_h" class="nav_h" role="navigation">
          <nav-item
            v-for="(item, index) in navData"
            :class="['nav_h_item', {on: hoveredItem===item}]"
            :key="index"
            :items="item"
            :open="hoveredItem===item"
            :linkClass="'nav_h_link'"
            :subClass="'nav_h_sub'"
            @mouseover.native="onMouseEnter(item)"
            @mouseleave.native="onMouseLeave"
            @click:router="onClickRouter">
          </nav-item>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import NavDataFetchingMixin from '@/mixins/NavDataFetchingMixin.js';

export default {
  mixins: [NavDataFetchingMixin],
  data() {
    return {
      hoveredItem: "",
      scrolled: false,
    }
  },
  computed: {
    textLight() {
      return !this.$route.meta.noCover && !this.scrolled;
    }
  },
  methods: {
    onMouseEnter(item) {
      this.hoveredItem = item;
    },
    onMouseLeave() {
      this.hoveredItem = '';
    },
    openSlideout() {
      this.$emit('open:slideout');
    },
    onScrollWindow() {
      this.scrolled = window.pageYOffset >= document.getElementById('header').offsetHeight;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScrollWindow);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScrollWindow);
  }
}
</script>
