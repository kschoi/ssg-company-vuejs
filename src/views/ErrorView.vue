<template>
<div id="container">
	<!-- content -->
	<div class="content">
		<div class="err_sec">
			<em class="err_sec_tit">ERROR</em>
			<p class="err_sec_txt">페이지를 잠시 로드할 수 없습니다.</p>
		</div>
		<div class="err_btns">
			<a href="#" @click.prevent="$router.go(-1)" class="btn_base black"><span class="btn_txt ico_arrow ico_left">이전페이지로 돌아가기</span></a>
			<!-- <a href="" class="btn_base"><span class="btn_txt">새로고침</span></a> -->
		</div>
	</div>
	<!-- //content -->
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
