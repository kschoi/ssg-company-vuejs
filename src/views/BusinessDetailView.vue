<template>
  <div id="container">
	<!-- cover -->
	<div class="cover cover_business">
		<div class="cover_inner">
			<h2>전자공고</h2>
			<p>SSG.COM의 공지사항을 안내해드립니다.</p>
		</div>
	</div>
	<!-- //cover -->
  <!-- content -->
  <div class="content">

    <div class="board_head">
      <h3 class="tit">{{ userQuestion }}</h3>
      <span class="date">{{ userTimeAgo }}</span>
    </div>

    <div class="board_body">
      <div class="file_attached">
        <span class="file_label">첨부파일</span>
        <a href="" class="file_save_lnk"><span class="file_name">제10기 정기주주총회 소집공고.pdf</span></a>
      </div>

      <div v-html="userContent" class="board_body_cont"></div>
      <!-- <div class="board_body_cont">
        주식회사 SSG 정관 제23조에 따라 제10기 정기주주총회를 아래와 같이 개최하고자 하오니 참석하여 주시기 바랍니다.
        <br><br>
        1. 일 시 : 2018년 3월 23일(금) 오전 10시<br>
        2. 장 소 : 서울특별시 영등포구 국제금융로8길 26(여의도동) 국민은행 여의도본점 4층 강당<br>
        3. 부의안건
        <br><br>
        •제1호 의안 : 2017회계연도(2017.1.1~2017.12.31) 재무제표(연결재무제표 포함) 및 이익배당(안) 승인의 건<br>
        •제2호 의안 : 정관 변경의 건<br>
        •제3호 의안 : 사외이사 선임의 건<br>
        •제4호 의안 : 감사위원회 위원이 되는 사외이사 선임의 건<br>
        - 감사위원회 위원이 되는 사외이사 후보 한 종 수
        <br><br>
        4. 주주총회 소집의 통지 · 공고사항 비치
        <br><br>
        상법 제542조의4 제3항에 따른 사외이사 등의 활동내역과 보수에 관한 사항, 사업개요 등 대통령령으로 정하는 사항을 당사의 인터넷 홈페이지에 게재하고, 당사와 당사의 명의개서대행기관인 ㈜국민은행 증권대행부, 금융위원회 및 한국거래소에 비치하고 있으니 참조하시기 바랍니다.
        <br><br>
        5. 사외이사 후보 추천내역의 공시
        <br><br>
        당사「지배구조 내부규범」 제3조에 따라 사외이사 후보추천 내역을 당사 및 전국은행연합회의 홈페이지에 공시하였으니 참고하시기 바랍니다.
        <br><br>
        · 당사 홈페이지: www.kbfg.com > 투자정보 > 기업지배구조 > 이사회공시<br>
        · 전국은행연합회 홈페이지: www.kfb.or.kr > 은행업무정보 > 기타공시 > 지배구조공시 > 은행지주회사
        <br><br>
        ※참조: 안건 관련 세부사항은 본문 하단의 “제10기 정기주주총회 소집공고(다운로드)” 배너 또는 금융감독원 전자공시시스템 (http://dart.fss.or.kr)에 공시된 “주주총회 소집공고”를 참고해 주시기 바랍니다.
      </div> -->

    </div>

    <div class="board_foot">
      <div class="board_foot_lst">
        <div class="lst_prev"><span class="lst_label">이전</span><a href="" class="lst_lnk">내년 ‘쓱닷컴 원년 맞는 신세계, 물류센터 확보가 관건</a></div>
        <div class="lst_next"><span class="lst_label">다음</span><a href="" class="lst_lnk">우르르 모여라, 싸다! ‘크라우드 펀딩 제작’ 나서는 신세계</a></div>

        <div class="lst_btns">
          <a @click.prevent="$router.go(-1)" class="btn_base btn_full"><span class="btn_txt ico_arrow ico_right">목록으로 가기</span></a>
        </div>
      </div>
    </div>

  </div>
  <!-- //content -->
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedNewsDetail']),
    userName() {
      return this.fetchedNewsDetail.user;
    },
    userTimeAgo() {
      return this.fetchedNewsDetail.time_ago;
    },
    userQuestion() {
      return this.fetchedNewsDetail.title;
    },
    userContent() {
      return this.fetchedNewsDetail.content;
    },
  },
}
</script>

<style>

</style>
