import React, { useRef } from 'react';
import { Main } from '@pages/RequestQuotation/styles';

const RequestQuotation = () => {
  const moveCursor = (textbox) => {
    if (textbox.value.length == 3) {
      document.getElementById('input2').focus();
    }

    if (textbox.value.length == 4) {
      document.getElementById('input3').focus();
    }
  };
  const alert123 = (num) => {
    if (isFinite(num.value) == false) {
      alert('전화번호는 숫자만 입력할 수 있습니다.');
      num.value = '';
      return false;
    }
  };
  return (
    <Main>
      <main role="main" id="main">
        <div class="about_bg">
          <div class="contact">
            <p>견적문의</p>
          </div>
        </div>

        <div class="box-wrap">
          <div class="box-wrap-top">
            <div class="box-wrap-top-name">
              <h4>NAME</h4>
              <input
                type="text"
                name=""
                id=""
                placeholder="이름/업체명을 입력해주세요."
                style="border: 3px solid #88D9C3"
                autofocus
              />
            </div>

            <div class="box-wrap-top-e-mail">
              <h4>E-mail</h4>
              <input
                type="email"
                name=""
                id=""
                placeholder="E-mail을 입력해주세요"
                style="border: 3px solid #88D9C3;"
              />
            </div>
          </div>

          <div class="box-wrap-middle">
            <h4>PHONE</h4>
            <div class="phone-box">
              <input
                type="text"
                name="input1"
                id="input1"
                placeholder=""
                size="3"
                maxlength="3"
                onkeyup="moveCursor(this)"
                onkeypress="alert123(this);"
                style="border: 3px solid #88D9C3"
              />

              <hr class="line1" style="border: solid 1px #88D9C3; width: 50px;" />

              <input
                type="text"
                name="input2"
                id="input2"
                placeholder=""
                size="4"
                maxlength="4"
                onkeyup="moveCursor(this)"
                onkeypress="alert123(this);"
                style="border: 3px solid #88D9C3"
              />

              <hr class="line2" style="border: solid 1px #88D9C3; width: 50px;" />

              <input
                type="text"
                name="input3"
                id="input3"
                placeholder=""
                size="4"
                maxlength="4"
                style="border: 3px solid #88D9C3;"
              />
            </div>
          </div>

          <div class="box-wrap-bottom">
            <h4>MESSAGE</h4>
            <textarea
              class="message-box"
              name="message"
              cols="40"
              rows="5"
              placeholder="문의 사항을 남겨주세요."
              style="border: solid 3px #88D9C3;"
              style="resize: none;"
            ></textarea>
          </div>

          <form class="checkbox">
            <input type="checkbox" name="agree" value="" /> 개인정보 수집 및 이용에 동의합니다.
          </form>

          <div class="view">
            <a href="">자세히 보기</a>
          </div>

          <div class="submit">
            <input type="submit" value="견적 및 상담 접수" />
          </div>
        </div>
      </main>
    </Main>
  );
};

export default RequestQuotation;
