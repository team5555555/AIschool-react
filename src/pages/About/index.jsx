import React from 'react';
import { Main } from '@pages/About/styles';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

// import loadable from '@loadable/component';

// const AboutSol = loadable(() => import('@pages/AboutSol'));
// const AboutSche = loadable(() => import('@pages/AboutSche'));

const About = () => {
  const [height, setHeight] = useState(100);

  return (
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
                  <Link to="about" class="active">
                    YOUTH the YOUTH
                  </Link>
                </li>
                <li>
                  <Link to="/aboutsol">SOLUTION</Link>
                </li>
                <li>
                  <Link to="/aboutsche">SCHEDULE</Link>
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
};

export default About;
