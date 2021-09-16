import styled from '@emotion/styled';

export const Header = styled.header`
  /* position: fixed; */
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: #acfff1b5;

  & .navbar_logo img {
    height: 4.5rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  & a {
    text-decoration: none;
  }
  & ul {
    display: flex;
    list-style: none;
    padding-left: 0;
    font-size: 1.2rem;

    & li a {
      /* display: inline-block; */
      flex-wrap: wrap;
      padding: 1rem;
      color: black;
      /* overflow: hidden; */
      /* white-space: nowrap; */
    }
  }
`;

export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  height: 95px;
  bottom: 0;

  .F_container {
    position: fixed;
    background-color: #88d9c3;
    width: 100%;
    height: 95px;
    bottom: 0;
  }
  .left {
    position: absolute;
    display: inline-block;
    height: 100%;
    margin-left: 50px;
  }
  .left img {
    height: 100%;
  }
  .right {
    display: inline-block;
    width: 100%;
    margin-top: 10px;
  }
  .right .right_top {
    text-align: right;
    margin-left: 54%;
    margin-right: 20px;
  }
  .right .right_top ul {
  }
  .right .right_top ul li {
    display: inline-block;
  }
  .right .right_top ul li:before {
    display: inline-block;
    content: '';
    width: 1px;
    height: 15px;
    background-color: #000;
    margin: 0 8px;
    vertical-align: -3px;
  }
  .right .right_top ul li:nth-child(1):before,
  .right .right_top ul li:nth-child(5):before {
    content: none;
  }
  .right .right_bottom {
    text-align: right;
    margin-left: 54%;
    margin-right: 20px;
  }
  .right .right_bottom ul {
  }
  .right .right_bottom ul li {
    display: inline-block;
  }
  .right .right_bottom ul li:before {
    display: inline-block;
    content: '';
    width: 1px;
    height: 15px;
    background-color: #000;
    margin: 0 8px;
    vertical-align: -3px;
  }
  .right .right_bottom ul li:nth-child(1):before,
  .right .right_bottom ul li:nth-child(3):before {
    content: none;
  }
`;
