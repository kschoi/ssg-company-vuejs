<template>
<div id="container">
	<!-- cover -->
	<div class="cover cover_channel">
		<div class="cover_inner">
			<h2>브랜드영상</h2>
			<p>미디어 속  SSG.COM의 영상을<br>소개해드립니다.</p>
		</div>
	</div>
	<!-- //cover -->
		<!-- content -->
	<div class="content">

		<ul class="video_lst">
			<li class="video_lst_item">
					<div class="video_article">
					<div class="video_img"><video controls="controls" poster="http://static.ssgcdn.com/ui/m_ssg/img/ssgtalk/mov_poster.jpg"><source src="http://static.ssgcdn.com/ui/m_ssg/img/ssgtalk/mov_ssgtalk.mp4" type="video/mp4"></video></div>
					<div class="video_post">
						<div class="video_post_title">"식석갓세?"…신세계가 '약 빨고' 만든 역대급 '병맛' 쓱닷컴 광고</div>
						<div class="video_post_caption">"식석갓세?”[신선한데?]를 뜻하는 SSG語. 두부 한 모, 고기 한 근도 온도 맞춰,시간 맞춰, 문앞까지 정성껏 가져다 주는 쓱배송. SSG.COM의 신선한 감동을 담을 감탄사가 세상에 없어 새로 말을 만들다!</div>
						<div class="video_post_date">2018-11-28</div>
					</div>
				</div>
			</li>
			<li class="video_lst_item">
					<div class="video_article">
					<div class="video_img"><video controls="controls" poster="http://static.ssgcdn.com/ui/m_ssg/img/ssgtalk/mov_poster.jpg"><source src="http://static.ssgcdn.com/ui/m_ssg/img/ssgtalk/mov_ssgtalk.mp4" type="video/mp4"></video></div>
					<div class="video_post">
						<div class="video_post_title">SSG의 '새각', 이마트가 '이오'로 받았다</div>
						<div class="video_post_caption">이마트몰 모델 돈스파이크의 공유 따라잡기! 블랙이오~ 이오! 이오, 이~오!</div>
						<div class="video_post_date">2018-11-28</div>
					</div>
				</div>
			</li>
		</ul>

		<div class="video_lst_btns btn_more_view">
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
