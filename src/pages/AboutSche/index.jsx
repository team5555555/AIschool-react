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

            <div class="A_SCHE">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=750&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FSeoul&src=a28uc291dGhfa29yZWEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=cGQwcWhpaW5pN3JkamxqNjJxMm0xZjhscmFrdjYxNm9AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4&color=%2333B679&showTitle=0&showPrint=0&showCalendars=0&showTabs=0&showTz=0"
                // style="border-width:0"
                // width="100%"
                // height="100%"
                // frameborder="0"
                // scrolling="no"
              ></iframe>
            </div>
          </div>
        </main>
      </Main>
      );
    </>
  );
};

export default AboutSche;
