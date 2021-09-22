import styled from '@emotion/styled';

export const Header = styled.header`
  /* index */
  #header {
    position: fixed;
    width: 100%;
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
    width: 900px;
    padding-top: 52px;
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
    margin-top: 35px;
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
  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    border-radius: 10px;
    width: 100%;
  }
  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .hvr-underline-from-center {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }
  .hvr-underline-from-center:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: #000000;
    height: 2px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-underline-from-center:hover:before,
  .hvr-underline-from-center:focus:before,
  .hvr-underline-from-center:active:before {
    left: 0;
    right: 0;
  }
  @media (max-width: 767px) {
    /* index */
    #header {
      width: 100%;
      height: 125px;
    }
    #header a {
      position: relative;
      display: block;
      margin: 12px auto 0;
    }
    #header a img {
      display: block;
      margin: 0 auto;
      width: 100%;
      padding: 0 10px;
    }
    #header .lists {
      position: relative;
      display: inline-block;
      width: 100%;
      padding-top: 0;
      padding-bottom: 0;
    }
    #header .lists .menu {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
    #header .lists .menu .sub_menu {
      display: none;
    }
    #header .lists .menu li {
      padding: 0 15px;
    }
    #header .lists .menu li a {
      margin: 3px 0;
    }
    #main {
      position: relative;
      height: 100%;
      padding-top: 125px;
    }

    #main .video_container {
      position: relative;
      width: 100%;
    }
    #main .video_container video {
      width: 100%;
    }
  }
`;

export const Footer = styled.footer`
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
`;

export const Main = styled.main`
  display: flex;
  margin-top: auto;
  flex-direction: column;

  /* overflow: hidden; */
  #main {
    width: 100%;
    position: relative;
    background-color: #f2cb05;
    padding-top: 100px;
  }
  #main .video {
    position: relative;
    width: 100%;
  }
  #main img {
    width: 100%;
    height: 100%;
  }
`;
