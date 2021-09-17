import React from 'react';
import { Main } from '@pages/AboutSche/styles';
import { Link } from 'react-router-dom';
const AboutSche = () => {
  return (
    <>
      <Main>
        <main role="main" id="main" class="main">
          <div class="about_bg">
            <div class="nav">
              <div class="nav_left">
                <p>About</p>
              </div>
              <div class="nav_right">
                <ul>
                  <li>
                    <Link to="about">YOUTH the YOUTH</Link>
                  </li>
                  <li>
                    <Link to="/aboutsol">SOLUTION</Link>
                  </li>
                  <li>
                    <Link to="/aboutsche" class="active">
                      SCHEDULE
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="A_YTY">
              <img src="https://via.placeholder.com/1000x500" />
              <img src="https://via.placeholder.com/1000x500" />
              <img src="https://via.placeholder.com/1000x500" />
            </div>
          </div>
        </main>

        {/* <Switch>
        <Route path="/aboutsol" component={AboutSol}></Route>
        <Route path="/aboutsche" component={AboutSche}></Route>
      </Switch> */}
      </Main>
      );
    </>
  );
};

export default AboutSche;
