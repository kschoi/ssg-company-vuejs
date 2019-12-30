<template>
  <nav class="slideout-menu">
    <button type="button" class="nav_bt_close" aria-label="메뉴 닫기" @click="closeSlideout"><span class="blind">메뉴 닫기</span></button>

    <div id="nav_scroll" class="nav_scroll">
      <div class="nav_v_bar">
        <ul id="nav_v" class="nav_v" role="navigation">
          <nav-item
            v-for="(item, index) in navData"
            :class="['nav_v_item', {on: selectedItem===item.title}]"
            :key="index"
            :items="item"
            :open="selectedItem===item.title"
            :linkClass="'nav_v_link'"
            :subClass="'nav_v_sub'"
            @click.native="onClickItem(item.title)"
            @click:router="onClickRouter">
          </nav-item>
        </ul>
        <ul class="nav_mall">
          <li class="nav_mall_item"><a href="" class="nav_mall_link"><i class="sp_mall_type_s i_ssg"></i>SSG.COM</a></li>
          <li class="nav_mall_item"><a href="" class="nav_mall_link"><i class="sp_mall_type_s i_sm"></i>신세계몰</a></li>
          <li class="nav_mall_item"><a href="" class="nav_mall_link"><i class="sp_mall_type_s i_em"></i>이마트몰</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavDataFetchingMixin from '@/mixins/NavDataFetchingMixin.js';

export default {
  mixins: [NavDataFetchingMixin],
  data() {
    return {
      selectedItem: '',
    }
  },
  methods: {
    onClickItem(item) {
      this.selectedItem = item;
    },
    closeSlideout() {
      this.$emit('close:slideout');
    },
  },
}
</script>

<style>

</style>
