import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: white;

  & .navbar_logo img {
    height: 4.5rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  & a {
    text-decoration: none;
    color: black;
  }
  & ul {
    display: flex;
    list-style: none;
    padding-left: 0;
    font-size: 1rem;
    /* flex-wrap: wrap; */
    text-align: center;

    & li {
      /* display: inline-block; */
      /* background-color: red; */
      text-align: center;

      padding: 3rem;
      color: black;
      /* overflow: hidden; */
      /* white-space: nowrap; */
    }
    & li :after {
      display: block;
      content: '';
      height: 7px;
      border-bottom: solid 2px black;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    & ul {
      display: none;
    }
    & li:hover ul {
      display: block;

      position: absolute;

      /* opacity: 0.25; */
      top: 100px;
      left: 450px;
      z-index: 0;
      & li {
        /* background-color: red; */
        background-color: rgb(242, 242, 242, 0.25);
        color: #ffffff;
        margin: 0;
        padding: 30px;
      }
      & li:hover {
        /* background-color: red; */
        color: black;
        /* background-color: transparent; */
      }
    }
    & li :hover:after {
      transform: scaleX(1);
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

export const Mid = styled.div`
  background-color: #f2cb05;
`;
