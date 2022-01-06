import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ava from "../Assets/ava-half.png";
import { LogOut, ProductIcon, Profile, Tablet } from "../SubComponents/AllSvg";

const Container = styled.div`
  background: #041c32;
  height: 100vh;
  width: 22vw;
  padding-top: 20px;
  position: fixed;
  overflow: hidden;
  transition: 0.3s;

  .menu-icon {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    right: 10px;
    cursor: pointer;

    span {
      display: block;
      background: white;
      width: 30px;
      height: 5px;
      border-radius: 3px;
      margin-bottom: 5px;
    }
  }
`;
const Nav = styled.div`
  padding-top: 10px;
`;
const User = styled.div`
  width: 90%;
  height: auto;
  padding: ${(props) => (props.show ? "10px" : "20px 0 20px 0")};
  margin: 10px auto;

  .image {
    margin: auto;
    width: ${(props) => (props.show ? "15vw" : "35px")};
    height: ${(props) => (props.show ? "15vw" : "35px")};
    background: red;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;
    transition: 0.3s;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .info {
    color: white;
  }
`;
const Menu = styled.ul`
  li {
    svg {
      width: 30px;
      fill: white;
      margin-right: 10px;
    }

    .active {
      background: white;
      color: #041c32;
      .top,
      .bot {
        display: block;
      }
      svg {
        fill: black;
      }

      .top:before {
        border-radius: 0 0 5px 0;
        display: block;
      }
      .bot:before {
        border-radius: 0 5px 0 0;
        display: block;
      }
    }
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  margin-left: 5%;
  width: 95%;
  padding: 5px;
  min-height: 40px;
  margin-bottom: 5px;
  border-radius: 8px 0 0 8px;
  position: relative;
  color: white;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    position: absolute;
    left: 50px;
  }

  .profile-icon {
    width: 25px;
    margin-right: 15px;
  }

  .top,
  .bot {
    display: none;
    width: 100%;
    height: 10px;
    background: white;
    position: absolute;
    right: 0;
  }
  .top:before,
  .bot:before {
    content: "";
    width: 100%;
    height: 10px;
    display: none;
    position: absolute;
    background: #041c32;
  }
  .top {
    top: -10px;
  }
  .bot {
    bottom: -10px;
  }
`;
const Log = styled.button`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #041c32;
  border: none;
  color: white;
  padding: 10px 10px 5px 10px;
  cursor: pointer;
  svg {
    width: 30px;
    fill: white;
  }
`;

const SideNavbar = () => {
  const [show, setShow] = useState(false);
  return (
    <Container style={{ width: `${show ? "22vw" : "50px"}` }}>
      <div className="menu-icon" onClick={() => setShow(!show)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Nav>
        <User show={show}>
          <div className="image">
            <img src={ava} alt="ava" />
          </div>
          <div className="info" style={{ display: `${show ? "block" : "none"}` }}>
            <h3 className="username">Hafidz</h3>
            <p className="role" style={{ fontStyle: "italic" }}>
              Frontend Developer
            </p>
          </div>
        </User>
        <Menu>
          <li>
            <Link to="dashboard">
              <span className="top"></span>
              <Tablet />
              <p>Dashboard</p>
              <span className="bot"></span>
            </Link>
          </li>
          <li>
            <Link to="profile">
              <span className="top"></span>
              <Profile className="profile-icon" />
              <p>Profile</p>
              <span className="bot"></span>
            </Link>
          </li>
          <li>
            <Link to="product">
              <span className="top"></span>
              <ProductIcon />
              <p>Product</p>
              <span className="bot"></span>
            </Link>
          </li>
        </Menu>
      </Nav>
      <Log>
        <p style={{ display: `${show ? "block" : "none"}` }}>Hafidz Hakim</p>
        <LogOut />
      </Log>
    </Container>
  );
};

export default SideNavbar;
