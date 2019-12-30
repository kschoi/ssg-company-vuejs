<template>
  <div class="pagination">
    <button
      type="button"
      @click="onClickFirstPage"
      :disabled="isInFirstPage"
      aria-label="처음 페이지로"
      class="btn_page btn_page_first">
        <span class="blind">처음</span>
    </button>
    <button 
      type="button" 
      @click="onClickPreviousPage"
      :disabled="isInFirstPage"
      aria-label="이전 페이지로"
      class="btn_page btn_page_prev">
        <span class="blind">이전</span>
    </button>
    <button
      type="button" 
      v-for="page in pages"
      :key="page.name"
      @click="onClickPage(page.name)"
      :disabled="page.isDisabled"
      :class="['pagination-item', { active: isPageActive(page.name) }]"
      :aria-label="`Go to page number ${page.name}`">
      {{ page.name }}
    </button>
    <button
      type="button" 
      @click="onClickNextPage"
      :disabled="isInLastPage"
      aria-label="다음 페이지로"
      class="btn_page btn_page_next">
        <span class="blind">다음</span>
    </button>
    <button
      type="button" 
      @click="onClickLastPage"
      :disabled="isInLastPage"
      aria-label="마지막 페이지로"
      class="btn_page btn_page_last">
        <span class="blind">끝</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
  },
  computed: {
    startPage() {
      if (this.currentPage < this.maxVisibleButtons) {
        return 1;
      }

      // if (this.currentPage === this.totalPages) { 
        return this.totalPages - this.maxVisibleButtons + 1;
      // }

      // return this.currentPage - 1;
    },
    endPage() {
      
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
      
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage 
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);    
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
}
</script>
