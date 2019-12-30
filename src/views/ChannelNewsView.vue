<template>
<div id="container">
	<!-- cover -->
	<div class="cover cover_channel">
		<div class="cover_inner">
			<h2>보도자료</h2>
			<p>SSG.COM의 가장 빠르고 <br>정확한 소식을 안내해드립니다.</p>
		</div>
	</div>
	<!-- //cover -->
	<!-- content -->
	<div class="content">

		<ul class="news_lst">
			<li class="news_lst_item">
				<div class="news_post">
					<a href="">
						<span class="news_post_img"><img src="http://placehold.it/720x400" alt=""></span>
						<span class="news_post_title">내년 '쓱닷컴' 원년 맞는 신세계, 물류센터 확보가 관건</span>
						<span class="news_post_date">2018-11-28</span>
					</a>
				</div>
			</li>
			<li class="news_lst_item">
				<div class="news_post">
					<a href="">
						<span class="news_post_img"><img src="http://placehold.it/720x400" alt=""></span>
						<span class="news_post_title">‘SSG닷컴’ 공유·공효진, 12월 스타필드 코엑스몰서 팬사인회</span>
						<span class="news_post_date">2018-11-28</span>
					</a>
				</div>
			</li>
		</ul>
		<ul class="news_lst">
			<li class="news_lst_item">
				<div class="news_post">
					<a href="">
						<span class="news_post_img"><img src="http://placehold.it/720x400" alt=""></span>
						<span class="news_post_title">내년 '쓱닷컴' 원년 맞는 신세계, 물류센터 확보가 관건</span>
						<span class="news_post_date">2018-11-28</span>
					</a>
				</div>
			</li>
			<li class="news_lst_item">
				<div class="news_post">
					<a href="">
						<span class="news_post_img"><img src="http://placehold.it/720x400" alt=""></span>
						<span class="news_post_title">‘SSG닷컴’ 공유·공효진, 12월 스타필드 코엑스몰서 팬사인회</span>
						<span class="news_post_date">2018-11-28</span>
					</a>
				</div>
			</li>
		</ul>

		<div class="news_lst_btns btn_more_view">
			<button type="button" class="btn_base btn_full"><span class="btn_txt ico_arrow ico_down">더보기</span></button>
		</div>

		<pagination
			:total-pages="10"
			:total="50"
			:per-page="size"
			:current-page="currentPage"
			@pagechanged="onPageChange"
		/>
		</div>

	</div>
	<!-- //content -->
</div>
</template>

<script>
import Pagination from '@/components/PaginationControl';
import { mapGetters } from 'vuex';

export default {
  components: {
		Pagination,
  },
  data() {
    return {
			currentPage: 1,
			size: 5,
    };
	},
  computed: {
		// ...mapGetters(['fetchedNews']),

		// paginatedData() {
		// 	var start = (this.currentPage-1) * this.size,
		// 			end = start + this.size;

		// 	return this.fetchedNews.slice(start, end);
		// },

		// totalPage() {
		// 	return Math.ceil(this.fetchedNews.length / this.size);
		// },
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    }
  },
  // created() {
  //   this.$store.dispatch('FETCH_NEWS')
  //     .then(() => {
	// 			this.$emit('off:progress')
	// 		})
  //     .catch(() => console.log('fail'));
  // },
}
</script>
