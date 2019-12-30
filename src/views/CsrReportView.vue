<template>
<div id="container" class="container bg_color">
	<!-- content -->
	<div class="content">
		<div class="sinmungo">
			<div class="headline">
				<h2 class="tit">핫라인제보</h2>
			</div>

			<div class="privacy">
				<h3 class="privacy_tit">개인정보이용동의</h3>
				<div class="privacy_sec">
					<h4>1. 개인정보의 수집 및 이용목적</h4>
					<div class="privacy_sec_desc">SSG.COM 임직원, 협력회사 직원, 고객 및 주주 등 기업 이해관계자가 SSG.COM 부정부실 행위를 신고하거나 사회적 책임경영측면에서 잘못된 관행이나 정책부문에 대한 개선/제안사항 접수</div>
				</div>

				<div class="privacy_sec">
					<h4>2. 수집하는 개인정보의 항목</h4>
					<ul class="privacy_sec_desc">
						<li>1) 필수 입력사항 : 이름, 작성자 소속, 전화번호, 휴대폰번호, 이메일 / 익명일 경우 소속, 이메일</li>
						<li>2) 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 생성되어 수집될 수 있습니다.<br>- 서비스 이용 기록, 접속 IP 정보</li>
					</ul>
				</div>
				<div class="privacy_sec">
					<h4>3. 개인정보의 보유 및 이용기간</h4>
					<ul class="privacy_sec_desc">
						<li>1) 원칙적으로 개인정보의 수집 목적 또는 제공 받은 목적이 달성되면 즉시 파기합니다.</li>
						<li>2) 다만, 관계법령에 의해 보존할 필요가 있는 경우에는 일정기간 보존합니다.</li>
					</ul>
				</div>

				<div class="privacy_agree">
					<span class="base_inp_chk">
						<input type="checkbox" id="ui_infoagree" class="inp_chk">
						<label for="ui_infoagree">개인정보이용을 확인하였으며 이에 동의합니다.</label>
					</span>
				</div>
			</div>

			<div class="report">
				<h3 class="report_tit">제보작성</h3>

				<div class="report_info">
					<div class="name">SSG.COM CSR팀</div>
					<ul class="list">
						<li class="addr"><span class="blind">주소</span>서울시 중구 남대문시장 10길 2, 메사빌딩 6F</li>
						<li class="email"><span class="blind">이메일</span>ssg_hotline@shinsegae.com</li>
					</ul>
				</div>

				<div class="report_desc">제보에 대한 신속한 처리를 위해 실명제보를 원칙으로 하며 부득이하게 실명을 밝히기 어려운 경우에는 사실관계를 구체적으로 작성해 주시기 바랍니다. 제보내용의 사실 검증을 위해 유관부서와의 확인 과정이 수반될 수 있습니다.</div>

				<div class="report_desc">※ 고객서비스 불만 및 개선사항은 SSG.COM 홈페이지內 고객의 소리를 이용하여 주시기 바랍니다.</div>

				<div class="report_btns">
					<a href="" class="btn_base"><span class="btn_txt ico_arrow ico_right">고객의 소리 바로가기</span></a>
				</div>
			</div>

			<div class="report_forms">
				<p class="form_txt">※ 모든 항목을 기재하여야 신고가 가능합니다.</p>

				<dl class="form_inp form_writer">
					<dt><label for="ui_lb_name">작성자</label></dt>
					<dd>
						<span class="base_inp_txt">
							<input type="text" id="ui_lb_name" value="홍길동">
						</span>

						<div class="base_rdo_grp">
							<span class="base_inp_rdo">
								<input type="radio" id="ui_name01" value="" name="ui_name_gr1" checked=""><label for="ui_name01">실명</label>
							</span>
							<span class="base_inp_rdo">
								<input type="radio" id="ui_name02" value="" name="ui_name_gr1"><label for="ui_name02">익명</label>
							</span>
						</div>
					</dd>
				</dl>

				<dl class="form_inp form_belong">
					<dt>작성자소속</dt>
					<dd>
						<div class="base_rdo_grp">
							<span class="base_inp_rdo">
								<input type="radio" id="ui_belong01" value="" name="ui_belong" checked=""><label for="ui_belong01">SSG.COM과 거래하는 협력회사</label>
							</span>
							<span class="base_inp_rdo">
								<input type="radio" id="ui_belong02" value="" name="ui_belong"><label for="ui_belong02">SSG.COM 임직원</label>
							</span>
							<span class="base_inp_rdo">
								<input type="radio" id="ui_belong03" value="" name="ui_belong"><label for="ui_belong03">기타</label>
							</span>
						</div>
					</dd>
				</dl>

				<dl class="form_inp form_tel">
					<dt>전화번호</dt>
					<dd>
						<div class="base_inp_grp">
							<span class="base_inp_txt">
								<input type="tel" pattern="[0-9]*" maxlength="4" value="" title="전화번호 앞자리">
							</span>
							<span class="base_space">-</span>
							<span class="base_inp_txt">
								<input type="tel" pattern="[0-9]*" maxlength="4" value="" title="전화번호 가운데 자리">
							</span>
							<span class="base_space">-</span>
							<span class="base_inp_txt">
								<input type="tel" pattern="[0-9]*" maxlength="4" value="" title="전화번호 마지막 자리">
							</span>
						</div>
						<p class="form_inp_ex">예) 02-123-4567</p>
					</dd>
				</dl>

				<dl class="form_inp form_phone">
					<dt>휴대폰번호</dt>
					<dd>
						<div class="base_inp_grp">
							<span class="base_inp_txt">
								<input type="tel" pattern="[0-9]*" maxlength="4" value="" title="휴대폰번호 앞자리">
							</span>
							<span class="base_space">-</span>
							<span class="base_inp_txt">
								<input type="tel" pattern="[0-9]*" maxlength="4" value="" title="휴대폰번호 가운데 자리">
							</span>
							<span class="base_space">-</span>
							<span class="base_inp_txt">
								<input type="tel" pattern="[0-9]*" maxlength="4" value="" title="휴대폰번호 마지막 자리">
							</span>
						</div>
						<p class="form_inp_ex">예) 010-1234-5678</p>
					</dd>
				</dl>

				<dl class="form_inp form_email">
					<dt>이메일</dt>
					<dd>
						<div class="base_inp_grp">
							<span class="base_inp_txt">
								<input type="text" value="" title="이메일 아이디">
							</span>
							<span class="base_space">@</span>
							<span class="base_inp_txt">
								<input type="text" value="" title="이메일 호스팅">
							</span>
						</div>
						<p class="form_inp_ex">※작성자 이메일을 정확히 입력해주세요.</p>
					</dd>
				</dl>

				<dl class="form_inp form_reporter">
					<dt>제보대상자</dt>
					<dd>
						<div class="form_inp_sub"><span class="tit"><label for="ui_report01">이름</label></span><span class="sub"><span class="base_inp_txt"><input type="text" value="" id="ui_report01"></span></span></div>
						<div class="form_inp_sub"><span class="tit"><label for="ui_report02">근무부서</label></span><span class="sub"><span class="base_inp_txt"><input type="text" value="" id="ui_report02"></span></span></div>
					</dd>
				</dl>

				<dl class="form_inp form_division">
					<dt>구분</dt>
					<dd>
						<span class="base_inp_sel">
							<select title="선택하세요">
								<option value="">선택</option>
								<option value="">윤리경영위반제보</option>
								<option value="">직장 내 성희롱/성폭력 제보</option>
								<option value="">애로/개선사항</option>
								<option value="">아이디어 제안</option>
								<option value="">불공정거래</option>
							</select>
						</span>
					</dd>
				</dl>

				<dl class="form_inp form_subject">
					<dt><label for="ui_subject">제목</label></dt>
					<dd>
						<span class="base_inp_txt"><input type="text" id="ui_subject" value=""></span>
					</dd>
				</dl>

				<dl class="form_inp form_content">
					<dt class="top"><label for="ui_textarea01">내용</label></dt>
					<dd>
						<span class="base_inp_txtarea">
							<textarea id="ui_textarea01" cols="30" rows="8" placeholder="내용은 최대 4,000자까지 입력가능합니다."></textarea>

							<span class="textarea_cont">(0/4000자)</span>
						</span>
					</dd>
				</dl>

				<dl class="form_inp form_file">
					<dt>첨부파일</dt>
					<dd>
						<div class="form_file_upload">
							<div class="form_add_img">
								<span class="img"><img src="http://placehold.it/100x100" alt=""></span>
								<button type="button" class="btn_del"><span class="blind">첨부파일 삭제</span></button>
							</div>
							<div class="form_add_img">
								<input type="file" name="ui_file" id="ui_file" class="blind">
								<label for="ui_file"><span class="ico_add"><span class="blind">첨부파일 업로드</span></span></label>
							</div>
						</div>

						<p class="form_inp_ex">※파일형식은 jpg, gif, png로 제한되며, 최대 20MB까지 가능합니다.</p>
					</dd>
				</dl>

				<dl class="form_inp form_result">
					<dt>결과통보</dt>
					<dd>
						<div class="base_rdo_grp">
							<span class="base_inp_rdo">
								<input type="radio" id="ui_result01" value="" name="ui_result" checked=""><label for="ui_result01">필요</label>
							</span>
							<span class="base_inp_rdo">
								<input type="radio" id="ui_result02" value="" name="ui_result"><label for="ui_result02">불필요</label>
							</span>
						</div>
						<p class="form_inp_ex">※실명일 경우에만 결과통보가 가능합니다.</p>
					</dd>
				</dl>

				<div class="form_btns">
					<a href="" class="btn_base black"><span class="btn_txt">신고하기</span></a>
					<router-link to="/csr/sinmungo" class="btn_base"><span class="btn_txt">취소</span></router-link>
				</div>
			</div>

		</div>
	</div>
	<!-- //content -->
</div>
</template>
