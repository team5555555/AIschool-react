import React from 'react';

import { Header, Footer } from '@layouts/Home/styles';
import { Route, Switch } from 'react-router';
import About from '@pages/About';

const Home = () => {
  return (
    <>
      <Header>
        <div className="navbar_logo">
          <img src="https://github.com/team5555555/AIschool-web/blob/main/Youth/img/logo_E_2.jpg?raw=true" alt="" />
        </div>
        <Switch>
          <ul className="navbar_menu">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Photography</a>
            </li>
            <li>
              <a href="">Film</a>
            </li>
            <li>
              <a href="">예상견적</a>
            </li>
            <li>
              <a href="">견적문의</a>
            </li>
            <li>
              <a href="">Contect</a>
            </li>
          </ul>
        </Switch>
      </Header>

      <Footer>
        <div class="F_container">
          <div class="left">{/* <img src="img/logo_E_1.jpg"> */}</div>
          <div class="right">
            <div class="right_top">
              <ul>
                <li>유스더유스</li>
                <li>대표자명 : 김태완</li>
                <li>
                  사업자등록번호 : <a href="https://www.ftc.go.kr">687-51-00454</a>
                </li>
                <li>통신판매업번호 : 2020-</li>
                <li>충남부여-0004</li>
              </ul>
            </div>
            <div class="right_bottom">
              <ul>
                <li>충청남도 부여군 부여읍 사비로 12번길 6-28 204호 (우 : 33167)</li>
                <li>e-mail : six6200@naver.com</li>
                <li>&copy; 2021 유스더유스 .All rights reserved.</li>
              </ul>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Home;
