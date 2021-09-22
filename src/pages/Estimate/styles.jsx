import styled from '@emotion/styled';

export const Main = styled.main`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    /*font-family: 'Noto Sans KR', 'Nanum Gothic', sans-serif;*/ /* 폰트 왼쪽부터 지원하면 적용 */
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  img {
    vertical-align: middle;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  button {
    border: none;
    background-color: transparent;
  }
  input,
  textarea {
    outline: none;
  }

  /* index */
  #header {
    position: fixed;

    height: 100px;
    z-index: 999;
    background-color: #ffffff;
  }
  #header img {
    width: 400px;
    margin: 24px 70px 10px;
  }
  #header .lists {
    position: absolute;
    display: inline-block;
    width: 2000px;
    padding-top: 60px;
    padding-bottom: 17px;
    background-color: #ffffff;
  }
  #header .lists .menu {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  #header .lists .menu .sub_menu {
    position: absolute;
    width: 170px;

    padding: 40 5px;
    top: 20px;
    left: -60px;

    opacity: 0;
    transition: all 0.15s ease-in;
    visibility: hidden;

    text-align: center;
  }
  #header .lists .menu li:hover .sub_menu {
    padding: 40 5px;
    top: 20px;
    left: -60px;
    opacity: 1;
    visibility: visible;
  }
  #header .lists .menu .sub_menu li {
    margin: 10px 0;
    background-color: rgba(255, 255, 255, 0.25);
    width: 100%;
    padding-right: 0;
    border-radius: 10px;
    display: flex;
    justify-content: top;
    align-items: top;
  }
  #header .lists .menu .sub_menu li:first-child {
    margin-top: 27px;
  }
  #header .lists .menu .sub_menu li a {
    color: #f2f2f2;
  }
  #header .lists .menu .sub_menu li a:hover {
    width: 100%;
    color: #000000;
    background-color: rgba(255, 255, 255, 0.25);
  }
  #header .lists .menu li {
    padding-right: 90px;
  }

  #main {
    width: 100%;
    position: relative;
    /*background-color: #f2cb05;*/
    padding-top: 100px;
  }
  #main h4 {
    font-size: 22px;
  }
  #main .video_container {
    position: relative;
    width: 100%;
    height: 1080px;
  }
  #footer {
    display: block;
    position: relative;
    width: 100%;
    height: 95px;
  }
  #footer .F_container {
    position: absolute;
    background-color: #88d9c3;
    width: 100%;
    height: 95px;
    bottom: 0;
  }
  #footer .left {
    position: absolute;
    display: inline-block;
    height: 100%;
    margin-left: 50px;
  }
  #footer .left img {
    height: 100%;
  }
  #footer .right {
    display: inline-block;
    width: 100%;
    margin-top: 5px;
  }
  #footer .right .right_top {
    text-align: right;
    margin-left: 54%;
    margin-right: 20px;
  }

  #footer .right .right_top ul li {
    display: inline-block;
  }
  #footer .right .right_top ul li:before {
    display: inline-block;
    content: '';
    width: 1px;
    height: 15px;
    background-color: #000;
    margin: 0 8px;
    vertical-align: -3px;
  }
  #footer .right .right_top ul li:nth-child(1):before,
  #footer .right .right_top ul li:nth-child(5):before {
    content: none;
  }
  #footer .right .right_bottom {
    text-align: right;
    margin-left: 54%;
    margin-right: 20px;
  }

  #footer .right .right_bottom ul li {
    display: inline-block;
  }
  #footer .right .right_bottom ul li:before {
    display: inline-block;
    content: '';
    width: 1px;
    height: 15px;
    background-color: #000;
    margin: 0 8px;
    vertical-align: -3px;
  }
  #footer .right .right_bottom ul li:nth-child(1):before,
  #footer .right .right_bottom ul li:nth-child(3):before {
    content: none;
  }

  /* about */

  .about_bg {
    position: relative;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
  }
  .nav {
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: #f2cb05;
    z-index: 10;
  }
  .nav .nav_left {
    display: inline-block;
    width: 350px;
    height: 100px;
  }
  .nav .nav_left p {
    font-size: 33px;
    padding: 30px 28px 25px 135px;
  }
  .nav .nav_left p:after {
    display: inline-block;
    content: '';
    width: 3px;
    height: 28px;
    background-color: #000;
    vertical-align: -3px;

    margin-left: 55px;
  }
  .nav .nav_right {
    position: absolute;
    display: inline-block;
    width: 800px;
    height: 100px;
    top: 40px;
  }
  .nav .nav_right ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-left: 50px;
  }
  .nav .nav_right ul li {
    padding-right: 100px;
  }
  .nav .nav_right ul li a {
    font-size: 20px;
    color: #f2f2f2;
  }
  .nav .nav_right ul li a.active {
    color: #000000;
  }
  .nav .nav_right ul li a:hover {
    color: #000000;
  }
  .about_bg .A_YTY {
    position: relative;
    width: 100%;
    padding: 100px 100px;
  }
  .about_bg .A_YTY img {
    width: 100%;
    height: 100%;
  }
  .about_bg .A_SCHE {
    position: relative;
    width: 85%;
    height: 750px;
    margin: 0 auto;
    padding-top: 100px;
  }

  /*.about_bg .A_SCHE iframe {
	
}*/

  /* Contact */
  #main .contact {
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: #f2cb05;
    z-index: 10;
  }
  #main .contact p {
    font-size: 30px;
    text-align: center;
    padding-top: 35px;
  }

  /* 예상견적 */

  .c_menu {
    position: relative;
    padding: 105px 0 5px 0;
  }
  .c_menu .c_container {
    position: relative;
    background-color: #f2f2f2;
    margin: 0 15%;
  }
  .c_menu ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  }
  .c_menu ul li {
    display: inline-block;
  }
  .c_menu ul li a {
    font-size: 30px;
    color: #000000;
    padding: 0 25px;
  }
  /*.c_menu ul li a:hover {

}*/
  .c_main {
    position: relative;
    margin: 0 15%;
    background-color: #f2f2f2;
  }
  .c_main .c_m_container {
    position: relative;
    width: 100%;
    height: 405px;
  }

  /* film */

  .col-dz {
    display: flex;
    justify-content: center;
  }
  #flim_center {
    margin: 50px;
  }

  .text-table .text_box p {
    margin-top: 90px;
  }

  /*main_flim-contents*/

  /*#flim_container{
	
}*/

  .flim_wrap {
    position: relative;
    display: block;
    box-sizing: border-box;
  }

  .flim_table {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .item_flim {
    border-radius: 0px;
    display: table-cell;
    vertical-align: top;
    padding: 0 30px;
  }

  .item_flim .item_container {
    position: relative;
  }

  .text_wrap {
    background: transparent;
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    text-align: left;
    vertical-align: middle;
    height: 100%;
  }

  /*.item_flim{
	
}*/

  /* photo */

  /*#photo_text_container {
	height: 270px;
	background-color: #f2cb05;
}*/

  .col-dz {
    display: flex;
    justify-content: center;
  }
  #photo_center {
    margin: 50px;
  }

  .text-table .text_box p {
    margin-top: 90px;
  }
  .p_container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding-top: 105px;
  }

  /* photo contents */

  .item_container {
    vertical-align: middle;
  }

  #container {
    padding: 105px 0 10px 0;
  }

  .item .item_container img {
    margin: 0 auto;
  }

  /* 예상견적 */

  /*기업영상*/

  /* 견적문의 */

  .question {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;

    font-size: 20px;

    background-color: #f2cb05;

    width: 100%;
    height: 80px;

    margin-bottom: 35px;
  }

  .box-wrap {
    border: solid 3px #000000;

    width: 800px;
    height: 100%;

    margin: 0 auto;
    padding-top: 10px;
    margin-bottom: 10px;
  }

  .box-wrap .box-wrap-top {
    display: flex;
    /*flex-direction: row;*/
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;

    margin-bottom: 10px;
  }

  .box-wrap .box-wrap-top input {
    width: 350px;
    height: 50px;

    margin-top: 5px;

    font-size: 20px;
    padding-left: 20px;
  }

  .box-wrap .box-wrap-middle {
    padding-left: 20px;

    margin-bottom: 20px;
  }

  .box-wrap .box-wrap-middle .phone-box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;

    padding-right: 20px;
  }

  .box-wrap .box-wrap-middle input {
    width: 170px;
    height: 50px;

    margin-top: 5px;

    font-size: 20px;

    text-align: center;
  }

  .box-wrap .box-wrap-bottom {
    padding-left: 20px;
  }

  .box-wrap .box-wrap-bottom .message-box {
    width: 760px;
    height: 150px;

    margin-bottom: 20px;

    margin-top: 5px;

    font-size: 20px;
    padding-left: 20px;
    padding-top: 10px;
  }

  .checkbox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;

    margin-bottom: 5px;
  }

  .view {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;

    margin-bottom: 10px;
  }

  .submit {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
    margin-bottom: 5px;
  }

  .submit input {
    height: 30px;
  }

  /* Shutter Out Horizontal */
  .hvr-shutter-out-horizontal {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    background: #f2f2f2;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-shutter-out-horizontal:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #88d9c3;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-shutter-out-horizontal:hover,
  .hvr-shutter-out-horizontal:focus,
  .hvr-shutter-out-horizontal:active {
    color: white;
  }
  .hvr-shutter-out-horizontal:hover:before,
  .hvr-shutter-out-horizontal:focus:before,
  .hvr-shutter-out-horizontal:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  .c_m_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .c_m_container #ExImg2 {
    display: none;
  }
`;
