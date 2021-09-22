import React from 'react';
// import Home from '@layouts/Home';
import { Main } from '@pages/AboutSol/styles';
import { Link } from 'react-router-dom';

const AboutSol = () => {
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
              </div>
            </div>

            <div class="A_YTY">
              <img src="https://github.com/team5555555/AIschool-web/blob/main/0922/img/A_4.png?raw=true" />
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

export default AboutSol;
