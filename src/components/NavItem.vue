<template>
  <li>
    <a href="#" v-if="hasChildren"
      :class="[linkClass, {active: navActive==items.title}]"
      :aria-expanded="open ? 'true' : 'false'">
        {{ items.title }}
    </a>
    <a v-else
      target="_blank"
      :href="items.link"
      :class="[linkClass]">
        {{ items.title }}
        <span class="ico_arr"></span>
    </a>
    <transition name="slide">
      <div :class="subClass" v-show="open" v-if="hasChildren">
        <ul>
          <li v-for="item in items.list">
            <router-link :to="{path:item.link}" @click.native="setSelected(item.title)" :class="['nav_link']">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    items: Object,
    open: Boolean,
    linkClass: String,
    subClass: String,
  },
  computed: {
    ...mapGetters(['navActive']),
    
    hasChildren() {
      return this.items.list && this.items.list.length;
    },
  },
  methods: {
    setSelected(title) {
      this.$store.dispatch('SET_ACTIVE', this.items.title);
      this.$emit('click:router', title);
    },
  },
}
</script>

<style scoped>
.nav_v_sub.slide-enter-active{transition: .1s ease-out}
.nav_v_sub.slide-leave-active{transition: .1s cubic-bezier(0, 1, 0.5, 1)}
.nav_v_sub.slide-enter-to, .nav_v_sub.slide-leave{overflow:hidden;max-height:200px}
.nav_v_sub.slide-enter, .nav_v_sub.slide-leave-to{overflow:hidden;max-height:0}
</style>
