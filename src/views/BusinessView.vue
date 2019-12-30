<template>
<div id="container">
	<!-- cover -->
	<div class="cover cover_business">
		<div class="cover_inner">
			<h2>전자공고</h2>
			<p>SSG.COM의 공지사항을<br>안내해드립니다.</p>
		</div>
	</div>
	<!-- //cover -->
		<!-- content -->
	<div class="content">

		<div class="business_lst">
			<div class="tblarea">
				<table class="tbl">
				<caption><span class="blind">경영정보 전자공고</span></caption>
				<colgroup>
					<col class="tbl_col1">
					<col class="tbl_col2">
				</colgroup>
				<thead>
					<tr>
						<th scope="col">제목</th>
						<th scope="col">등록일</th>
					</tr>
				</thead>
				<tbody>
					<tr
            v-for="news in paginatedData"
						:key="news.id"
            :item="news">
						<td class="subject">
							<router-link :to="`business/${news.id}`">{{ news.title }}</router-link>
						</td>
						<td class="date">2018-12-10</td>
					</tr>
				</tbody>
				</table>
			</div>
		</div>

		<div class="business_lst_btns btn_more_view">
			<button type="button" class="btn_base btn_full"><span class="btn_txt ico_arrow ico_down">더보기</span></button>
		</div>

		<pagination
			:total-pages="totalPage"
			:total="this.fetchedNews.length"
			:per-page="size"
			:current-page="currentPage"
			@pagechanged="onPageChange"
		/>

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
		...mapGetters(['fetchedNews']),

		paginatedData() {
			var start = (this.currentPage-1) * this.size,
					end = start + this.size;

			return this.fetchedNews.slice(start, end);
		},

		totalPage() {
			return Math.ceil(this.fetchedNews.length / this.size);
		},
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    }
  },
}
</script>
