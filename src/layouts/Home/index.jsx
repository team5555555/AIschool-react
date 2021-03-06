import React from 'react';
import loadable from '@loadable/component';

import { Header, Footer, Main } from '@layouts/Home/styles';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

const About = loadable(() => import('@pages/About'));
const AboutSche = loadable(() => import('@pages/AboutSche'));
const AboutSol = loadable(() => import('@pages/AboutSol'));
const Film = loadable(() => import('@pages/Film'));
const Common = loadable(() => import('@pages/Common'));
const Estimate = loadable(() => import('@pages/Estimate'));
const RequestQuotation = loadable(() => import('@pages/RequestQuotation'));

const Home = () => {
  return (
    <>
      <Header>
        <header id="header">
          <Link to="/index">
            <img src="https://github.com/team5555555/AIschool-web/blob/main/Youth%20-/img/logo_E_2.jpg?raw=true" />
          </Link>
          <div class="lists">
            <ul class="menu">
              <li>
                <Link to="/about" className="hvr-underline-from-center pop">
                  About
                </Link>
                <ul class="sub_menu">
                  <li>
                    <Link to="/about" className="hvr-grow">
                      YOUTH the YOUTH
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutsol" className="hvr-grow">
                      SOLUTION
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutsche" className="hvr-grow">
                      SCHEDULE
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/photo" className="hvr-underline-from-center">
                  Photography
                </Link>
              </li>
              <li>
                <Link to="/film" className="hvr-underline-from-center">
                  Film
                </Link>
              </li>
              <li>
                <Link to="/estimate" className="hvr-underline-from-center">
                  ????????????
                </Link>
              </li>
              <li>
                <Link to="/requestquota" className="hvr-underline-from-center">
                  ????????????
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hvr-underline-from-center">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </Header>

      <Main>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/aboutsol" component={AboutSol}></Route>
          <Route path="/aboutsche" component={AboutSche}></Route>
        </Switch>
      </Main>
      <Switch>
        <Route path="/index" component={Common}></Route>
        <Route path="/film" component={Film}></Route>
        <Route path="/estimate" component={Estimate}></Route>
        <Route path="/requestquota" component={RequestQuotation}></Route>
      </Switch>

      <Footer>
        <footer id="footer">
          <div class="F_container">
            <div class="left">
              <img src="https://github.com/team5555555/AIschool-web/blob/main/0916/img/footer_logo.jpg?raw=true" />
            </div>
            <div class="right">
              <div class="right_top">
                <ul>
                  <li>???????????????</li>
                  <li>???????????? : ?????????</li>
                  <li>
                    ????????????????????? : <a href="https://www.ftc.go.kr">687-51-00454</a>
                  </li>
                  <li>????????????????????? : 2020-</li>
                  <li>????????????-0004</li>
                </ul>
              </div>
              <div class="right_bottom">
                <ul>
                  <li>???????????? ????????? ????????? ????????? 12?????? 6-28 204??? (??? : 33167)</li>
                  <li>e-mail : six6200@naver.com</li>
                  <li>&copy; 2021 ??????????????? .All rights reserved.</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Footer>
    </>
  );
};

export default Home;
