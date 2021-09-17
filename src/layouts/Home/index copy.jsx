import React from 'react';
import loadable from '@loadable/component';

import { Header, Footer, Mid } from '@layouts/Home/styles';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

const About = loadable(() => import('@pages/About'));
const Film = loadable(() => import('@pages/Film'));

const Home = () => {
  return (
    <>
      <Header>
        <div className="navbar_logo">
          <Link exact to="/">
            <img src="https://github.com/team5555555/AIschool-web/blob/main/Youth/img/logo_E_2.jpg?raw=true" alt="" />
          </Link>
        </div>

        <ul className="navbar_menu">
          <li>
            <Link to="/about">About</Link>

            <ul className="sub_nav">
              <li>YOUTH the YOUTH</li>
              <li>SOLUTION</li>
              <li>SCHEDULE</li>
            </ul>
          </li>
          <li>
            <Link to="/photography">Photography</Link>
          </li>
          <li>
            <Link to="/Film">Film</Link>
          </li>
          <li>
            <Link to="/estimate">예상견적</Link>
          </li>
          <li>
            <Link to="/requestQuotation">견적문의</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Header>
      <Mid>
        <Switch>
          <Route path="/about" component={About}></Route>
        </Switch>
      </Mid>
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
