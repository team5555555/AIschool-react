import styled from '@emotion/styled';

export const Main = styled.main`
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
    background-color: #e2cb05;
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
    padding-top: 100px;
  }
  .about_bg .A_YTY img {
    width: 100%;
    height: 100%;
  }
  .about_bg .A_SCHE {
    position: relative;
    width: 100%;
    height: 800px;
  }

  .about_bg .A_SCHE iframe {
    position: absolute;
    top: 3px;
    width: 100%;
    height: 100%;
    padding: 105px 300px 0;
  }
`;
